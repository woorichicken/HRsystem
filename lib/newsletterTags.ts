/**
 * 뉴스레터 주제 태그 — **어휘를 고정한다.**
 *
 * 왜 고정하나(2026-11-05 신설) — 글마다 자유롭게 달면 「인사노무」와 「노무관리」,
 * 「산업안전」과 「안전보건」이 따로 생겨 **같은 주제 글이 묶이지 않는다.** 태그를
 * 다는 목적은 꾸미기가 아니라 주제가 같은 글을 한 곳에 모아 서로 잇는 것이므로,
 * 흩어지면 아무 소용이 없다. 그래서 여기 적힌 것만 쓸 수 있고, 타입이 강제한다.
 *
 * 태그를 더할 때 —
 *  ① **글이 2건 이상 모일 주제인가** 먼저 본다. 1건짜리 태그는 목록 페이지가 비다시피
 *     해서 검색에 되레 해롭다(`tagsWithPages` 가 그런 태그는 페이지를 만들지 않는다).
 *  ② 기존 태그로 덮이는지 본다. 비슷한 말을 새로 만들면 위의 문제가 그대로 생긴다.
 *
 * ⚠️ URL 에는 **영문 슬러그**를 쓴다. 한글을 경로에 넣으면 인코딩된 주소가 되어
 *    공유·로그·검색결과에서 읽히지 않는다. 화면에 보이는 것은 `label` 이다.
 */

export const NEWSLETTER_TAGS = {
  freelancer: "프리랜서·3.3",
  safety: "산업안전",
  wage: "임금·수당",
  inspection: "근로감독",
  harassment: "직장 내 괴롭힘",
  dismissal: "해고·징계",
  global: "외국계기업",
  hrtech: "HR테크",
  "law-change": "법 개정",
  diagnosis: "간이진단",
  contract: "계약서",
  ai: "AI 활용",
} as const

export type NewsletterTag = keyof typeof NEWSLETTER_TAGS

export const tagLabel = (t: NewsletterTag) => NEWSLETTER_TAGS[t]

export function isNewsletterTag(v: string): v is NewsletterTag {
  return Object.prototype.hasOwnProperty.call(NEWSLETTER_TAGS, v)
}

/** 태그 하나에 묶인 글 — 최신순(배열 순서가 곧 최신순이다). */
export function postsByTag<T extends { tags: readonly NewsletterTag[] }>(
  posts: readonly T[],
  tag: NewsletterTag,
): T[] {
  return posts.filter((p) => p.tags.includes(tag))
}

/**
 * **목록 페이지를 만들 태그** — 글이 2건 이상인 것만.
 *
 * 한 건짜리 태그 페이지는 그 글 하나만 있는 얇은 화면이 된다. 사용자에게 쓸모가
 * 없고, 검색엔진에는 내용 없는 페이지가 늘어나는 것이라 사이트 전체에 손해다.
 * 그런 태그는 글 하단에 글자로만 보이고 링크가 걸리지 않는다.
 */
export const MIN_POSTS_FOR_TAG_PAGE = 2

export function tagsWithPages<T extends { tags: readonly NewsletterTag[] }>(
  posts: readonly T[],
): NewsletterTag[] {
  return (Object.keys(NEWSLETTER_TAGS) as NewsletterTag[]).filter(
    (t) => postsByTag(posts, t).length >= MIN_POSTS_FOR_TAG_PAGE,
  )
}
