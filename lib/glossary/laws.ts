/* ------------------------------------------------------------------
 * ⚠️ 이 파일은 **생성물이다. 직접 고치지 말 것.**
 *
 * 정본: global-hr-portal/src/lib/glossary/laws.ts
 * 복제: node scripts/glossary-sync-fairhr.mjs  (정본 저장소에서 실행)
 * 정본 지문: 9664ef08f12f1ccb
 *
 * 사전을 고칠 일이 있으면 정본에서 고치고 이 스크립트를 다시 돌린다.
 * 여기서 고치면 다음 복제 때 덮어써지고, 그 사이에 양쪽이 다른 말을 한다.
 * ------------------------------------------------------------------ */
/**
 * 사전이 인용하는 법령의 **영문 제명 대장**.
 *
 * 왜 따로 두나 — 사용자가 "우리 말을 믿어라" 가 아니라 **직접 확인할 수 있어야**
 * 하기 때문이다. 영문 제명이 있어야 법제처 영문법령 페이지로 바로 보낼 수 있다.
 *
 * ⚠️ 영문 제명은 **법제처 공식 영문법령에서 확인한 것만** 적는다(조회 2026-09-01).
 *    지어낸 제명으로 링크를 걸면 없는 페이지로 보내게 된다.
 */

export interface LawInfo {
  /** 법제처 공식 영문 제명 */
  english: string;
  /** 이 사전이 참고한 영문본의 시행일자 — 법은 개정되므로 기준을 밝힌다 */
  effectiveDate: string;
}

export const LAWS: Record<string, LawInfo> = {
  근로기준법: { english: "LABOR STANDARDS ACT", effectiveDate: "2025-10-23" },
  "근로기준법 시행령": {
    english: "ENFORCEMENT DECREE OF THE LABOR STANDARDS ACT",
    effectiveDate: "2021-11-19",
  },
  최저임금법: { english: "MINIMUM WAGE ACT", effectiveDate: "2020-05-26" },
  "근로자퇴직급여 보장법": {
    english: "ACT ON THE GUARANTEE OF EMPLOYEES' RETIREMENT BENEFITS",
    effectiveDate: "2022-07-12",
  },
  "노동조합 및 노동관계조정법": {
    english: "TRADE UNION AND LABOR RELATIONS ADJUSTMENT ACT",
    effectiveDate: "2026-03-10",
  },
  산업안전보건법: {
    english: "OCCUPATIONAL SAFETY AND HEALTH ACT",
    effectiveDate: "2025-10-01",
  },
  "기간제 및 단시간근로자 보호 등에 관한 법률": {
    english: "ACT ON THE PROTECTION OF FIXED-TERM AND PART-TIME EMPLOYEES",
    effectiveDate: "2021-05-18",
  },
  "중대재해 처벌 등에 관한 법률": {
    english: "SERIOUS ACCIDENTS PUNISHMENT ACT",
    effectiveDate: "2022-01-27",
  },
  "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률": {
    english: "EQUAL EMPLOYMENT OPPORTUNITY AND WORK-FAMILY BALANCE ASSISTANCE ACT",
    effectiveDate: "2025-10-01",
  },
  // 2026-09-01 수확으로 추가된 법령
  "파견근로자 보호 등에 관한 법률": {
    english: "ACT ON THE PROTECTION, ETC. OF TEMPORARY AGENCY WORKERS",
    effectiveDate: "2020-12-08",
  },
  "근로자참여 및 협력증진에 관한 법률": {
    english: "ACT ON THE PROMOTION OF EMPLOYEES' PARTICIPATION AND COOPERATION",
    effectiveDate: "2022-12-11",
  },
  고용보험법: { english: "EMPLOYMENT INSURANCE ACT", effectiveDate: "2025-10-01" },
  산업재해보상보험법: {
    english: "INDUSTRIAL ACCIDENT COMPENSATION INSURANCE ACT",
    effectiveDate: "2026-02-12",
  },
  "고용상 연령차별금지 및 고령자고용촉진에 관한 법률": {
    english:
      "ACT ON PROHIBITION OF AGE DISCRIMINATION IN EMPLOYMENT AND ELDERLY EMPLOYMENT PROMOTION",
    effectiveDate: "2022-06-10",
  },
};

/** 사전의 법령 대응어를 확인한 날. 화면에 그대로 표시한다. */
export const SOURCE_CHECKED_ON = "2026년 9월 1일";

/**
 * 법제처 국가법령정보센터 **영문법령** 검색 주소.
 * 사용자가 눌러서 원문을 직접 볼 수 있어야 근거가 근거가 된다.
 */
export function lawLink(koreanName: string): string | null {
  const info = LAWS[koreanName];
  if (!info) return null;
  const query = encodeURIComponent(info.english);
  return `https://www.law.go.kr/LSW/eng/engLsSc.do?menuId=1&query=${query}`;
}
