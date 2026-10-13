import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileSignature,
  Wallet,
  Clock,
  CalendarCheck,
  HardHat,
  PiggyBank,
  ScrollText,
  Search,
  ClipboardCheck,
  Handshake,
} from "lucide-react"
import PageBanner from "@/components/page-banner"
import StructuredData from "@/components/seo/structured-data"
import NewsletterLinkBlock from "@/components/newsletter-link-block"
import { pageMetadata, servicePageJsonLd } from "@/lib/seo"

/**
 * 근로감독 대응 컨설팅 (CEO 지시 2026-10-13 — "글로벌 포털의 노무진단을 사용해도 좋다").
 *
 * ⚠️ 점검 영역·항목은 **지어낸 것이 아니다.** 글로벌 HR 자문 포털의 노무관리 진단
 *    (7개 영역·28문항)에서 가져왔고, 그 진단은 원본 「기초 인사노무 진단 보고서」를
 *    재현하도록 회귀 테스트로 잠겨 있으며 **2026-07-27 노무사 검수로 확정**된 것이다.
 *    정본: `global-hr-portal/src/lib/diagnosis/labor/data.ts` (LABOR_SECTIONS)
 *    항목을 더하거나 이름을 바꿀 때는 **정본을 먼저 보고** 옮긴다. 양쪽이 어긋나면
 *    화면이 약속한 점검표와 실제 진단이 다른 말을 한다.
 *
 * ⚠️ **조문 번호를 적지 않았다.** 정본에는 `lawRef`(근로기준법 제○조)가 항목마다
 *    붙어 있지만 여기에는 옮기지 않았다 — 「제○조」가 들어가면 전결 가-3·가-6호
 *    사전 상신 대상이 되고, 서비스 소개 화면에 조문을 인용할 실익이 없다.
 *    조문이 필요한 자리는 진단 보고서다.
 *
 * ⚠️ **결과를 보장하는 표현을 쓰지 않는다.** 「감독을 통과시켜 드립니다」·「과태료를
 *    막아 드립니다」류 금지. 감독 결과는 사업장 실태에 달려 있고 우리가 약속할 수
 *    있는 것은 준비의 범위뿐이다. 법적 효과는 가능성으로만 적는다.
 */

export const metadata: Metadata = pageMetadata({
  title: "근로감독 대응 컨설팅 | 7개 영역 28개 항목 사전 점검",
  description:
    "근로감독이 들어오기 전에 지적받을 지점을 먼저 찾습니다. 근로계약·임금·근로시간·휴일휴가·산업안전·퇴직금·규정 7개 영역 28개 항목을 공인노무사 검수 기준으로 점검하고, 서류 정비부터 현장 대응과 사후 시정까지 함께 합니다.",
  path: "/services/labor-inspection",
  keywords: [
    "근로감독 대응",
    "근로감독 컨설팅",
    "노동청 감독 대비",
    "근로감독 준비",
    "노무 진단",
    "임금체불 점검",
    "근로계약서 점검",
    "시정지시 대응",
  ],
})

/**
 * 점검 7개 영역 — 포털 노무관리 진단(LABOR_SECTIONS)에서 옮겼다.
 * `items` 는 그 영역의 문항 이름(shortTitle)이다. 문항 수 합계 28.
 */
const AREAS = [
  {
    icon: FileSignature,
    title: "근로계약",
    desc: "근로계약서 교부·기재사항·수습·기간제",
    items: [
      "근로계약서 작성·교부",
      "필수기재사항 포함 여부",
      "수습기간 서면 명시",
      "기간제 2년 초과·전환의무",
      "채용 시 근로조건 고지",
    ],
  },
  {
    icon: Wallet,
    title: "임금·보상",
    desc: "최저임금·가산수당·통상임금·명세서·체불",
    items: [
      "최저임금 준수",
      "연장·야간·휴일 가산수당",
      "통상임금에 정기상여금 포함",
      "임금명세서 교부",
      "임금체불 여부",
    ],
  },
  {
    icon: Clock,
    title: "근로시간",
    desc: "법정근로시간·연장근로·휴게·기록관리",
    items: [
      "주 52시간 한도 준수",
      "휴게시간 부여",
      "유연근무제 법정 요건",
      "근로시간 기록 관리",
    ],
  },
  {
    icon: CalendarCheck,
    title: "휴일·휴가",
    desc: "연차유급휴가·사용촉진·모성보호",
    items: [
      "연차유급휴가 부여",
      "연차사용촉진·수당",
      "출산·배우자출산휴가",
      "육아휴직·근로시간 단축",
    ],
  },
  {
    icon: HardHat,
    title: "산업안전",
    desc: "안전보건관리체계·교육·위험성평가",
    items: ["안전보건관리체계 구축", "산업안전보건교육", "위험성평가 실시·기록"],
  },
  {
    icon: PiggyBank,
    title: "퇴직금",
    desc: "지급 기한·산정 항목·퇴직연금",
    items: ["퇴직금 14일 내 지급", "퇴직금 산정 급여항목", "퇴직연금 가입·적립"],
  },
  {
    icon: ScrollText,
    title: "규정",
    desc: "취업규칙·신고·불이익변경·노사협의회",
    items: [
      "취업규칙 작성·신고",
      "취업규칙 필수기재사항",
      "취업규칙 불이익변경 동의",
      "노사협의회 설치·운영",
    ],
  },
]

