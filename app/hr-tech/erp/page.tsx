import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Boxes,
  Plug,
  Database,
  Workflow,
  Sparkles,
  LineChart,
  ExternalLink,
} from "lucide-react"
import PageBanner from "@/components/page-banner"
import StructuredData from "@/components/seo/structured-data"
import NewsletterLinkBlock from "@/components/newsletter-link-block"
import { pageMetadata, servicePageJsonLd } from "@/lib/seo"

/**
 * 회사 맞춤형 ERP 체계 구축 — HR테크 지원센터의 네 번째 장 (CEO 지시 2026-10-07).
 * 드롭다운 순서는 소개 → FAIR CRM → AX 컨설팅 → **ERP** → 플러스 티 에이아이 다.
 *
 * ⚠️ 실적 표기 원칙 — 근거는 **우리가 직접 만들어 운영 중인 공개 서비스로만** 든다.
 *    내부검토용 제품과 고객사 실명은 싣지 않는다. 구축 기간·비용 절감률 같은
 *    수치는 사업장마다 달라 **보장 표현을 쓰지 않는다**(이력 기준 원칙).
 *
 * ⚠️ ERP 구축은 과장하기 쉬운 영역이다. "무엇이든 만들어 드립니다"류의 문장을
 *    넣지 말 것. 할 수 있는 일과 전제(현행 시스템 조사가 먼저)를 같이 적는다.
 *
 * ⚠️ 법령 조문은 적지 않는다 — 「제○조」가 들어가면 전결 가-3·가-6호 사전 상신
 *    대상이 되고, 소개 화면에 조문을 인용할 실익이 없다.
 */

export const metadata: Metadata = pageMetadata({
  title: "회사 맞춤형 ERP 체계 구축 | AI로 기존 시스템 업그레이드·독자 ERP 구축",
  description:
    "쓰고 있는 ERP를 AI로 업그레이드하거나, 회사에 맞는 ERP를 새로 만들어 드립니다. 인사노무를 27년 자문한 공인노무사가 업무를 먼저 설계하고 그 설계대로 시스템을 만듭니다.",
  path: "/hr-tech/erp",
  keywords: [
    "맞춤형 ERP 구축",
    "ERP 업그레이드",
    "AI ERP",
    "중소기업 ERP",
    "인사 ERP 구축",
    "ERP 컨설팅",
    "사내 시스템 구축",
    "HR 시스템 개발",
  ],
})

/** 두 갈래 — 쓰던 것을 고치는 길과 새로 만드는 길. */
const TRACKS = [
  {
    icon: RefreshCw,
    tag: "쓰고 있는 시스템이 있다면",
    title: "기존 ERP 업그레이드",
    desc: "지금 쓰는 시스템을 버리지 않습니다. 손이 많이 가는 구간부터 찾아 AI로 대체하거나 보조하게 만들고, 필요한 곳만 새로 붙입니다.",
    items: [
      "엑셀로 따로 관리하던 표를 시스템 안으로 들인다",
      "사람이 옮겨 적던 값을 자동으로 넘긴다",
      "담당자만 아는 계산을 화면의 규칙으로 바꾼다",
      "쌓인 자료를 꺼내 볼 수 있는 화면을 만든다",
    ],
  },
  {
    icon: Boxes,
    tag: "맞는 시스템이 없다면",
    title: "독자 ERP 구축",
    desc: "시장 제품이 회사에 맞지 않아 업무를 제품에 맞춰 바꾸고 있다면, 반대로 만드는 편이 낫습니다. 쓰는 사람의 업무 순서대로 화면을 짭니다.",
    items: [
      "필요한 모듈만 골라 작게 시작한다",
      "쓰면서 고친다 — 한 번에 완성하지 않는다",
      "자료는 회사 소유로 둔다",
      "다른 시스템과는 연동으로 잇는다",
    ],
  },
]

/** 왜 우리에게 맡기는가 — 주장마다 근거가 붙는 것만 적는다. */
const STRENGTHS = [
  {
    icon: Workflow,
    title: "업무를 먼저 설계하고, 그다음에 만듭니다",
    desc: "도구를 먼저 고르면 업무가 도구에 맞춰 휘어집니다. 경영문제와 업무영역을 정의하고 사람과 AI의 역할경계를 그린 뒤에 시스템을 만듭니다. 이 순서를 AX 컨설팅의 7단계로 고정해 두었습니다.",
  },
  {
    icon: Database,
    title: "인사·노무 규칙을 아는 사람이 계산식을 설계합니다",
    desc: "급여·근태·연차·퇴직금은 계산식 하나가 틀리면 전 직원에게 같은 오류가 반복됩니다. 법령이 바뀌면 계산식도 바뀌어야 하고, 그 판단은 개발의 영역이 아닙니다. 27년 자문해 온 공인노무사가 직접 봅니다.",
  },
  {
    icon: Sparkles,
    title: "AI로 만드는 기간을 줄입니다",
    desc: "화면 초안과 반복 코드를 AI로 먼저 만들고 사람이 검토합니다. 종전보다 짧은 기간에 실제로 돌아가는 화면을 보여 드리고, 보시면서 고쳐 갑니다.",
  },
  {
    icon: LineChart,
    title: "만든 뒤에도 같이 있습니다",
    desc: "시스템은 만들고 끝나는 것이 아니라 법과 조직이 바뀔 때마다 손이 갑니다. 자문 관계로 이어지므로 바뀌는 지점을 미리 알려 드리고 함께 고칩니다.",
  },
]

