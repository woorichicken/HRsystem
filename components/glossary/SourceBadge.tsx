/* ------------------------------------------------------------------
 * ⚠️ 이 파일은 **생성물이다. 직접 고치지 말 것.**
 *
 * 정본: global-hr-portal/src/lib/glossary/SourceBadge.tsx
 * 복제: node scripts/glossary-sync-fairhr.mjs  (정본 저장소에서 실행)
 * 정본 지문: 60cb55fc2f0e2236
 *
 * 사전을 고칠 일이 있으면 정본에서 고치고 이 스크립트를 다시 돌린다.
 * 여기서 고치면 다음 복제 때 덮어써지고, 그 사이에 양쪽이 다른 말을 한다.
 * ------------------------------------------------------------------ */
import { lawLink } from "@/lib/glossary/laws";
import { TIER_INFO, type Source, type SourceTier } from "@/lib/glossary/types";

/**
 * 출처 표시 — **등급 + 실제 근거**를 함께 보여 준다.
 *
 * 등급만 보여 주면 "무엇에 근거했는지"를 알 수 없고, 근거만 보여 주면 "얼마나
 * 단단한 근거인지"를 알 수 없다. 둘 다 있어야 사용자가 이 표현을 어디까지
 * 근거로 댈 수 있는지 판단한다.
 *
 * 1등급(법령)은 **눌러서 원문을 확인**할 수 있어야 한다. 확인할 수 없는 근거는
 * 근거가 아니다.
 */

const TIER_STYLE: Record<SourceTier, string> = {
  1: "bg-primary text-primary-foreground",
  2: "bg-primary/10 text-primary",
  3: "bg-gray-100 text-gray-800",
  4: "bg-amber-100 text-amber-900",
};

export function SourceBadge({ source }: { source: Source }) {
  const info = TIER_INFO[source.tier];
  const detail = describe(source);
  const href = source.tier === 1 ? lawLink(source.law) : linkOf(source);

  return (
    <span className="ml-auto flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
      <span
        title={info.description}
        className={`rounded px-1.5 py-0.5 text-[11px] font-bold ${TIER_STYLE[source.tier]}`}
      >
        {source.tier}등급 · {info.short}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-300 underline-offset-2 hover:text-primary"
          title="원문 확인"
        >
          {detail} ↗
        </a>
      ) : (
        <span>{detail}</span>
      )}
      {/* 2등급은 어느 로펌이 낸 것인지가 근거력의 핵심이라 함께 적는다. */}
      {source.tier === 2 && source.firm && (
        <span className="basis-full text-[11px] text-gray-400">
          {source.firm}
        </span>
      )}
    </span>
  );
}

function describe(source: Source): string {
  switch (source.tier) {
    case 1:
      return `${source.law} ${source.article}`;
    case 2:
      // 법률매체 — 어느 로펌·매체가 낸 것인지가 근거력의 핵심이다.
      return [source.outlet, source.title && `「${source.title}」`]
        .filter(Boolean)
        .join(" ");
    case 3:
      return `${source.publisher} 「${source.title}」`;
    case 4:
      return [source.author, `「${source.title}」`, source.where, source.year]
        .filter(Boolean)
        .join(" ");
  }
}

function linkOf(source: Source): string | null {
  if (source.tier === 2 || source.tier === 3 || source.tier === 4) {
    return source.url ?? null;
  }
  return null;
}
