import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import StructuredData from "@/components/seo/structured-data"
import { pageMetadata, breadcrumbJsonLd, servicePageJsonLd } from "@/lib/seo"
import Block from "../fair-memo/MemoBlock"
import { MA_BODY, MA_SUBTITLE, MA_SUMMARY, MA_TITLE } from "./maData"

/**
 * 인수합병에 따른 Labor 실사 — 외국계기업 지원센터 메뉴에서 HR Compliance 조사와
 * 한영사전 사이에 둔다(CEO 지시 2026-10-27). 본문은 FAIR 메모 ⑦과 같은 글이다.
 */

export const metadata: Metadata = pageMetadata({
  title: `${MA_TITLE} | 외국계기업 지원센터`,
  description: MA_SUMMARY,
  path: "/global-companies/ma-due-diligence",
  keywords: [
    "인수합병 노무실사",
    "M&A 노무실사",
    "노무 실사",
    "Labor Due Diligence",
    "영업양도 고용승계",
    "외국계기업 매각",
    "외국계기업 노무사",
  ],
})

export default function MaDueDiligencePage() {
  return (
    <div className="w-full overflow-x-hidden pt-16">
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "홈", path: "/" },
            { name: "외국계기업 지원센터", path: "/global-companies" },
            { name: MA_TITLE, path: "/global-companies/ma-due-diligence" },
          ]),
          servicePageJsonLd({
            name: MA_TITLE,
            description: MA_SUMMARY,
            path: "/global-companies/ma-due-diligence",
          }),
        ]}
      />

      <article className="container-fluid max-w-3xl py-10 md:py-14 px-4">
        <nav className="mb-6 text-sm text-gray-400">
          <Link href="/global-companies" className="hover:text-primary">
            외국계기업 지원센터
          </Link>{" "}
          / <span className="text-gray-600">{MA_TITLE}</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            Labor Due Diligence
          </span>
          <h1 className="break-keep mt-3 text-2xl sm:text-3xl font-bold leading-snug text-gray-900">
            {MA_TITLE}
          </h1>
          <p className="break-keep mt-2 text-base sm:text-lg font-semibold text-gray-600">
            {MA_SUBTITLE}
          </p>
        </header>

        <div className="mt-2">
          {MA_BODY.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-primary p-6 sm:p-8 text-center text-primary-foreground">
          <h2 className="break-keep text-lg sm:text-xl font-bold mb-2">
            매각·인수를 앞두고 계신가요?
          </h2>
          <p className="break-keep text-sm opacity-90 mb-5 leading-relaxed">
            거래 구조와 일정을 알려주시면 인사노무 실사에서 무엇을 먼저 봐야 하는지 말씀드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            자문 상담 신청 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </div>
  )
}