/**
 * 근거 — **우리가 직접 만들어 지금 돌리고 있는 것**만 든다.
 * ⚠️ 내부검토용 제품은 넣지 않는다. 주소가 공개된 것만 싣는다.
 */
const BUILT = [
  {
    name: "글로벌 HR 자문 포털",
    url: "https://global.fairhr.net",
    desc: "회원사 자문 질의·자료실·진단·계산기를 한 곳에서. 권한과 회사별 자료 격리까지 직접 설계했습니다.",
  },
  {
    name: "FAIR CRM",
    url: "https://efm.fairhr.net",
    desc: "자문 이력과 진단·안전보건 기록을 쌓는 플랫폼. 우리 사무소의 실제 업무가 이 위에서 돌아갑니다.",
  },
  {
    name: "프리랜서 백신",
    url: "https://freelancer.plustai.com",
    desc: "계약 형태를 진단하고 계약서·전자서명까지 잇는 서비스. 결제와 전자계약 연동을 포함합니다.",
  },
  {
    name: "산업안전 백신",
    url: "https://safety.plustai.com",
    desc: "안전보건 이행 상태를 진단하고 보고서를 만드는 서비스. 규칙 기반 판정에 AI 보조를 붙였습니다.",
  },
]

/** 진행 순서 — 조사부터 운영까지. 숫자는 옅게 깔고 제목을 세운다. */
const STEPS = [
  {
    n: "1",
    title: "현행 조사",
    desc: "지금 무엇을 어떤 순서로 하고 있는지, 어디서 시간이 가장 많이 드는지 봅니다. 쓰는 시스템과 엑셀, 종이까지 함께 봅니다.",
  },
  {
    n: "2",
    title: "업무 재설계",
    desc: "없애도 되는 일, AI가 할 일, 사람과 AI가 함께 할 일, 사람이 판단할 일을 나눕니다.",
  },
  {
    n: "3",
    title: "범위와 우선순위",
    desc: "한 번에 다 만들지 않습니다. 효과가 큰 모듈부터 정하고 일정과 비용을 함께 봅니다.",
  },
  {
    n: "4",
    title: "제작과 확인",
    desc: "돌아가는 화면을 짧은 주기로 보여 드립니다. 쓰시면서 고칠 것을 말씀해 주시면 반영합니다.",
  },
  {
    n: "5",
    title: "운영과 개선",
    desc: "쓰기 시작한 뒤에도 법·조직 변화에 맞춰 손봅니다. 자료 백업과 권한 관리도 함께 봅니다.",
  },
]