/** 우리가 하는 일 — 감독 전·중·후 세 때로 나눈다. */
const PHASES = [
  {
    n: "1",
    tag: "감독 전",
    icon: Search,
    title: "사전 진단 — 지적받을 지점을 먼저 찾습니다",
    desc: "7개 영역 28개 항목을 하나씩 확인해 「적법 / 위험 / 노무사 확인 필요」로 가릅니다. 영역별 등급과 우선순위를 함께 내므로, 무엇부터 손대야 하는지가 순서로 나옵니다.",
    items: [
      "항목별 판정과 그 근거",
      "영역 등급·종합 등급",
      "조치 우선순위와 권고 기한",
    ],
  },
  {
    n: "2",
    tag: "감독 전",
    icon: ClipboardCheck,
    title: "서류와 운영 정비 — 찾은 것을 실제로 고칩니다",
    desc: "진단에서 걸린 항목을 서류와 운영으로 되돌려 놓습니다. 감독에서 요구되는 자료는 대부분 평소에 만들어 두었어야 하는 것들이라, 통보를 받은 뒤에 만들면 늦거나 만든 흔적이 남습니다.",
    items: [
      "근로계약서·취업규칙 보완과 재교부",
      "임금명세서·근로시간 기록 체계 정비",
      "연차·모성보호 운영 기준 정리",
      "요구 예상 자료 목록과 보관 상태 점검",
    ],
  },
  {
    n: "3",
    tag: "감독 중·후",
    icon: Handshake,
    title: "현장 대응과 사후 시정",
    desc: "자료 제출 범위를 정리하고, 사실관계를 어떻게 설명할지 함께 준비합니다. 시정지시를 받은 항목은 기한 안에 무엇을 어떻게 했는지가 남도록 처리합니다.",
    items: [
      "요구 자료의 범위·형식 정리",
      "담당자 응대 준비와 설명 자료",
      "시정지시 항목별 이행 계획과 결과 정리",
      "같은 지적이 반복되지 않도록 기준 반영",
    ],
  },
]

