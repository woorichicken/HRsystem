/* ------------------------------------------------------------------
 * ⚠️ 이 파일은 **생성물이다. 직접 고치지 말 것.**
 *
 * 정본: global-hr-portal/src/lib/glossary/GlossarySearch.tsx
 * 복제: node scripts/glossary-sync-fairhr.mjs  (정본 저장소에서 실행)
 * 정본 지문: 12ca32a4ec644cdc
 *
 * 사전을 고칠 일이 있으면 정본에서 고치고 이 스크립트를 다시 돌린다.
 * 여기서 고치면 다음 복제 때 덮어써지고, 그 사이에 양쪽이 다른 말을 한다.
 * ------------------------------------------------------------------ */
"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  featuredEntries,
  searchEntries,
  sortUsages,
} from "@/lib/glossary/search";
import { SourceBadge } from "./SourceBadge";
import {
  SOURCE_TIERS,
  TIER_INFO,
  usageKind,
  type Entry,
} from "@/lib/glossary/types";

/**
 * 노동법 한영사전 — 검색 화면.
 *
 * **한글을 치면 그 영어를 등급·출처와 함께 보여 준다. 그것뿐이다**
 * (CEO 결재 2026-10-01 — 「설명은 모두 지우고 등급 및 출처만」).
 * 등급을 읽는 법만 검색 전 화면에 한 번 적는다.
 */

export function GlossarySearch({ includeDraft }: { includeDraft: boolean }) {
  const [query, setQuery] = useState("");
  const [openTerm, setOpenTerm] = useState<string | null>(null);

  const hits = useMemo(
    () => (query.trim() ? searchEntries(query, { includeDraft }) : []),
    [query, includeDraft],
  );
  const featured = useMemo(
    () => featuredEntries(8, { includeDraft }),
    [includeDraft],
  );

  const shown = query.trim() ? hits.map((h) => h.entry) : [];
  const opened = shown.find((e) => e.term === openTerm) ?? shown[0] ?? null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      {/* 검색창 */}
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpenTerm(null);
          }}
          placeholder="한글 용어를 입력하세요 — 예: 해고, 연차, 통상임금"
          aria-label="용어 검색"
          className="w-full rounded-xl border border-gray-200 py-3.5 pl-12 pr-11 text-base outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="지우기"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* 검색 전 — 자주 찾는 말 */}
      {!query.trim() && (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            자주 찾는 용어
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {featured.map((e) => (
              <button
                key={e.term}
                type="button"
                onClick={() => {
                  setQuery(e.term);
                  setOpenTerm(e.term);
                }}
                className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {e.term}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50/60 p-5 text-sm leading-relaxed text-gray-700 sm:p-6">
            <div className="mt-4 border-t border-gray-200/70 pt-3">
              <TierGuide />
            </div>
          </div>
        </div>
      )}

      {/* 검색 결과 없음 */}
      {query.trim() && shown.length === 0 && (
        <div className="mt-8 rounded-xl border border-gray-100 px-4 py-10 text-center text-sm text-gray-500">
          <p>「{query}」에 해당하는 용어를 찾지 못했습니다.</p>
          <p className="mt-1 text-xs">
            아직 담지 못한 용어가 있습니다. 필요한 용어는 담당 노무사에게
            말씀해 주세요.
          </p>
        </div>
      )}

      {/* 결과 목록 — 2건 이상일 때만 */}
      {shown.length > 1 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {shown.map((e) => (
            <button
              key={e.term}
              type="button"
              onClick={() => setOpenTerm(e.term)}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                opened?.term === e.term
                  ? "bg-primary text-primary-foreground"
                  : "border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {e.term}
            </button>
          ))}
        </div>
      )}

      {opened && <EntryCard entry={opened} />}

      {/* 결과를 보는 동안에도 등급을 읽을 수 있어야 한다 — 검색 전 화면에만 두었더니
          한글을 치는 순간 등급 설명이 사라졌다(CEO 지적 2026-10-01). */}
      {opened && (
        <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50/60 p-4 sm:p-5">
          <TierGuide />
        </div>
      )}
    </div>
  );
}

function EntryCard({ entry }: { entry: Entry }) {
  /**
   * **한글 → 영어 · 등급 · 출처. 그것뿐이다**(CEO 결재 2026-10-01).
   *
   * 설명(표제어 풀이·용례 설명·주의·만든 절차·자주 하는 실수·관련 용어)을 모두 걷었다.
   * 이 사전이 내놓는 것은 **어느 출처가 그 영어를 썼는가**이고, 그 밖의 문장은
   * 우리가 쓴 것이라 출처로 받칠 수 없다.
   *
   * ⚠️ **번역어만 보인다.** 「견줄 개념」(at-will employment)·「그대로 쓸 문장」
   *    (Korea does not recognize …)은 그 한글의 영어가 아니다. 설명 없이 한 줄에
   *    세우면 「해고 = at-will employment」로 읽힌다 — 2026-09-13 외부 검토가
   *    바로 그것을 지적했다. 그래서 설명을 걷는 날 이 둘도 함께 뺐다.
   *    데이터는 남아 있다.
   */
  const rows = sortUsages(entry).filter((u) => usageKind(u) === "번역");
  return (
    <article className="mt-6">
      <h2 className="break-keep text-2xl font-bold text-gray-900">
        {entry.term}
      </h2>
      <ul className="mt-4 space-y-3">
        {rows.map((u) => (
          <li
            key={u.english + u.register}
            className="rounded-xl border border-gray-100 p-4 sm:p-5"
          >
            <p className="text-base font-bold text-gray-900">{u.english}</p>
            {/* 등급 + 출처. 1등급은 눌러서 조문 원문을 연다. */}
            <div className="mt-2">
              <SourceBadge source={u.source} />
            </div>
            {/* 출처가 실제로 쓴 문장 — 설명이 아니라 출처 그 자체다. 접어 둔다. */}
            {u.evidence && (
              <details className="mt-2">
                <summary className="cursor-pointer list-none text-xs font-semibold text-primary [&::-webkit-details-marker]:hidden">
                  출처 원문 ▾
                </summary>
                <blockquote className="mt-1.5 border-l-2 border-primary/30 bg-gray-50/60 px-3 py-2 text-xs leading-relaxed text-gray-700">
                  “{u.evidence.quote}”
                </blockquote>
              </details>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

/**
 * 등급 안내 — 등급마다 **무엇이고 얼마나 믿을 만한가**를 한 줄로.
 * 설명 문장은 `TIER_INFO` 하나에서 읽는다(배지 툴팁도 같은 문장을 쓴다).
 */
function TierGuide() {
  return (
    <>
      <p className="break-keep text-sm font-semibold text-gray-800">
        출처 등급
      </p>
      <ul className="mt-2 space-y-2">
        {SOURCE_TIERS.map((t) => (
          <li key={t} className="break-keep text-sm leading-relaxed text-gray-700">
            <span className="mr-1.5 rounded bg-white px-1.5 py-0.5 text-xs font-semibold text-gray-800">
              {t}등급
            </span>
            <b>{TIER_INFO[t].label}</b>
            <span className="mt-0.5 block text-xs text-gray-500">
              {TIER_INFO[t].description}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 break-keep text-xs leading-relaxed text-gray-500">
        등급이 낮다고 틀린 말은 아닙니다. 원문까지 거슬러 확인할 수 있는 정도가
        다를 뿐입니다.
      </p>
    </>
  );
}
