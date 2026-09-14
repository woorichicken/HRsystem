import type { Metadata } from "next"

export const SITE_URL = "https://www.fairhr.net"
export const SITE_NAME = "FAIR인사노무컨설팅"
// 홈 제목·설명은 여기 한 곳에서만 정한다(layout.tsx 의 metadata·openGraph·twitter, app/page.tsx 가 같은 값을 쓴다).
//
// ⚠️ FAIR 의 목표 포지셔닝은 **2대 축**이다(CEO 확정 2026-08-04).
//      ① 외국계기업 HR 전문   ② HR테크 전문(= FAIR CRM)
//    한쪽만 내세우지 말 것. 외부위원 제안서 §4.2 의 "FAIR CRM·PlusTAI 를 하단으로" 권고는
//    이 방침과 어긋나 **기각**했다.
// ⚠️ PlusTAI 는 **독립 자회사**다. FAIR 의 HR테크 축은 FAIR CRM 이며 백신 시리즈는 포함하지 않는다.
// ⚠️ 검색 유입은 각 축의 전용 랜딩페이지가 받는다(/global-companies, /en/global-companies, /fair-crm).
//    홈은 두 축을 선언하는 자리다.
// ⚠️ 실적 표기는 이력 기준(과거·누적형)을 유지할 것.
export const SITE_TITLE = `${SITE_NAME} | 외국계기업 HR 전문 · HR테크 FAIR CRM`
export const SITE_DESCRIPTION =
  "외국계기업 HR과 HR테크, 두 축으로 일합니다. 김앤장 출신 27년 경력 공인노무사가 단체교섭·노사관계와 HR Compliance 조사를 직접 자문하고, HR테크 플랫폼 FAIR CRM으로 자문 이력·진단·안전보건 기록을 관리합니다. Microsoft·GE·CITIBANK 등 외국인투자기업 자문 이력."

export const SEO_KEYWORDS = [
  "외국계기업 노무사",
  "외국계 노무사",
  "외국계기업 노무 자문",
  "외국계기업 인사노무",
  "외국인투자기업",
  "HR테크",
  "HR SaaS",
  "인사노무 시스템",
  "HR 솔루션",
  "노무관리 시스템",
  "단체교섭",
  "노동조합 설립 대응",
  "인사노무컨설팅",
  "공인노무사",
  "노무법인",
  "HR 시스템",
  "FAIR CRM",
  "근로계약서",
  "해고 정당성",
  "임금체불",
  "근로시간",
  "산업안전",
  "중대재해처벌법",
]

