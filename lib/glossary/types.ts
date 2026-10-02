/* ------------------------------------------------------------------
 * ⚠️ 이 파일은 **생성물이다. 직접 고치지 말 것.**
 *
 * 정본: global-hr-portal/src/lib/glossary/types.ts
 * 복제: node scripts/glossary-sync-fairhr.mjs  (정본 저장소에서 실행)
 * 정본 지문: c98b7cc84d35dfec
 *
 * 사전을 고칠 일이 있으면 정본에서 고치고 이 스크립트를 다시 돌린다.
 * 여기서 고치면 다음 복제 때 덮어써지고, 그 사이에 양쪽이 다른 말을 한다.
 * ------------------------------------------------------------------ */
/**
 * 노동법 한영사전 — 자료 구조.
 *
 * 설계 근거: `docs/한영사전-설계.md`
 *
 * 이 사전의 핵심은 단어 대응이 아니라 **용례**다. 한국 노동법 용어는 영어와
 * 1:1 로 대응하지 않고, 어느 말을 쓰느냐가 문서의 성격을 바꾼다.
 * (권고사직을 dismissal 로 적으면 부당해고 다툼에서 불리해진다.)
 */

/** 어디에 쓰는 말인가. **표시 순서도 이 순서를 따른다** — 법령이 항상 먼저다. */
export const REGISTERS = [
  "법령",
  "계약·규정",
  "본사보고",
  "분쟁",
  "실무구어",
] as const;

export type Register = (typeof REGISTERS)[number];

export const REGISTER_NOTE: Record<Register, string> = {
  법령: "법령 공식 영문본이 쓰는 말",
  "계약·규정": "근로계약서·취업규칙 영문본에서 쓰는 말",
  본사보고: "본사·그룹 리포팅에서 통하는 말",
  분쟁: "노동위원회·소송 문서에서 쓰는 말",
  실무구어: "대화·메일에서는 쓰지만 문서에는 쓰지 않는 말",
};

export const DOMAINS = [
  "근로관계",
  "해고·종료",
  "임금",
  "근로시간·휴가",
  "모성·양립",
  "집단노사",
  "산업안전",
  "사회보험",
] as const;

export type Domain = (typeof DOMAINS)[number];

/**
 * 출처 등급 — **무엇에 근거했는지를 단계로 밝힌다**(CEO 지시 2026-08-30).
 *
 * 「법령/관용」 두 갈래로만 나누면 그 사이가 사라진다. 법령에 없지만 학술·매체로
 * 뒷받침되는 말과, 근거를 댈 수 없는 업계 통용어는 신뢰도가 다르다.
 * 등급이 낮다고 틀린 말이 아니라 **검증 가능성이 다르다**는 뜻이다.
 */
export const SOURCE_TIERS = [1, 2, 3, 4] as const;
export type SourceTier = (typeof SOURCE_TIERS)[number];

/**
 * **국내 로펌 상위 10곳**(CEO 지시 2026-09-01로 5곳→10곳 확대).
 * 2025년 매출 기준 순위이며, **이들의 영문 뉴스레터와 홈페이지를 적극 참조한다.**
 * 외국계 본사가 이름을 알고, 실명으로 내며, 틀렸을 때 책임 소재가 분명하기 때문이다.
 *
 * `insights` 는 2026-09-01 에 응답 200 을 확인한 영문 발간물 진입점이다.
 * ⚠️ 순위는 매출 기준이라 **영문 노동 자료를 실제로 내는 곳과는 다르다** —
 *    김·장·태평양·세종·광장·율촌·화우·지평이 실제 산출이 있고, 나머지는 형사·송무
 *    중심이라 기대치를 낮게 잡는다.
 *
 * ⚠️ **노무법인 자료는 쓰지 않는다**(CEO 지시). 우리 자신이 노무법인이라
 *    동종 업계 자료를 근거로 세우면 대외적으로 근거가 되지 못한다.
 */