export default function LaborInspectionPage() {
  const totalItems = AREAS.reduce((sum, a) => sum + a.items.length, 0)

  return (
    <div className="w-full overflow-x-hidden">
      <StructuredData
        data={servicePageJsonLd({
          name: "근로감독 대응 컨설팅",
          description:
            "근로감독 전 사전 진단과 서류 정비, 감독 현장 대응과 사후 시정까지 지원하는 컨설팅",
          path: "/services/labor-inspection",
        })}
      />
      <PageBanner
        title="근로감독 대응 컨설팅"
        subtitle="통보를 받은 뒤에 준비하면 늦습니다"
        backgroundImage="/FAIR000.png"
      />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14 lg:py-16">
        <div className="mb-6">
          <Link href="/services">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              서비스 목록으로
            </Button>
          </Link>
        </div>

        {/* 머리말 */}
        <section className="mb-12">
          <h2 className="break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            감독에서 나오는 지적은 대부분 평소의 일입니다
          </h2>
          <p className="mt-4 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            근로감독에서 지적되는 것은 어려운 법리가 아닙니다. <b>근로계약서를 교부했는지</b>,{" "}
            <b>임금명세서를 주고 있는지</b>, <b>근로시간 기록이 남아 있는지</b> 같은 것들입니다.
            평소에 해 두면 문제가 없고, 안 해 두었으면 통보를 받은 뒤에 만들 수 없습니다.
          </p>
          <p className="mt-4 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            그래서 이 컨설팅은 <b>감독이 오기 전에 점검하는 일</b>에 무게를 둡니다. 지적받을
            지점을 먼저 찾아 순서를 정하고, 서류와 운영을 되돌려 놓습니다. 감독이 시작된
            뒤라면 자료 제출과 설명, 시정지시 이행까지 함께 합니다.
          </p>
        </section>

        {/* 점검 범위 */}
        <section className="mb-12">
          <div className="mb-2 flex flex-wrap items-baseline gap-2">
            <h2 className="break-keep text-xl font-bold text-gray-900 sm:text-2xl">
              무엇을 점검하나
            </h2>
            <span className="text-sm text-muted-foreground">
              7개 영역 · {totalItems}개 항목
            </span>
          </div>
          <p className="mb-6 break-keep text-sm leading-relaxed text-muted-foreground sm:text-base">
            점검표는 새로 만든 것이 아닙니다. <b>글로벌 HR 자문 포털의 노무관리 진단</b>에
            쓰는 체계를 그대로 씁니다. 항목마다 근거 법령과 판정 기준이 붙어 있고,{" "}
            <b>공인노무사 검수를 거쳐 확정</b>한 것입니다.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {AREAS.map((a) => {
              const Icon = a.icon
              return (
                <div
                  key={a.title}
                  className="flex flex-col rounded-2xl border border-blue-900/20 bg-white p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="break-keep text-base font-bold text-gray-900">
                          {a.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {a.items.length}항목
                        </span>
                      </div>
                      <div className="break-keep text-xs text-muted-foreground">{a.desc}</div>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 border-t border-gray-100 pt-3">
                    {a.items.map((it) => (
                      <li
                        key={it}
                        className="break-keep rounded-full border border-blue-900/15 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* 진행 방식 */}
        <section className="mb-12">
          <h2 className="mb-6 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            어떻게 하나
          </h2>
          <ol className="space-y-3">
            {PHASES.map((p) => {
              const Icon = p.icon
              return (
                <li
                  key={p.n}
                  className="overflow-hidden rounded-2xl border border-blue-900/20 bg-white"
                >
                  <div className="h-1 w-full bg-primary" />
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <span
                      aria-hidden
                      className="hidden shrink-0 text-4xl font-bold leading-none text-blue-900/10 sm:block"
                    >
                      {p.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                          {p.tag}
                        </span>
                      </div>
                      <p className="break-keep text-base font-bold text-gray-900">{p.title}</p>
                      <p className="mt-2 break-keep text-sm leading-relaxed text-gray-700">
                        {p.desc}
                      </p>
                      <ul className="mt-3 space-y-2 border-t border-gray-100 pt-3">
                        {p.items.map((it) => (
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
                </li>
              )
            })}
          </ol>
        </section>

        {/* 회원사라면 포털에서 직접 */}
        <section className="mb-12 rounded-2xl border border-border/60 bg-gray-50 p-6 sm:p-8">
          <h2 className="mb-2 break-keep text-lg font-bold text-gray-900 sm:text-xl">
            자문 회원사는 직접 해 보실 수 있습니다
          </h2>
          <p className="break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            위 점검표와 같은 체계의 <b>노무관리 진단</b>을 글로벌 HR 자문 포털 회원사 공간에
            올려 두었습니다. 항목에 답하면 영역 등급과 조치 우선순위가 나오고, 그 결과를 두고
            담당 노무사와 이어서 상의하실 수 있습니다. 산업안전 진단도 함께 있습니다.
          </p>
          <a
            href="https://global.fairhr.net"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:text-base"
          >
            회원사 공간 보기
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>

        {/* 함께 보기 */}
        <section className="mb-12">
          <h2 className="mb-5 break-keep text-xl font-bold text-gray-900 sm:text-2xl">
            함께 보면 좋은 것
          </h2>
          <ul className="grid gap-2.5 sm:grid-cols-3">
            {[
              {
                href: "/services/hr-risk-diagnosis",
                title: "HR 리스크 AI 진단",
                desc: "통상임금·산업안전·근로자성을 지금 바로",
              },
              {
                href: "/services/labor-consulting",
                title: "인사노무 관리 자문",
                desc: "상시 자문으로 평소에 관리",
              },
              {
                href: "/services/freelancer",
                title: "프리랜서 진단과 관리",
                desc: "3.3 계약의 근로자성 점검",
              },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex h-full flex-col gap-1 rounded-xl border border-border/60 bg-white px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="break-keep text-sm font-semibold text-gray-900 group-hover:text-primary sm:text-base">
                    {l.title}
                  </span>
                  <span className="break-keep text-xs text-muted-foreground">{l.desc}</span>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-2xl bg-primary p-6 text-center text-primary-foreground sm:p-8">
            <h2 className="mb-2 break-keep text-xl font-bold sm:text-2xl">
              통보를 받으셨다면 먼저 연락해 주십시오
            </h2>
            <p className="mb-5 break-keep text-sm leading-relaxed opacity-90 sm:text-base">
              아직 통보가 없더라도 점검은 언제든 할 수 있습니다. 상시근로자 수와 업종, 지금
              걱정되는 부분을 알려주시면 어디부터 볼지 말씀드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-50"
            >
              근로감독 대응 문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <p className="mt-8 break-keep text-xs leading-relaxed text-gray-400">
          ※ 이 화면은 서비스 소개이며 개별 사안의 법적 판단을 대체하지 않습니다. 점검 항목과
          판정 기준은 법령 개정에 따라 바뀔 수 있습니다. 감독 결과는 사업장의 실제 운영 상태에
          따라 달라지므로, 특정한 결과를 보장하는 내용이 아닙니다.
        </p>

        <NewsletterLinkBlock />
      </div>
    </div>
  )
}
