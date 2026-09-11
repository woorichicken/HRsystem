import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  Flag,
  Search,
  Shuffle,
  Gauge,
  Calculator,
  Map,
  TrendingUp,
  Building2,
} from "lucide-react"
import PageBanner from "@/components/page-banner"
import StructuredData from "@/components/seo/structured-data"
import NewsletterLinkBlock from "@/components/newsletter-link-block"
import { pageMetadata, servicePageJsonLd } from "@/lib/seo"

/**
 * AX 컨설팅 — HR테크 지원센터의 세 번째 장 (CEO 지시 2026-09-11).
 * 메뉴 순서는 FAIR CRM → AX 컨설팅 → 플러스 티 에이아이 다.
 *
 * ⚠️ 7-Stage Model 은 우리가 지어낸 것이 아니라 **정본이 따로 있다.**
 *    정본: `projects\ax-navigator\public\index.html` 의 `STAGES` 배열
 *    (화면은 https://ax-navigator.vercel.app — 내부 시범용이라 Basic 인증으로 잠겨 있다).
 *    단계명·핵심질문·산출물을 고칠 때는 **정본을 먼저 고치고 여기에 옮긴다.**
 *    양쪽이 어긋나면 컨설팅 현장과 홍보 문구가 다른 말을 하게 된다.
 *
 * ⚠️ 진행 중인 컨설팅 표기 원칙
 *  - 내비게이터에는 고객사의 **경영지표·직원 실명·내부 감사 지적**이 들어 있다.
 *    그 어느 것도 이 공개 화면에 옮기지 않았다. 여기 적힌 것은 고객사명·업무영역·
 *    진행 중이라는 사실뿐이다.
 *  - 진행 상황은 **기준 시점을 함께 적는다.** 단계는 바뀌는데 문구만 남으면
 *    사실과 어긋난 표시가 된다(이력 기준 원칙).
 */

export const metadata: Metadata = pageMetadata({
  title: "AX 컨설팅 | 7단계 모델로 업무를 다시 설계합니다",
  description:
    "AX(AI Transformation) 컨설팅은 AI 도구를 먼저 고르지 않습니다. 경영문제와 업무영역을 정의하고 사람과 AI의 역할경계를 다시 그린 뒤에 기술을 선택합니다. FAIR인사노무컨설팅의 7단계 모델(Stage 0~6)과 진행 중인 컨설팅을 안내합니다.",
  path: "/hr-tech/ax-consulting",
  keywords: [
    "AX 컨설팅",
    "AI Transformation",
    "AX 컨설팅 노무사",
    "업무 프로세스 재설계",
    "HR AX",
    "AI 도입 컨설팅",
    "경영혁신 컨설팅",
    "7단계 모델",
  ],
})

/**
 * 7단계 모델 — 정본(ax-navigator `STAGES`)에서 옮긴 값이다.
 * `q`(핵심질문)·`out`(산출물)은 정본 문안 그대로다. 임의로 다듬지 말 것.
 */
const STAGES = [
  {
    n: "0",
    icon: Flag,
    en: "Project Setup",
    ko: "프로젝트 설정",
    q: "누구를 위해 무엇을 변화시킬 것인가?",
    out: ["Project Charter(프로젝트 헌장)", "Member & Role(참여자·역할 정의)"],
  },
  {
    n: "1",
    icon: Search,
    en: "Problem & Domain Definition",
    ko: "문제 및 업무영역 정의",
    q: "진짜 해결할 경영문제는 무엇인가?",
    out: [
      "Problem Statement(문제정의문)",
      "Baseline / Target KPI(기준·목표 성과지표)",
      "Evidence Pack(근거자료 묶음)",
    ],
  },
  {
    n: "2",
    icon: Shuffle,
    en: "Domain Reimagination",
    ko: "업무영역 재설계",
    q: "AI를 전제로 이 업무를 다시 만든다면 무엇이 달라져야 하는가?",
    out: [
      "As-Is Process(현행 프로세스)",
      "Pain Point Map(애로사항 지도)",
      "Human-AI Boundary(사람-AI 역할경계)",
      "To-Be Process(목표 프로세스)",
      "Use Case Portfolio(활용사례 포트폴리오)",
    ],
  },
  {
    n: "3",
    icon: Gauge,
    en: "Capability Assessment",
    ko: "역량 진단",
    q: "실행할 역량이 있는가?",
    out: [
      "Capability Score(역량 점수)",
      "AX Readiness Score(AX 준비도)",
      "Capability Gap & Recommended Action(역량격차·권고조치)",
    ],
  },
  {
    n: "4",
    icon: Calculator,
    en: "Business Case",
    ko: "사업타당성 분석",
    q: "실제 가치가 투자비보다 큰가?",
    out: [
      "Capacity Value(생산능력 가치)",
      "Realized Value(실현가치)",
      "ROI / Payback Period(투자수익률·회수기간)",
    ],
  },
  {
    n: "5",
    icon: Map,
    en: "Execution Roadmap",
    ko: "실행 로드맵",
    q: "누가 언제 어떻게 실행할 것인가?",
    out: [
      "90-Day Roadmap(90일 로드맵)",
      "1-Year Plan(연간 계획)",
      "Owner & KPI Map(담당자·KPI 연결표)",
    ],
  },
  {
    n: "6",
    icon: TrendingUp,
    en: "Scale & Review",
    ko: "확산 및 성과검토",
    q: "성과가 났고 확산 가능한가?",
    out: [
      "Benefit Tracking(성과추적)",
      "Lessons Learned(학습사항)",
      "Scale Recommendation(확산권고)",
    ],
  },
]