export const PRIORITY_FIRMS = [
  { name: "김·장 법률사무소", english: "Kim & Chang", insights: "https://www.kimchang.com/en/insights/" },
  { name: "법무법인 태평양", english: "Bae, Kim & Lee", insights: "https://www.bkl.co.kr/law?lang=en" },
  { name: "법무법인 세종", english: "Shin & Kim", insights: "https://www.shinkim.com/eng/media/newsletter" },
  { name: "법무법인 광장", english: "Lee & Ko", insights: "https://www.leeko.com/eng/newsletter/newsletterList.do" },
  { name: "법무법인 율촌", english: "Yulchon", insights: "https://www.yulchon.com/en/resources/publications/legal-update.do" },
  { name: "법무법인 화우", english: "Yoon & Yang", insights: "https://www.hmplaw.com/en/insight/newsletter.do" },
  { name: "법무법인 와이케이", english: "YK", insights: "https://www.yklaw.co.kr/" },
  { name: "법무법인 지평", english: "Jipyong", insights: "https://www.jipyong.com/en/" },
  { name: "법무법인 바른", english: "Barun Law", insights: "https://www.barunlaw.com/eng/business/newsletter" },
  { name: "법무법인 대륙아주", english: "Daeryook & Aju", insights: "https://www.draju.com/en" },
] as const;

export const TIER_INFO: Record<
  SourceTier,
  { label: string; short: string; description: string; verifiable: boolean }
> = {
  1: {
    label: "법령 공식 영문본",
    short: "법제처",
    description:
      "법제처가 공개한 정부 공식 영문 번역입니다. 조문을 눌러 원문을 바로 확인할 수 있습니다.",
    verifiable: true,
  },
  2: {
    label: "법률 전문 매체",
    short: "법률매체",
    description:
      "로펌 발간물·법률 전문 매체의 영문 자료입니다. 실명으로 발행되어 내용에 책임이 따릅니다.",
    verifiable: true,
  },
  3: {
    label: "공공기관 영문 자료",
    short: "공공기관",
    description:
      "고용노동부 등 공공기관의 영문 자료입니다. 공적인 자료이나 법령 번역만큼의 지위는 아닙니다.",
    verifiable: true,
  },
  4: {
    label: "법학 논문·주석서",
    short: "학술",
    description:
      "심사를 거친 법학 논문·주석서입니다. 개념은 깊으나 실무 표기와 다를 수 있습니다.",
    verifiable: true,
  },
};


/**
 * 근거. **등급이 화면에서 보여야 한다** — 사용자가 이 말을 어디까지 근거로 댈 수
 * 있는지 판단하는 기준이다. 등급마다 필요한 서지사항이 다르다.
 */
export type Source =
  | { tier: 1; law: string; article: string }
  | { tier: 2; outlet: string; title?: string; url?: string; firm?: string }
  | { tier: 3; publisher: string; title: string; url?: string }
  | { tier: 4; title: string; where: string; author?: string; year?: string; url?: string };

/**
 * **어떻게 확인했는가.** 출처 등급이 "무엇에 근거했나"라면 이쪽은 "그 근거를
 * 우리가 실제로 열어 봤나"다. 둘은 다르다 — 1등급 법령을 인용하면서 원문을
 * 안 읽었을 수도 있고(실제로 그런 실수를 했다), 2등급 로펌 자료라도 문장을
 * 그대로 대조했으면 그 항목은 믿을 만하다.
 */
export interface Evidence {
  /** 출처 원문에서 그대로 옮긴 문장. 요약이 아니라 발췌여야 한다. */
  quote: string;
  /** 원문을 열어 대조한 날 */
  checkedOn: string;
  /**
   * **어떻게 가져왔는가.** 기계가 뽑은 것과 사람이 열어 확인한 것은 다르다.
   * 자동 추출은 조문 블록을 잘못 잡거나 엉뚱한 문장을 집을 수 있다 —
   * 실제로 몇 건은 조문 상호참조("Article 43 (2)")를 조문 표제로 오인했다.
   * 검증 담당자가 대조하면 「원문 확인」으로 올린다.
   *
   * **「법령원문 대조」는 기계가 법제처 영문법령 API 원문과 글자 그대로 견준 것**
   * (2026-09-22 신설, CEO 결재 2026-09-29). 1등급에만 붙는다.
   * ⚠️ 「원문 확인」과 뜻이 다르다 — 그쪽은 **사람이 눈으로 봤다**는 뜻이다.
   *    둘을 뭉뚱그리면 무엇으로 확인했는지 알 수 없게 된다.
   *    기계 대조가 사람 눈보다 낫다는 것은 실측으로 드러났다 — 처음 돌렸을 때
   *    139건 중 **14건이 원문과 달랐고, 사람 검수는 그중 하나도 못 잡았다.**
   */
  by: "자동 추출" | "원문 확인" | "법령원문 대조";
}

