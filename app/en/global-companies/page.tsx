import type { Metadata } from "next"
import StructuredData from "@/components/seo/structured-data"
import {
  pageMetadata,
  servicePageJsonLd,
  faqJsonLd,
  SITE_URL,
  SITE_NAME,
  FAIR_ORG_ID,
  FAIR_REP_ID,
  FAIR_SAME_AS,
} from "@/lib/seo"
import EnGlobalCompaniesClientPage from "./EnGlobalCompaniesClientPage"
import { EN_FAQS } from "./enData"

// 국문 짝과 서로를 hreflang 으로 걸어야 성립한다. 한쪽만 걸면 구글이 무시한다.
const KO_PATH = "/global-companies"
const EN_PATH = "/en/global-companies"

export const metadata: Metadata = pageMetadata({
  title: "Korean Labor Law Advisory for Foreign Companies | FAIR HR Consulting",
  description:
    "FAIR HR Consulting advises foreign companies, global headquarters and Korean subsidiaries on Korean employment and labor law — employment contracts, terminations and restructuring, workplace investigations, collective bargaining and HR compliance. 27 years in practice; formerly of Kim & Chang.",
  path: EN_PATH,
  locale: "en",
  alternatePaths: { ko: KO_PATH, en: EN_PATH },
  keywords: [
    "Korean labor law firm",
    "Korean employment lawyer for foreign companies",
    "Korean labor attorney",
    "employment law in Korea",
    "HR compliance Korea",
    "foreign company employment law Korea",
    "termination of employees in Korea",
    "Korean employment contract",
    "workplace investigation Korea",
    "restructuring employees Korea",
    "expatriate employment Korea",
    "local hire Korea",
  ],
})

export default function EnGlobalCompaniesPage() {
  return (
    <>
      <StructuredData
        data={servicePageJsonLd({
          name: "Korean Employment and Labor Advisory for Foreign Companies",
          description:
            "Korean employment and labor law advisory for foreign companies, global headquarters and Korean subsidiaries.",
          path: EN_PATH,
        })}
      />
      {/* 화면의 FAQ 섹션과 같은 EN_FAQS 를 쓴다 — 화면에 없는 FAQ 마크업은 구글 정책 위반 */}
      <StructuredData data={faqJsonLd(EN_FAQS)} />
      {/*
        영문 표면의 조직 선언.
        ⚠️ **`@id` 와 `sameAs` 를 반드시 국문과 같은 값으로 둔다**(2026-09-14 교정).
        전에는 식별자 없이 `ProfessionalService` 를 따로 선언해, 영문 화면이
        국문과 **다른 조직**처럼 보였다. 우리 타깃이 외국계 본사라 영문 쪽 신호가
        국문과 갈라지면 그만큼 손해다. 이름만 영문으로 두고 정체는 하나로 묶는다.
      */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": FAIR_ORG_ID,
          name: "FAIR HR Consulting",
          alternateName: [SITE_NAME, "페어인사노무컨설팅"],
          url: SITE_URL,
          sameAs: FAIR_SAME_AS,
          founder: { "@id": FAIR_REP_ID },
          areaServed: { "@type": "Country", name: "South Korea" },
          availableLanguage: ["ko", "en"],
          knowsAbout: [
            "Korean Employment Law",
            "Korean Labor Law",
            "Foreign Companies in Korea",
            "HR Compliance",
            "Employment Contracts",
            "Termination and Restructuring",
            "Workplace Investigations",
            "Collective Bargaining",
          ],
        }}
      />
      <EnGlobalCompaniesClientPage />
    </>
  )
}