/** AI를 먼저 고르지 않는다 — 순서를 그림 한 줄로 보인다. */
const ORDER = [
  { label: "경영문제", note: "무엇을 풀 것인가" },
  { label: "업무영역 재설계", note: "사람과 AI의 경계" },
  { label: "기술 선택", note: "AI · HR Tech · Data" },
]

export default function AxConsultingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <StructuredData
        data={servicePageJsonLd({
          name: "AX 컨설팅",
          description:
            "경영문제 정의부터 업무영역 재설계, 역량진단, 사업타당성, 실행 로드맵, 확산까지 7단계로 진행하는 AI Transformation 컨설팅",
          path: "/hr-tech/ax-consulting",
        })}
      />
      <PageBanner
        title="AX 컨설팅"
        subtitle="AI를 도입하기 전에, 일하는 방식을 다시 설계합니다"
        backgroundImage="/FAIR000.png"
      />

      <div className="mx-auto max-w-5xl py-10 md:py-14 lg:py-16 px-4">
        <div className="mb-6">
          <Link href="/hr-tech">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              HR테크 지원센터
            </Button>
          </Link>
        </div>

        {/* 무엇이 다른가 — 순서 도식 */}
        <section className="mb-12">
          <h2 className="break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            도구를 먼저 고르지 않습니다
          </h2>
          <p className="mt-4 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            AI를 몇 개의 업무에 적용하는 것과, 회사의 업무방식 자체를 AI 시대에 맞게 다시 설계하는
            것은 다른 문제입니다. 뒤쪽이 <b>AX(AI Transformation)</b>입니다.
          </p>

          <ol className="mt-6 grid gap-2 sm:grid-cols-3">
            {ORDER.map((o, i) => (
              <li key={o.label} className="relative">
                {/* 칸 사이 화살표 — 데스크톱에서만 */}
                {i < ORDER.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-blue-900/25 sm:block"
                  />
                )}
                <div className="flex h-full items-baseline gap-3 rounded-xl border border-blue-900/15 bg-white p-4">
                  <span className="shrink-0 text-2xl font-bold text-blue-900/15">{i + 1}</span>
                  <span className="min-w-0">
                    <span className="block break-keep text-sm font-bold text-gray-900">
                      {o.label}
                    </span>
                    <span className="block break-keep text-xs text-muted-foreground">{o.note}</span>
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-5 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            먼저 기업의 실제 업무를 펼쳐 놓고, 없애도 되는 일과 AI가 할 일, 사람과 AI가 함께 할 일,
            반드시 사람이 판단해야 할 일을 나눕니다. 필요한 AI·HR Tech·Data·System은 그다음에
            선택합니다.
          </p>
        </section>

        {/* 7단계 모델 — 세로 타임라인 */}
        <section className="mb-12">
          <div className="mb-2 flex flex-wrap items-baseline gap-2">
            <h2 className="break-keep text-xl font-bold text-gray-900 sm:text-2xl">7단계 모델</h2>
            <span className="text-sm text-muted-foreground">7-Stage Model</span>
          </div>
          <p className="mb-6 break-keep text-sm leading-relaxed text-muted-foreground sm:text-base">
            각 단계는 <b>핵심질문</b>으로 열리고 <b>산출물</b>로 닫힙니다. 앞 단계의 산출물이 나오지
            않으면 다음 단계로 넘어가지 않습니다.
          </p>

          <ol className="relative space-y-3 pl-[52px]">
            <span aria-hidden className="absolute left-[21px] top-6 bottom-6 w-px bg-blue-900/15" />
            {STAGES.map((s) => {
              const Icon = s.icon
              return (
                <li key={s.n} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[52px] top-5 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="overflow-hidden rounded-2xl border border-blue-900/20 bg-white">
                    <div className="flex items-start gap-4 p-5">
                      {/* 옅은 큰 숫자 — 단계 번호를 배경처럼 둔다 */}
                      <span
                        aria-hidden
                        className="hidden shrink-0 text-4xl font-bold leading-none text-blue-900/10 sm:block"
                      >
                        {s.n}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-xs font-bold uppercase tracking-wide text-primary">
                            Stage {s.n}
                          </span>
                          <span className="break-keep text-base font-bold text-gray-900">
                            {s.ko}
                          </span>
                          <span className="break-keep text-xs text-muted-foreground">{s.en}</span>
                        </div>
                        <p className="mt-2 break-keep text-sm leading-relaxed text-gray-800">
                          <span className="mr-1.5 inline-block rounded-md bg-primary/10 px-2 py-0.5 align-middle text-xs font-bold text-primary">
                            핵심질문
                          </span>
                          {s.q}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-1.5 border-t border-gray-100 pt-3">
                          {s.out.map((o) => (
                            <li
                              key={o}
                              className="break-keep rounded-full border border-blue-900/15 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
                            >
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {/* 진행 중인 컨설팅 */}
        <section className="mb-12">
          <h2 className="mb-2 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            진행 중인 컨설팅
          </h2>
          <p className="mb-5 break-keep text-sm text-muted-foreground sm:text-base">
            이 모델은 문서로만 있는 것이 아니라 실제 컨설팅에 쓰고 있습니다.
          </p>

          <div className="overflow-hidden rounded-2xl border border-blue-900/20 bg-white">
            <div className="h-1 w-full bg-primary" />
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="break-keep text-base font-bold text-gray-900">세창상사</div>
                  <div className="break-keep text-xs text-muted-foreground">
                    경영혁신 AX Transformation
                  </div>
                </div>
              </div>

              <dl className="mt-5 grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold text-muted-foreground">업무영역</dt>
                  <dd className="mt-1 break-keep text-sm text-gray-800">
                    성과관리(Performance Management)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-muted-foreground">진행 상황</dt>
                  <dd className="mt-1 break-keep text-sm text-gray-800">
                    업무영역 재설계(Stage 2) 진행 중 · 2026년 9월 기준
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <p className="mt-4 break-keep text-xs leading-relaxed text-gray-400">
            ※ 진행 상황은 위에 적은 시점 기준이며, 개별 기업의 성과를 보장하는 내용이 아닙니다.
            고객사의 경영지표와 내부 자료는 비밀유지 의무에 따라 표기하지 않습니다.
          </p>
        </section>

        {/* 더 읽을 거리 — 이미 색인되는 뉴스레터 두 글과 이어 붙인다 */}
        <section className="mb-12">
          <h2 className="mb-2 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            더 읽을 거리
          </h2>
          <p className="mb-5 break-keep text-sm text-muted-foreground sm:text-base">
            AX 컨설팅을 어떤 관점으로 보고 있는지 적은 글입니다.
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {[
              {
                href: "/newsletter/ax-consulting-and-hr-tech",
                title: "AX 컨설팅과 HR Tech, 무엇이 다른가 — 채용은 이미 고영향 인공지능 영역입니다",
              },
              {
                href: "/newsletter/ax-consulting-seminar-2026-09",
                title: "[FAIR인사노무컨설팅 주최] AX 컨설팅 세미나 안내",
              },
            ].map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col justify-between gap-3 rounded-xl border border-border/60 bg-white px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="break-keep text-sm font-medium text-gray-800 group-hover:text-primary sm:text-base">
                    {p.title}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-2xl bg-primary p-6 text-center text-primary-foreground sm:p-8">
            <h2 className="mb-2 break-keep text-xl font-bold sm:text-2xl">
              우리 회사의 업무영역부터 함께 보겠습니다
            </h2>
            <p className="mb-5 break-keep text-sm leading-relaxed opacity-90 sm:text-base">
              어떤 업무를 먼저 다룰지, 지금 어느 단계에서 시작하면 되는지 알려드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-50"
            >
              AX 컨설팅 문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <NewsletterLinkBlock />
      </div>
    </div>
  )
}