/**
 * **이 줄이 무엇인가** — 번역어인가, 견줄 남의 제도인가, 통째로 쓸 문장인가.
 *
 * 외부 검토 지적(2026-09-13) — 「해고」의 대응어 목록에 `dismissal`(번역어),
 * `at-will employment`(한국에 없는 미국 제도), `Korea does not recognize
 * at-will employment`(문장)가 **나란히** 놓여 있었다. 담당자가 문서에 복사해
 * 붙이는 자료인데 성격이 다른 셋이 같은 줄에 서 있으면 잘못 가져간다.
 *
 * 원인은 우리 규칙이다 — 「모든 줄에 인용문을 붙인다」로 정해 두니, 근거를 달
 * 자리가 필요한 관찰이 대응어 목록으로 흘러들었다.
 *
 * ⚠️ 기본값은 `번역` 이다. 나머지 둘은 **대표 표현으로 올라오지 않는다**
 *    (`sortUsages` 가 뒤로 밀고, 테스트가 첫 줄이 번역어인지 확인한다).
 */
export const USAGE_KINDS = ["번역", "비교", "문장"] as const;
export type UsageKind = (typeof USAGE_KINDS)[number];

export const USAGE_KIND_NOTE: Record<UsageKind, string> = {
  번역: "이 한국어에 대응하는 영어 표현",
  비교: "한국에 없거나 뜻이 다른 남의 제도 — 견주어 설명할 때 쓴다",
  문장: "낱말이 아니라 문장. 본사에 그대로 옮겨 쓸 수 있다",
};

export interface Usage {
  english: string;
  register: Register;
  /**
   * 번역어인가, 견줄 개념인가, 문장인가. 비우면 `번역`.
   * 번역이 아닌 것을 번역어 자리에 두지 않기 위한 칸이다.
   */
  kind?: UsageKind;
  /** 이 맥락에서 정확히 무슨 뜻인가 */
  meaning: string;
  source: Source;
  /** 쓰면 안 되는 맥락 */
  caution?: string;
  /** 원문 대조 기록. 없으면 "인용문까지는 확인하지 않았다"는 뜻이다. */
  evidence?: Evidence;
}

/** 비우면 번역어로 읽는다 — 193개 중 4개만 다른 성격이라 기본값을 그렇게 뒀다. */
export function usageKind(u: Usage): UsageKind {
  return u.kind ?? "번역";
}

/**
 * 이 항목이 **어떤 절차로 만들어졌는가.** 결과만 보여 주면 사용자는 그것이
 * 법령을 직접 읽어 쓴 것인지, 검색 요약을 옮긴 것인지 구분할 수 없다.
 */
export const MADE_BY = [
  "법령 원문 조회",
  "리서치 에이전트",
  "AI 초안",
  "원문 대조 검증",
  "노무사 검수",
] as const;

export type MadeBy = (typeof MADE_BY)[number];

export const MADE_BY_NOTE: Record<MadeBy, string> = {
  "법령 원문 조회": "법제처 공식 영문법령 원문을 직접 읽어 대응어를 가져왔다.",
  "리서치 에이전트":
    "조사 전용 에이전트(파일 수정 권한 없음)가 법령·공공자료·학술·매체를 훑어 후보와 인용문을 모았다.",
  "AI 초안": "용례 설명과 「자주 하는 실수」 문장을 AI 가 먼저 썼다.",
  "원문 대조 검증":
    "인용한 문장이 실제로 그 출처에 있는지 사람이 원문을 다시 열어 확인했다.",
  "노무사 검수": "공인노무사가 문언을 확인해 확정했다.",
};

