/* ------------------------------------------------------------------
 * ⚠️ 이 파일은 **생성물이다. 직접 고치지 말 것.**
 *
 * 정본: global-hr-portal/src/lib/glossary/search.ts
 * 복제: node scripts/glossary-sync-fairhr.mjs  (정본 저장소에서 실행)
 * 정본 지문: 7a7c26c9badfce20
 *
 * 사전을 고칠 일이 있으면 정본에서 고치고 이 스크립트를 다시 돌린다.
 * 여기서 고치면 다음 복제 때 덮어써지고, 그 사이에 양쪽이 다른 말을 한다.
 * ------------------------------------------------------------------ */
import { ENTRIES } from "./data";
import { REGISTERS, USAGE_KINDS, usageKind } from "./types";
import type { Entry, Register, Usage } from "./types";

/**
 * 표제어 검색 — **순수 함수로 둔다.** 화면과 분리해야 실제 입력·출력으로 테스트할 수 있다.
 *
 * 한국어는 조사가 붙고("해고를", "연차는") 띄어쓰기가 흔들려서, 정확히 일치하는
 * 표제어만 찾으면 대부분 빈손이 된다. 그래서 아래 순서로 넓혀 간다.
 */

/** 공백을 없애고 소문자로 — "연차 휴가" 와 "연차휴가" 를 같게 본다. */
function norm(s: string): string {
  return s.replace(/\s+/g, "").toLowerCase();
}

/** 조사를 떼어 본다. 한 글자짜리만 — 더 떼면 "휴가"가 "휴"가 된다. */
function stripParticle(s: string): string {
  return s.replace(/(을|를|은|는|이|가|의|에|도|만|과|와|로|랑)$/u, "");
}

/** 무엇으로 걸렸나. 설명·의견은 화면에서 걷어 색인에서도 뺐다(2026-10-01). */
export type MatchKind = "표제어" | "이표기" | "영어";

export interface SearchHit {
  entry: Entry;
  /** 어디서 걸렸는가 — 목록에서 이유를 보여 준다 */
  matched: MatchKind;
}

/**
 * @param includeDraft 확정 전 항목까지 포함할지. **실험 트랙에서만 true** —
 *   회원사 화면에 검수 전 문구가 확정본처럼 보이면 안 된다.
 */
export function searchEntries(
  query: string,
  { includeDraft = false }: { includeDraft?: boolean } = {},
): SearchHit[] {
  const pool = includeDraft
    ? ENTRIES
    : ENTRIES.filter((e) => e.status === "confirmed");

  const raw = norm(query);
  if (!raw) return [];
  const q = stripParticle(raw) || raw;

  const hits = new Map<string, SearchHit>();
  const add = (entry: Entry, matched: MatchKind) => {
    if (!hits.has(entry.term)) hits.set(entry.term, { entry, matched });
  };

  // 1) 표제어 — 완전일치가 먼저, 그다음 부분일치
  for (const e of pool) if (norm(e.term) === q) add(e, "표제어");
  for (const e of pool) if (norm(e.term).includes(q)) add(e, "표제어");
  // 2) 이표기("짤리다" → 해고)
  for (const e of pool)
    if (e.aliases.some((a) => norm(a).includes(q))) add(e, "이표기");
  // 3) 영어로도 찾을 수 있게 — 본사 문서를 보다 거꾸로 찾는 경우가 많다.
  //    ⚠️ **화면에 보이는 번역어만** 센다. 화면은 번역어만 그리므로, 「견줄 개념」
  //       (at-will employment) 으로 걸리면 항목만 뜨고 그 말은 안 보인다.
  for (const e of pool)
    if (
      e.usages.some(
        (u) => usageKind(u) === "번역" && norm(u.english).includes(q),
      )
    )
      add(e, "영어");

  // ⚠️ 2026-10-01 까지는 설명 본문(`summary`)·용례 설명·주의·의견까지 훑었다.
  //    화면에서 설명을 모두 걷었으므로(CEO 결재) 색인에서도 뺀다 — **화면에 없는
  //    글 때문에 항목이 뜨면** 사용자는 왜 걸렸는지 알 수 없다.
  //    설명을 되살릴 때 여기도 함께 되살릴 것.

  return [...hits.values()];
}

/** 용례를 표시 순서대로 정렬한다 — **법령이 항상 맨 위**다. */
export function sortUsages(entry: Entry) {
  // **번역어가 먼저다.** 견줄 개념·문장이 대표 표현 자리에 올라오면 담당자가
  // 그것을 번역어로 알고 복사한다(외부 검토 지적 2026-09-13).
  const kindRank = (u: Usage) => USAGE_KINDS.indexOf(usageKind(u));
  const rank = (r: Register) => REGISTERS.indexOf(r);
  return [...entry.usages].sort(
    (a, b) => kindRank(a) - kindRank(b) || rank(a.register) - rank(b.register),
  );
}

/** 화면 첫 진입에서 보여 줄 표제어(검색 전). 영역별로 고르게 뽑는다. */
export function featuredEntries(
  limit = 8,
  { includeDraft = false }: { includeDraft?: boolean } = {},
): Entry[] {
  const pool = includeDraft
    ? ENTRIES
    : ENTRIES.filter((e) => e.status === "confirmed");
  const byDomain = new Map<string, Entry[]>();
  for (const e of pool) {
    const list = byDomain.get(e.domain) ?? [];
    list.push(e);
    byDomain.set(e.domain, list);
  }
  const picked: Entry[] = [];
  let round = 0;
  while (picked.length < limit) {
    let added = false;
    for (const list of byDomain.values()) {
      if (list[round]) {
        picked.push(list[round]);
        added = true;
        if (picked.length === limit) break;
      }
    }
    if (!added) break;
    round += 1;
  }
  return picked;
}
