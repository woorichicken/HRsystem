import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlossarySearch } from "@/components/glossary/GlossarySearch"
import { ENTRIES } from "@/lib/glossary/data"
import { SOURCE_CHECKED_ON } from "@/lib/glossary/laws"
import { pageMetadata } from "@/lib/seo"

/**
 * FAIR 노동법 한영사전 — 글로벌 포털(global.fairhr.net)에서 확정한 사전의 **공개판**.
 *
 * ⚠️ **사전 데이터의 정본은 이 저장소가 아니다.**
 *    정본: `global-hr-portal/src/lib/glossary/`
 *    복제: 정본 저장소에서 `node scripts/glossary-sync-fairhr.mjs`
 *    `lib/glossary/*`·`components/glossary/*` 는 **생성물이라 직접 고치지 않는다.**
 *    고칠 일이 있으면 정본에서 고치고 다시 복제한다. 양쪽을 따로 고치면
 *    같은 용어가 두 사이트에서 다른 말을 하게 된다.
 *
 * ⚠️ 포털과 다른 점 — 포털은 회원사 로그인 뒤에서 트랙·역할로 공개를 가렸다
 *    (`visibility.ts`). fairhr.net 은 **로그인 없는 완전 공개 사이트**라 그 장치를
 *    가져오지 않았다. 대신 확정되지 않은 표제어는 애초에 화면에 올리지 않는다
 *    (`includeDraft` 를 주지 않으면 `confirmed` 만 그린다).
 *
 * ⚠️ 화면이 내놓는 것은 **영어 대응어·출처 등급·출처 원문**뿐이다(CEO 결재 2026-10-01).
 *    「이럴 때는 이렇게 쓰십시오」류의 의견은 포털에서도 화면에서 뺐다 —
 *    출처로 받칠 수 없는 말을 우리 이름으로 공개 사이트에 내보내면 자문으로 읽힌다.
 */

/**
 * 확정 안 된 표제어가 하나라도 있는가. 띠와 `noindex` 가 **같은 값**을 본다 —
 * 두 곳이 따로 판단하면 한 곳만 안 고쳐진다.
 *
 * 2026-10-02 현재 132개 전부 `confirmed` 라 둘 다 꺼져 있다. 확정 안 된 표제어가
 * 정본에 하나라도 더해져 복제되면 **저절로 다시 켜진다.** 그게 의도다.
 */
const UNDER_REVIEW = !ENTRIES.every((e) => e.status === "confirmed")

export const metadata: Metadata = {
  ...pageMetadata({
    title: "FAIR 노동법 한영사전 | 외국계기업 지원센터",
    description:
      "한국 노동법·HR 용어의 영어 대응어를 출처와 등급과 함께 찾아보실 수 있습니다. 법령 공식 영문본에 있는 말은 조문까지 표시합니다.",
    path: "/global-companies/glossary",
    keywords: [
      "노동법 한영사전",
      "노동법 영문 용어",
      "외국계기업 노무 용어",
      "근로기준법 영문",
      "노동법 영어 번역",
      "HR 용어 영어",
      "영문 취업규칙 용어",
      "법령 영문본 대응어",
    ],
  }),
  // 확정 안 된 법률 문구가 검색 결과로 흘러 들어가 확정본처럼 읽히는 것을 막는다.
  ...(UNDER_REVIEW ? { robots: { index: false, follow: false } } : {}),
}

export default function GlossaryPage() {
  return (
    <div className="w-full overflow-x-hidden pt-16">
      <section className="w-full border-b border-border/60 bg-gradient-to-br from-primary/5 via-white to-blue-50 py-12 sm:py-16">
        <div className="container-fluid max-w-4xl px-4 sm:px-6">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="break-keep text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            FAIR 노동법 한영사전
          </h1>
          <p className="mt-4 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            한글 용어를 입력하면 영어 대응어를{" "}
            <b className="text-primary">출처와 등급</b>을 붙여 보여 드립니다. 법령 공식
            영문본에 있는 말은 조문까지 표시합니다.
          </p>
          <p className="mt-3 break-keep text-xs leading-relaxed text-gray-500">
            표제어 {ENTRIES.length}개 · 법령 대응어는 법제처 공식 영문법령에서 확인한 것만
            싣습니다(확인일 {SOURCE_CHECKED_ON}).
          </p>
        </div>
      </section>

      {UNDER_REVIEW && (
        <div className="border-b border-amber-200 bg-amber-50">
          <div className="container-fluid flex max-w-4xl gap-3 px-4 py-3 sm:px-6">
            <AlertTriangle
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
            />
            <p className="break-keep text-sm leading-relaxed text-amber-900">
              <b>공인노무사 검수 중인 시험판입니다.</b> 표제어와 설명이 바뀔 수 있으니,
              계약서·본사 보고서 등 실제 문서에 옮겨 쓰시기 전에 담당 노무사와 확인해
              주십시오.
            </p>
          </div>
        </div>
      )}

      <GlossarySearch includeDraft={false} />

      <section className="container-fluid max-w-4xl px-4 pb-14 sm:px-6">
        <div className="rounded-2xl border border-border/60 bg-gray-50 p-6 sm:p-8">
          <h2 className="break-keep text-lg font-bold text-gray-900 sm:text-xl">
            영문 규정·본사 보고가 필요하시다면
          </h2>
          <p className="mt-2 break-keep text-sm leading-relaxed text-gray-700 sm:text-base">
            낱말을 고르는 일과 문서를 만드는 일은 다릅니다. 영문 근로계약서·취업규칙,
            본사 보고 문안은 외국계기업 지원센터에서 자문하고 있습니다.
          </p>
          <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="px-8">
                자문 상담 신청
              </Button>
            </Link>
            <Link href="/global-companies">
              <Button variant="outline" size="lg" className="flex items-center gap-2 px-8">
                <ArrowLeft className="h-4 w-4" />
                외국계기업 지원센터로
              </Button>
            </Link>
          </div>
        </div>

        <p className="mt-6 break-keep text-xs leading-relaxed text-gray-400">
          ※ 이 사전은 참고 자료이며 개별 사안의 법적 판단을 대체하지 않습니다. 법령 영문본은
          개정으로 바뀔 수 있으므로, 실제 문서에 쓰실 때는 표시된 조문 원문을 함께 확인해
          주십시오.
        </p>
      </section>
    </div>
  )
}