/**
 * 항목의 단계. **검수와 확정을 나눈다**(CEO 지시 2026-09-01).
 *
 * 나눈 이유 — 하나로 두면 「출처를 열어 대조했다」와 「노무사가 법률적으로
 * 맞다고 판단했다」가 구별되지 않는다. 앞쪽은 영문 담당자가 할 수 있고,
 * 뒤쪽은 공인노무사만 할 수 있다. 한 칸에 담으면 담당자가 누른 버튼이
 * 노무사 판단처럼 보인다.
 *
 * ⚠️ **공개 게이트는 `confirmed` 하나뿐이다.** `checked` 는 화면을 열지 않는다.
 */
export const STATUSES = ["draft", "checked", "confirmed"] as const;
export type EntryStatus = (typeof STATUSES)[number];

export const STATUS_INFO: Record<
  EntryStatus,
  { label: string; note: string; public: boolean }
> = {
  draft: {
    label: "초안",
    note: "AI 와 리서치 도구로 만든 상태. 사람이 출처를 열어 보지 않았다.",
    public: false,
  },
  checked: {
    label: "검수 완료",
    note: "담당자가 출처를 직접 열어 인용문이 그대로 있는지 대조했다. 법률 판단은 아직이다.",
    public: false,
  },
  confirmed: {
    label: "확정",
    note: "공인노무사가 문언을 확인해 확정했다. 이 단계부터 회원사에게 보인다.",
    public: true,
  },
};

/** 누가 언제 했는가 */
export interface Signoff {
  by: string;
  on: string;
}

/**
 * **의견의 출처.** 고정 분류다(CEO 지시 2026-09-01
 * 「AI 의견에도 출처는 있어야 한다」).
 *
 * 의견은 판단이지만 **아무것도 근거 없이 단정하면 그냥 소문**이다.
 * 특히 "미국계 본사는 이렇게 부른다" 같은 서술은 AI 가 확인한 것이 아니다.
 * 그래서 문장마다 각주를 다는 대신 **의견 전체의 출처**를 분류로 밝히고,
 * 인용한 조문은 링크로 확인할 수 있게 한다.
 */
export const OPINION_BASES = [
  "법령 조문",
  "이 항목의 출처",
  "FAIR 자문 경험",
  "영어사전·해외 공식자료",
  "AI 일반지식(미검증)",
] as const;

export type OpinionBasis = (typeof OPINION_BASES)[number];

export const OPINION_BASIS_INFO: Record<
  OpinionBasis,
  { label: string; note: string; verified: boolean }
> = {
  "법령 조문": {
    label: "법령 조문",
    note: "본문에서 인용한 조문입니다. 눌러서 원문을 확인할 수 있습니다.",
    verified: true,
  },
  "이 항목의 출처": {
    label: "이 항목의 출처",
    note: "위 「근거」에 실린 1~4등급 출처에서 끌어온 내용입니다.",
    verified: true,
  },
  "FAIR 자문 경험": {
    label: "FAIR 자문 경험",
    note:
      "FAIR 가 자문 과정에서 실제로 확인한 내용입니다. 공인노무사가 확정한 것만 이 표시가 붙습니다.",
    verified: true,
  },
  "영어사전·해외 공식자료": {
    label: "영어사전 · 해외 공식자료",
    note:
      "영어 낱말의 뜻·격은 영어사전에서, 미국·영국 제도는 그 나라 공식 자료에서 확인한 내용입니다. 눌러서 원문을 확인할 수 있습니다.",
    verified: true,
  },
  "AI 일반지식(미검증)": {
    label: "AI 일반지식 · 미검증",
    note:
      "AI 가 일반 지식으로 쓴 부분입니다. 확인된 근거가 아닙니다. 특히 해외 본사의 용어 관행 서술이 여기 해당합니다.",
    verified: false,
  },
};