export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  keywords = [],
  locale = "ko",
  alternatePaths,
}: {
  title: string
  description?: string
  path?: string
  keywords?: string[]
  /** 이 페이지 자체의 언어. og:locale 과 html 표기에 쓴다. */
  locale?: "ko" | "en"
  /**
   * 같은 내용의 다른 언어 페이지 경로. 국문·영문 양쪽에 서로를 걸어야 hreflang 이 성립한다.
   * 예: { ko: "/global-companies", en: "/en/global-companies" }
   */
  alternatePaths?: { ko: string; en: string }
}): Metadata {
  const url = new URL(path, SITE_URL).toString()
  const languages = alternatePaths
    ? {
        ko: new URL(alternatePaths.ko, SITE_URL).toString(),
        en: new URL(alternatePaths.en, SITE_URL).toString(),
        // 언어가 맞지 않는 방문자에게 보여줄 기본판은 국문으로 둔다
        "x-default": new URL(alternatePaths.ko, SITE_URL).toString(),
      }
    : undefined

  return {
    // 루트 레이아웃의 title.template 이 "%s | FAIR인사노무컨설팅" 를 붙인다.
    // 영문 페이지에는 한글 회사명이 붙으면 안 되므로 absolute 로 템플릿을 끈다.
    title: locale === "en" ? { absolute: title } : title,
    description,
    keywords: [...SEO_KEYWORDS, ...keywords],
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_US" : "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

// 조직·대표 엔티티의 정본 식별자.
//
// ⚠️ **글로벌 HR 자문 포털(global.fairhr.net)의 `src/lib/seo/jsonLd.ts` 와 짝을 이룬다**
//    (2026-09-14 신설). 두 사이트가 **같은 `@id` 로 같은 조직을 선언**해야 검색엔진과
//    AI 가 하나의 엔티티로 합친다. 한쪽만 고치면 오히려 별개 주체로 갈라지므로
//    아래 세 값(ORG_ID·REP_ID·FAIR_SAME_AS)은 양쪽을 함께 고칠 것.
export const FAIR_ORG_ID = `${SITE_URL}/#organization`
export const FAIR_REP_ID = `${SITE_URL}/#rep`

// 같은 주체가 운영하는 웹 표면. `sameAs` 는 "동일 주체"라는 주장이므로 직접 운영하는 것만 넣는다.
// ⚠️ PlusTAI 계열은 **독립 자회사**라 넣지 않는다(위 포지셔닝 주석과 같은 기준).
//    법인 관계를 표현하려면 다른 속성이 필요한데, 그건 CEO 확인 사항이다.
export const FAIR_SAME_AS = [
  "https://www.fairhr.net",
  "https://global.fairhr.net",
  "https://blog.naver.com/fairhr",
]

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LegalService"],
  "@id": FAIR_ORG_ID,
  name: SITE_NAME,
  alternateName: "FAIR HR Consulting",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  telephone: "02-387-9869",
  email: "fairhr@nate.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "서울특별시 은평구 진관3로 32, 4층 비412호(진관동, 은평뉴타운파크앤타워)",
    addressLocality: "서울특별시",
    addressCountry: "KR",
  },
  areaServed: "KR",
  inLanguage: "ko-KR",
  founder: { "@id": FAIR_REP_ID },
  sameAs: FAIR_SAME_AS,
  knowsAbout: [
    "인사노무 자문",
    "임금 및 근로시간 관리",
    "해고 정당성 검토",
    "산업안전보건 관리체계",
    "중대재해처벌법 대응",
    "HR SaaS 및 자문 이력 관리",
  ],
}

// 대표 노무사 노드.
// ⚠️ 화면에 이미 공개된 사실만 적는다(성명·직함·소속). 경력 연수·출신은 표기 기준이
//    따로 있는 항목이라(이력 기준 표기) 구조화 데이터에 숫자로 박지 않는다.
export const representativeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FAIR_REP_ID,
  name: "정광일",
  jobTitle: "공인노무사",
  worksFor: { "@id": FAIR_ORG_ID },
  url: `${SITE_URL}/about/greeting`,
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ko-KR",
  publisher: { "@id": FAIR_ORG_ID },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/board?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "FAIR인사노무컨설팅은 어떤 HR 리스크를 점검하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "임금·근로시간·해고·근로계약·산업안전·중대재해 리스크를 공인노무사 관점에서 진단하고 개선 실행 항목을 제안합니다.",
      },
    },
    {
      "@type": "Question",
      name: "FAIR CRM은 무엇을 관리하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "자문 이력, 노무 진단, 안전보건 점검, 보고서와 후속 조치 기록을 한 곳에서 관리해 반복 이슈와 증빙 공백을 줄입니다.",
      },
    },
    {
      "@type": "Question",
      name: "상담은 어떻게 신청하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "웹사이트 문의 페이지에서 회사 규모와 필요한 자문 영역을 남기면 FAIR인사노무컨설팅이 검토 후 연락합니다.",
      },
    },
  ],
}

// 페이지별 FAQ 구조화 데이터 생성기.
// ⚠️ 넘기는 문답은 반드시 그 페이지 화면에도 그대로 보여야 한다(구글 정책).
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}

// 브레드크럼(빵부스러기) 구조화 데이터 생성기. 검색결과의 경로 표시·내부링크 신호용.
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  }
}

// 서비스 상세 페이지용 구조화 데이터 묶음(BreadcrumbList + Service).
export function servicePageJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const url = new URL(path, SITE_URL).toString()
  return [
    breadcrumbJsonLd([
      { name: "홈", path: "/" },
      { name: "서비스", path: "/services" },
      { name, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      url,
      serviceType: name,
      areaServed: "KR",
      inLanguage: "ko-KR",
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  ]
}

export const fairCrmSoftwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FAIR CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/fair-crm`,
  description:
    "인사노무 자문 이력, HR 진단, 산업안전 점검과 보고서를 통합 관리하는 FAIR인사노무컨설팅의 HR 관리 플랫폼입니다.",
  provider: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "ko-KR",
}