export default function ErpPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <StructuredData
        data={servicePageJsonLd({
          name: "회사 맞춤형 ERP 체계 구축",
          description:
            "AI를 활용해 기존 ERP 시스템을 업그레이드하거나 회사에 맞는 독자 ERP를 구축하는 서비스",
          path: "/hr-tech/erp",
        })}
      />
      <PageBanner
        title="회사 맞춤형 ERP 체계 구축"
        subtitle="쓰던 것을 고치거나, 회사에 맞게 새로 만듭니다"
        backgroundImage="/FAIR000.png"
      />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14 lg:py-16">
        <div className="mb-6">
          <Link href="/hr-tech">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              HR테크 지원센터
            </Button>
          </Link>
        </div>

        {/* 머리말 */}
        <section className="mb-12">
          <h2 className="break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            시스템이 업무를 따라와야 합니다
          </h2>
          <p className="mt-4 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            많은 회사가 반대로 하고 있습니다. 제품을 먼저 들이고, 그 제품이 되는 방식으로 업무를
            바꿉니다. 그러면 쓰지 않는 기능이 절반이고, 정작 필요한 일은 엑셀로 따로 합니다.
          </p>
          <p className="mt-4 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            FAIR인사노무컨설팅은 <b>AI를 활용해 지금 쓰는 ERP를 업그레이드</b>하거나,{" "}
            <b>회사에 맞는 ERP를 새로 만들어 드립니다.</b> 어느 쪽이든 먼저 하는 일은 같습니다 —
            업무를 펼쳐 놓고 보는 것입니다.
          </p>
        </section>

        {/* 두 갈래 */}
        <section className="mb-12">
          <h2 className="mb-2 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            두 갈래로 들어갑니다
          </h2>
          <p className="mb-6 break-keep text-sm text-muted-foreground sm:text-base">
            어느 쪽이 맞는지는 현행 조사 뒤에 정합니다. 처음부터 하나를 정해 두지 않습니다.
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            {TRACKS.map((t) => {
              const Icon = t.icon
              return (
                <div
                  key={t.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-blue-900/20 bg-white"
                >
                  <div className="h-1 w-full bg-primary" />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">
                      {t.tag}
                    </span>
                    <h3 className="mt-1 break-keep text-lg font-bold text-gray-900">{t.title}</h3>
                    <p className="mt-2 break-keep text-sm leading-relaxed text-gray-700">
                      {t.desc}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                      {t.items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-2.5 break-keep text-sm leading-relaxed text-gray-600"
                        >
                          <span
                            aria-hidden
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 왜 우리인가 */}
        <section className="mb-12">
          <h2 className="mb-6 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            개발사와 다른 점
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {STRENGTHS.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-blue-900/20 border-l-4 border-l-primary bg-white p-5"
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="break-keep text-base font-bold text-gray-900">{s.title}</span>
                  </div>
                  <p className="break-keep text-sm leading-relaxed text-gray-700">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* 근거 — 직접 만들어 돌리고 있는 것 */}
        <section className="mb-12">
          <h2 className="mb-2 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            우리가 직접 만들어 쓰고 있습니다
          </h2>
          <p className="mb-6 break-keep text-sm leading-relaxed text-muted-foreground sm:text-base">
            아래는 FAIR인사노무컨설팅이 설계·제작해 <b>지금 운영하고 있는 서비스</b>입니다. 주소를
            눌러 직접 보실 수 있습니다. 만들 수 있다는 말보다 돌아가는 것을 보여 드리는 편이
            정확합니다.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {BUILT.map((b) => (
              <li
                key={b.name}
                className="rounded-2xl border border-blue-900/20 bg-white p-5 transition-colors hover:border-primary/40"
              >
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 break-keep text-base font-bold text-gray-900 hover:text-primary"
                >
                  {b.name}
                  <ExternalLink aria-hidden className="h-3.5 w-3.5 shrink-0 text-primary" />
                </a>
                <p className="mt-2 break-keep text-sm leading-relaxed text-gray-600">{b.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 break-keep text-xs leading-relaxed text-gray-400">
            ※ 위 목록은 자사 서비스 기준입니다. 고객사 사내 시스템은 비밀유지 의무에 따라 표기하지
            않습니다.
          </p>
        </section>

        {/* 진행 순서 */}
        <section className="mb-12">
          <h2 className="mb-6 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            진행 순서
          </h2>
          <ol className="space-y-3">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="flex items-start gap-4 rounded-2xl border border-blue-900/20 bg-white p-5"
              >
                <span
                  aria-hidden
                  className="shrink-0 text-3xl font-bold leading-none text-blue-900/15"
                >
                  {s.n}
                </span>
                <div className="min-w-0">
                  <p className="break-keep text-base font-bold text-gray-900">{s.title}</p>
                  <p className="mt-1 break-keep text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* AX 컨설팅으로 잇기 */}
        <section className="mb-12 rounded-2xl border border-border/60 bg-gray-50 p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Plug className="h-5 w-5" />
            </span>
            <h2 className="break-keep text-lg font-bold text-gray-900 sm:text-xl">
              무엇을 만들지부터 정해야 한다면
            </h2>
          </div>
          <p className="break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            시스템 이야기를 하기 전에 업무를 다시 설계하는 단계가 있습니다. AX 컨설팅의 7단계
            모델에서 <b>업무영역 재설계</b>를 거치면, 무엇을 시스템으로 만들어야 하는지가 나옵니다.
            ERP 구축은 그 실행 단계에서 나오는 결과물입니다.
          </p>
          <Link
            href="/hr-tech/ax-consulting"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:text-base"
          >
            AX 컨설팅 보기 <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-2xl bg-primary p-6 text-center text-primary-foreground sm:p-8">
            <h2 className="mb-2 break-keep text-xl font-bold sm:text-2xl">
              지금 무엇을 쓰고 계신지부터 듣겠습니다
            </h2>
            <p className="mb-5 break-keep text-sm leading-relaxed opacity-90 sm:text-base">
              쓰는 시스템과 손이 많이 가는 업무를 알려주시면, 고치는 쪽이 맞는지 새로 만드는 쪽이
              맞는지부터 말씀드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-50"
            >
              ERP 구축 문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <p className="mt-8 break-keep text-xs leading-relaxed text-gray-400">
          ※ 구축 범위·기간·비용은 현행 시스템과 업무량에 따라 달라지므로 현행 조사 뒤에
          안내드립니다. 이 화면은 서비스 소개이며 특정한 성과를 보장하는 내용이 아닙니다.
        </p>

        <NewsletterLinkBlock />
      </div>
    </div>
  )
}
