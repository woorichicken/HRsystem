/**
 * 규칙 기반 서비스 추천 — 순수 함수(오프라인·API 오류에도 항상 동작).
 *
 * 원칙: 법적 판단을 하지 않는다. "~일 수 있습니다" 수준의 안내 문구만 만든다.
 * 고민(concern)이 1차 축이고, 규모·업종·현재 상태가 보정한다.
 */

import type { ConsultAnswers, Recommendation, RecommendTarget } from "./types"

/** 고민 → 기본 추천(주/대안/무료진단 앵커). */
const BY_CONCERN: Record<
  ConsultAnswers["concern"],
  { primary: RecommendTarget; alt?: RecommendTarget; freeAnchor?: Recommendation["freeAnchor"] }
> = {
  wage: { primary: "payroll-system", alt: "labor-consulting", freeAnchor: "ordinary-wage" },
  dispute: { primary: "labor-disputes", alt: "labor-consulting" },
  // 괴롭힘은 조사(사후)와 교육(사전)이 다른 일이다. 둘을 나란히 보여 준다
  // — 두 페이지도 서로 링크로 이어 두었다(2026-08-19).
  harassment: { primary: "workplace-harassment", alt: "harassment-training" },
  safety: { primary: "serious-accident-law", alt: "labor-consulting", freeAnchor: "safety" },
  freelancer: { primary: "freelancer", alt: "labor-consulting", freeAnchor: "freelancer" },
  // 인사제도의 대안은 종전대로 상시 자문이다. AX 는 전용 고민 항목이 생겼으니
  // 기존 추천을 흔들지 않는다.
  hr_system: { primary: "hr-consulting", alt: "labor-consulting" },
  ax: { primary: "ax-consulting", alt: "hr-consulting" },
  global: { primary: "global-companies", alt: "glossary" },
  overall: { primary: "labor-consulting", alt: "hr-consulting", freeAnchor: "ordinary-wage" },
}

/** 고민별 안내 문구(규칙 폴백용 — LLM 실패 시 그대로 노출). */
const REASON: Record<ConsultAnswers["concern"], string> = {
  wage:
    "임금·수당은 산정 기준을 잘못 잡으면 임금체불·소급지급으로 이어질 수 있습니다. 통상임금·평균임금 산정과 포괄임금 운영을 먼저 점검해 보시길 권합니다.",
  dispute:
    "해고·징계는 절차와 사유 모두 정당해야 하고, 다투어지면 대응 준비가 필요합니다. 사건 대응과 함께 재발 방지를 위한 규정 정비를 함께 보시길 권합니다.",
  harassment:
    "직장 내 괴롭힘은 접수·조사·조치 절차를 법에 맞게 밟는 것이 핵심입니다. 특히 대표·임원이 관련되면 외부 조사기관의 객관적 조사가 필요할 수 있습니다. 아직 사건이 없다면 관리자 기준을 맞추는 예방교육부터 보시는 편이 비용이 적게 듭니다.",
  safety:
    "산업안전·중대재해는 '체계를 만들고 실제로 이행한 기록'이 중요합니다. 안전보건관리체계 구축과 이행 점검부터 살펴보시길 권합니다.",
  freelancer:
    "3.3 프리랜서는 계약서 명칭이 아니라 실제 운영 방식이 근로자성을 좌우합니다. 근로자 추정제 논의도 진행 중이라 진단·계약·증빙을 함께 점검해 보시길 권합니다.",
  hr_system:
    "인사제도는 설계에서 끝나지 않고 현장에서 운영돼야 효과가 납니다. 제도 설계와 이를 담는 시스템까지 함께 보시길 권합니다.",
  ax:
    "AI를 몇 개 업무에 적용하는 것과 업무방식을 다시 설계하는 것은 다른 일입니다. AX 컨설팅은 도구를 먼저 고르지 않고, 경영문제와 업무영역을 정의한 뒤 사람과 AI의 역할경계를 다시 그립니다. 7단계로 나누어 진행합니다.",
  global:
    "외국계 기업은 한국 법령과 본사 방침을 함께 맞춰야 하고, 그 과정이 대부분 영문 문서로 남습니다. 같은 한국어를 문서마다 다른 영어로 적어 두면 나중에 다툼에서 불리해질 수 있습니다. 지원센터 자문과 함께 노동법 한영사전을 쓰실 수 있습니다.",
  overall:
    "전반 점검을 원하시면, 상시 자문으로 취약 지점을 먼저 진단하고 우선순위를 잡는 것이 효율적입니다.",
}

export function recommendPlan(a: ConsultAnswers): Recommendation {
  const base = BY_CONCERN[a.concern]
  let primary = base.primary
  let alt = base.alt
  let reason = REASON[a.concern]

  // 보정 1 — 제조·건설은 안전 리스크 비중이 큼.
  if (a.industry === "manufacture_construction" && a.concern === "overall") {
    alt = "serious-accident-law"
    reason += " 제조·건설 현장은 산업안전 리스크 비중이 커 함께 점검하시면 좋습니다."
  }

  // 보정 2 — 50인 이상은 인사제도·체계 정비 수요가 큼.
  if ((a.size === "mid" || a.size === "large") && a.concern === "hr_system") {
    alt = "labor-consulting"
  }

  // 보정 3 — 5인 미만은 규정 기본기부터.
  if (a.size === "under5" && a.concern === "overall") {
    reason += " 5인 미만이라도 근로계약서·임금명세서 등 기본 서류는 반드시 갖추셔야 합니다."
  }

  // 보정 4 — 자문 노무사가 없으면 상시 자문을 대안으로 제시.
  //
  // ⚠️ 단, **짝으로 묶어 둔 대안은 덮지 않는다**(2026-10-04).
  //    괴롭힘은 조사↔예방교육, AX 는 재설계↔컨설팅, 외국계는 지원센터↔한영사전이
  //    한 쌍이다. 여기서 상시 자문으로 갈아끼우면 그 짝이 화면에서 사라진다.
  //    대신 상시 자문 권유는 안내 문구에 덧붙여 값을 잃지 않게 한다.
  const PAIRED: ConsultAnswers["concern"][] = ["harassment", "ax", "global"]
  if (a.status === "no_advisor" && primary !== "labor-consulting") {
    if (PAIRED.includes(a.concern)) {
      reason += " 자문 노무사가 없으시다면, 상시 자문으로 전반을 함께 보시는 방법도 있습니다."
    } else {
      alt = "labor-consulting"
    }
  }

  // 무료 간이진단 우선 권유 — 자문이 없거나/모르거나/전반 점검일 때.
  const startFree =
    !!base.freeAnchor &&
    (a.status === "no_advisor" || a.status === "unknown" || a.concern === "overall" || a.status === "internal_only")

  return {
    primary,
    alt: alt === primary ? undefined : alt,
    reason,
    startFree,
    freeAnchor: base.freeAnchor,
  }
}