/** 의견 한 덩어리 */
export interface Opinion {
  body: string;
  /** 이 의견의 출처. 하나 이상 적는다 */
  basis: OpinionBasis[];
  /** 본문에서 인용한 법령 조문 — 확인 링크를 만든다 */
  refs?: { law: string; article: string }[];
  /**
   * **영어 낱말·해외 제도를 확인한 곳** (2026-09-14 신설).
   *
   * 우리 의견의 상당수는 한국법 지식이 아니라 **영어 낱말에 대한 주장**이다 —
   * 「firing 은 구어」, 「redundancy 는 영연방계」, 「미국의 layoff 는 일시
   * 휴직을 뜻하기도」. 그런데 우리 출처 사다리(1~4등급)는 **한국 노동법의
   * 근거**라서 이 주장을 받칠 자리가 없었고, 전부 「AI 일반지식(미검증)」에
   * 얹혀 있었다. 실제로 그 자리에서 세 번 틀렸다(firing 절대어, 영국 법정
   * redundancy pay, 영국 법정 written statement — 모두 사람이 우연히 잡았다).
   *
   * ⚠️ **사전 정의를 통째로 옮기지 않는다.** 저작권이 있다. 한 문장 발췌와
   *    링크까지만 싣는다 — 인용문 규칙과 같다.
   */
  englishRefs?: {
    /** 확인한 영어 표현 */
    term: string;
    /** Cambridge Dictionary · Merriam-Webster · Cornell LII · GOV.UK 등 */
    source: string;
    /** 그 페이지에 있는 문장 발췌(한 문장) */
    quote: string;
    url: string;
    /** 확인한 날 */
    checkedOn: string;
  }[];
  /** 초안을 쓴 사람과 날짜 */
  drafted?: Signoff;
  /** 공인노무사가 확정한 사람과 날짜 */
  confirmed?: Signoff;
}

export interface Entry {
  /**
   * 표제어(한글). **명사만 싣는다**(CEO 지시 2026-09-01) — 동사까지 넓히면
   * 범위가 감당되지 않는다. 「해고하다」가 아니라 「해고」다.
   * 다만 **검색용 이표기에는 동사를 넣는다** — 사람은 "짤리다"라고 치기 때문이다.
   */
  term: string;
  /** 검색용 이표기 — "짤리다"로도 「해고」가 나오게 한다 */
  aliases: string[];
  domain: Domain;
  /** 한 줄 정의 */
  summary: string;
  usages: Usage[];
  /** 자주 하는 실수 */
  pitfalls?: string[];
  /** 관련 표제어 */
  related?: string[];
  /**
   * 초안 → 검수 완료 → 확정. **`confirmed` 가 아니면 실험 트랙에서만 보인다**
   * (처리방침 IS_APPROVED 와 같은 장치).
   */
  status: EntryStatus;
  /** 출처를 열어 대조한 사람과 날짜(검수) */
  checked?: Signoff;
  /** 공인노무사가 확정한 사람과 날짜(확정) */
  confirmed?: Signoff;
  /**
   * **AI 의견.** 출처가 없거나 모호한 것을 여기서 다룬다(CEO 지시 2026-09-01).
   *
   * 전에는 이런 내용을 「5등급 출처」로 실었다. 그러면 **우리 판단이 근거처럼
   * 보인다.** 출처는 사실이고 의견은 판단이라 자리를 나눴다.
   *
   * ⚠️ **`basis` 없이 실을 수 없다.** 근거 없이 단정하면 그냥 소문이 된다.
   */
  aiOpinion: Opinion;
  /**
   * **FAIR 의견.** 담당자가 출처를 읽고 쓰고, 공인노무사가 확정한다.
   *
   * ⚠️ **화면에는 `confirmed` 가 붙은 것만 나온다**(2026-09-22, CEO 지시).
   * 담당자가 써 두기만 한 초안은 나오지 않고 검색에도 걸리지 않는다 — 확정
   * 전까지는 우리 판단이 아니기 때문이다. 전에는 없어도 칸을 그려 「작성 전」
   * 이라고 적었는데, 132개 전부가 그래서 **빈 칸을 132번 보여 주고 있었다.**
   */
  fairOpinion?: Opinion;
  /** 이 항목을 만든 절차. 표시 순서가 곧 작업 순서다. */
  madeBy: MadeBy[];
  /** 마지막으로 원문을 대조한 날 */
  verifiedOn?: string;
}
