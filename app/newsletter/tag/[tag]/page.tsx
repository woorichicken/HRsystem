import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { NEWSLETTER_POSTS } from "@/lib/newsletterPosts"
import {
  NEWSLETTER_TAGS,
  isNewsletterTag,
  postsByTag,
  tagLabel,
  tagsWithPages,
} from "@/lib/newsletterTags"
import { breadcrumbJsonLd } from "@/lib/seo"

const SITE = "https://www.fairhr.net"

/**
 * 주제별 뉴스레터 묶음 — `/newsletter/tag/<슬러그>`.
 *
 * 왜 만드나(2026-11-05) — 글 끝에 해시태그를 나열하는 것만으로는 검색 노출에 거의
 * 도움이 되지 않는다(구글은 meta keywords 를 보지 않고, 본문 해시태그는 그냥 글자다).
 * **같은 주제 글이 한 곳에 모이고 글마다 그 곳으로 링크가 걸릴 때** 주제 묶음과 내부
 * 링크가 생기고, 그게 실제로 효과를 낸다.
 *
 * ⚠️ **글이 2건 이상인 태그만 페이지를 만든다**(`tagsWithPages`). 한 건짜리 묶음은
 *    사용자에게 쓸모가 없고, 검색엔진에는 내용 없는 페이지가 늘어나는 것이라
 *    사이트 전체에 손해다. 그 기준은 `lib/newsletterTags.ts` 한 곳에서 정한다 —
 *    여기와 사이트맵과 상세 화면이 **같은 함수를 보므로** 셋이 어긋나지 않는다.
 */

export function generateStaticParams() {
  return tagsWithPages(NEWSLETTER_POSTS).map((tag) => ({ tag }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag } = await params
  if (!isNewsletterTag(tag)) return { title: "뉴스레터 | FAIR인사노무컨설팅" }

  const label = tagLabel(tag)
  const count = postsByTag(NEWSLETTER_POSTS, tag).length
  return {
    title: `${label} 뉴스레터 ${count}편 | FAIR인사노무컨설팅`,
    description: `FAIR인사노무컨설팅이 ${label} 주제로 쓴 뉴스레터 ${count}편입니다. 27년 경력 공인노무사가 실무에서 보는 지점을 정리했습니다.`,
    alternates: { canonical: `${SITE}/newsletter/tag/${tag}` },
    keywords: [label, "인사노무", "노무 자문", "FAIR인사노무컨설팅"],
  }
}

export default async function NewsletterTagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  if (!isNewsletterTag(tag)) notFound()

  const posts = postsByTag(NEWSLETTER_POSTS, tag)
  // 2건 미만이면 페이지를 만들지 않는 것이 원칙이라, 직접 주소로 들어와도 열지 않는다.
  if (posts.length < 2) notFound()

  const label = tagLabel(tag)
  const others = tagsWithPages(NEWSLETTER_POSTS).filter((t) => t !== tag)

  const crumbs = breadcrumbJsonLd([
    { name: "홈", path: "/" },
    { name: "뉴스레터", path: "/newsletter" },
    { name: label, path: `/newsletter/tag/${tag}` },
  ])

  return (
    <div className="w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <header className="w-full bg-gray-50">
        <div className="container-fluid max-w-4xl px-4 py-14 text-center md:py-20">
          <nav className="text-xs text-gray-400">
            <Link href="/newsletter" className="hover:text-primary">
              뉴스레터
            </Link>
          </nav>
          <h1 className="mx-auto mt-5 max-w-3xl break-keep text-[1.75rem] font-bold leading-[1.4] tracking-tight text-gray-900 sm:text-[2.125rem]">
            {label}
          </h1>
          <p className="mt-4 break-keep text-sm text-gray-500 sm:text-base">
            이 주제로 쓴 글 {posts.length}편입니다.
          </p>
        </div>
      </header>

      <div className="container-fluid max-w-3xl px-4 py-12 md:py-16">
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/newsletter/${p.slug}`}
                className="group block rounded-2xl border border-border/60 bg-white p-5 transition-colors hover:border-primary/40 hover:bg-primary/5 sm:p-6"
              >
                <time dateTime={p.date} className="text-xs tracking-wide text-gray-400">
                  {p.date.replace(/-/g, ".")}
                </time>
                <p className="mt-1.5 break-keep text-base font-bold leading-snug text-gray-900 group-hover:text-primary sm:text-lg">
                  {p.title}
                </p>
                <p className="mt-2 line-clamp-2 break-keep text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {others.length > 0 && (
          <section className="mt-12 border-t border-gray-100 pt-8">
            <h2 className="break-keep text-sm font-bold text-gray-900">다른 주제</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {others.map((t) => (
                <Link
                  key={t}
                  href={`/newsletter/tag/${t}`}
                  className="rounded-full border border-border/60 bg-white px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  {NEWSLETTER_TAGS[t]}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4" />
            전체 뉴스레터
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            상담 신청 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
