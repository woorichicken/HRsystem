/* ------------------------------------------------------------------
 * ⚠️ 이 파일은 **생성물이다. 직접 고치지 말 것.**
 *
 * 정본: global-hr-portal/src/lib/glossary/data.ts
 * 복제: node scripts/glossary-sync-fairhr.mjs  (정본 저장소에서 실행)
 * 정본 지문: c4f6ee3b1b5e1cc7
 *
 * 사전을 고칠 일이 있으면 정본에서 고치고 이 스크립트를 다시 돌린다.
 * 여기서 고치면 다음 복제 때 덮어써지고, 그 사이에 양쪽이 다른 말을 한다.
 * ------------------------------------------------------------------ */
/**
 * 노동법 한영사전 — 표제어.
 *
 * 모델 정의서: `docs/한영사전-모델정의서.md`
 * 표제어 선정: **영문법령에서 뽑았다**(CEO 지시 2026-09-01).
 *   13개 법률 326개 조문의 한·영 조문표제를 대조해 후보를 만들고,
 *   외국계 인사담당자가 본사에 설명할 일이 있는 것만 골랐다.
 *   원본은 `docs/수확/*-조문표제.json`, 방법은 `docs/수확/수확방법.md`.
 *
 * 구조 —
 *   · **usages** 에는 **1~4등급 출처가 있는 것만** 싣는다. 확인 가능한 사실이다.
 *   · 출처가 없거나 모호한 것(본사가 쓰는 말, 함정, 실무 관행)은
 *     **aiOpinion / fairOpinion** 에 적는다. 판단은 판단 자리에 둔다.
 *
 * 왜 나눴나 — 전에는 실무 표현을 「5등급 출처」로 실었다. 그러면 **우리 판단이
 * 근거처럼 보인다.** 44건이 5등급이었고 그중 10건은 "일반적으로 쓰인다"는
 * 말뿐이었다(CEO 지시 2026-09-01로 폐지).
 */
import type { Entry } from "./types";

export const ENTRIES: Entry[] = [
  // ───────────────────────── 근로관계 ─────────────────────────
  {
    term: "근로자",
    aliases: ["종업원", "직원", "노동자"],
    domain: "근로관계",
    summary: "직업의 종류와 관계없이 임금을 목적으로 근로를 제공하는 사람.",
    usages: [
      {
        english: "employee",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제2조제1항제1호" },
        evidence: {
          quote:
            'The term "employee" means a person, regardless of the kind of occupation, who offers labor to business or a workplace for the purpose of earning wages',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사 문서에서는 worker, staff, personnel 이 섞여 나옵니다. worker 는 ILO·유럽계에서 널리 쓰지만 현장 근로자를 가리키는 뉘앙스가 있고, staff·personnel 은 집합명사라 개별 근로자의 법적 지위를 가리키지 못합니다. **계약서·법률 문서에는 employee 를 씁니다.** 더 위험한 것은 반대 방향입니다 — 프리랜서·위탁계약자를 employee 로 적으면 근로자성을 인정한 것처럼 읽힙니다. 근로자성은 계약 형식이 아니라 실질로 판단되므로 문서에서 단정하지 마십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["사용자", "근로계약"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "사용자",
    aliases: ["사업주", "고용주"],
    domain: "근로관계",
    summary:
      "사업주, 사업 경영 담당자, 그 밖에 근로자에 관한 사항에 대하여 사업주를 위하여 행위하는 자.",
    usages: [
      {
        english: "employer",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제2조제1항제2호" },
        evidence: {
          quote:
            'The term "employer" means a business owner, or a person responsible for the management of business, or a person who acts on behalf of a business owner with respect to matters relating to employees',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사는 the employer 를 법인 하나로 읽습니다. 그런데 **한국법의 사용자는 대표이사만이 아니라 인사권을 행사하는 관리자까지 포함**합니다. 직급이 아니라 **권한이 기준**입니다 — 근로자에 관한 사항에서 사업주를 위해 행위하는 사람이면 팀장이라도 그 언행이 회사의 행위가 됩니다. 노사 구도를 설명할 때 management(사측)라고 쓰는 것은 자연스럽지만, 법적 책임 범위를 말할 때는 그 확장을 반드시 덧붙이십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로자", "경영책임자"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "근로계약",
    aliases: ["고용계약", "근로계약서"],
    domain: "근로관계",
    summary:
      "근로자가 근로를 제공하고 사용자가 임금을 지급하는 것을 목적으로 하는 계약.",
    usages: [
      {
        english: "labor contract",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제2조제1항제4호" },
        evidence: {
          quote:
            'The term "labor contract" means a contract which is entered into in order that an employee offers work for which the employer pays its corresponding wages',
          checkedOn: "2026-09-15",
          by: "원문 확인",
        },
      },
      {
        english: "employment contract",
        register: "본사보고",
        meaning:
          "로펌 영문 실무자료가 쓰는 말. 법령 공식 영문본의 labor contract 와 뜻은 같으나, 본사 문서·계약서에서는 이쪽이 표준이다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "Among the various types of employment contracts, the two major types are “employment contracts without a fixed term” (ie, indefinite employment contracts) and “employment contracts with a fixed term” (ie, definite employment contracts).",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "계약서 제목으로는 employment contract 가 가장 널리 쓰이고, 미국계는 employment agreement 를 선호합니다. 둘의 실질 차이는 없습니다. 정작 중요한 것은 **한국은 근로조건 서면 명시가 법정 의무**라는 점입니다(제17조). **문서 이름은 문제가 아닙니다** — offer letter 라도 법정 근로조건이 서면에 적혀 교부됐다면 요건을 채웁니다. 본사 표준 offer letter 가 그 항목들을 담고 있는지 항목별로 대조하십시오.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로기준법", article: "제17조" }],
    },
    pitfalls: [
      "취업규칙에 미달하는 근로조건을 정한 근로계약은 그 부분이 무효가 되고 취업규칙 기준이 적용된다(제97조).",
    ],
    related: ["근로조건의 명시", "취업규칙"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "근로조건",
    aliases: ["고용조건", "근무조건"],
    domain: "근로관계",
    summary: "임금·근로시간·휴일·휴가 등 근로관계의 내용.",
    usages: [
      {
        english: "terms and conditions of employment",
        register: "법령",
        meaning: "근로기준법 영문본이 일관되게 쓰는 표현.",
        source: { tier: 1, law: "근로기준법", article: "제3조" },
        evidence: {
          quote:
            "The terms and conditions of employment prescribed by this Act shall be the minimum standards for employment, and the parties to labor relations shall not lower the terms and conditions of employment under the pretext of compliance with this Act.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사 문서는 working conditions 를 자주 씁니다. 뜻은 통하지만 이 말은 **근무환경**을 가리키기도 해, 계약조건 전체를 뜻할 때는 terms and conditions of employment 가 더 정확합니다. 이 법이 정한 조건은 **최저 기준**이며 이를 이유로 조건을 낮추지 못한다는 점(제3조)을 함께 설명해야 본사가 '법대로만 맞추자'는 조정 요구를 하지 않습니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로기준법", article: "제3조" }],
    },
    related: ["근로계약", "근로조건의 명시"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "근로조건의 명시",
    aliases: ["서면명시", "근로조건 서면"],
    domain: "근로관계",
    summary:
      "임금·소정근로시간·휴일·연차휴가 등을 명시하고 서면으로 교부해야 하는 사용자의 의무.",
    usages: [
      {
        english: "clear statement of terms and conditions of employment",
        register: "법령",
        meaning: "근로기준법 제17조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제17조" },
        evidence: {
          quote:
            "Article 17 (Clear Statement of Terms and Conditions of Employment) (1) An employer shall state the following matters clearly. The same shall also apply to any alteration of the following matters after entering into a labor contract.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "written statement of working conditions",
        register: "법령",
        meaning: "기간제법이 같은 의무를 정할 때 쓰는 표현.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제17조",
        },
        evidence: {
          quote:
            "Article 17 (Written Statement of Working Conditions) When any employer enters into an employment contract with a fixed-term or part-time employee, it shall clearly state, in writing, each of the following matters: Provided, That subparagraph 6 shall apply only to part-time employees.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "terms and conditions of employment in writing",
        register: "본사보고",
        meaning:
          "근로기준법 제17조의 서면 명시 의무를 로펌 영문자료가 옮긴 표현. 전자문서도 서면에 포함된다는 점까지 함께 나온다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "Article 17(1) and (2) of the Labour Standards Act provides that employment contracts must explicitly provide for the terms and conditions of employment in writing (which can be in the form of electronic documents).",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 **offer letter 와 별개의 법정 의무**라고 설명해야 합니다. **영미권을 하나로 묶어 말할 수 없습니다** — 영국은 법정 written statement 제도가 따로 있고, 미국계는 그런 제도에 익숙하지 않은 경우가 많습니다. 한국에서는 위반 자체가 처벌 대상이고, 명시한 조건과 실제가 다르면 근로자가 즉시 계약을 해지하고 손해배상을 청구할 수 있습니다(제19조).",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로기준법", article: "제19조" }],
    },
    related: ["근로계약", "근로조건"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "균등한 처우",
    aliases: ["차별금지", "평등대우"],
    domain: "근로관계",
    summary:
      "성별을 이유로 차별하지 못하고, 국적·신앙·사회적 신분을 이유로 근로조건을 차별하지 못한다.",
    usages: [
      {
        english: "equal treatment",
        register: "법령",
        meaning: "근로기준법 제6조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제6조" },
        evidence: {
          quote:
            "An employer shall neither discriminate against employees on the basis of gender, nor take discriminatory treatment in relation to terms and conditions of employment on the ground of nationality, religion, or social status.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "미국계 본사는 EEO(Equal Employment Opportunity)와 protected class 개념으로 이해하려 합니다. 한국의 보호 사유는 **성별·국적·신앙·사회적 신분**으로 열거돼 있어 미국보다 좁지만, 남녀고용평등법·고령자고용법·기간제법이 각각 성별·연령·고용형태 차별을 따로 금지하므로 **법을 흩어서 봐야 합니다.** 하나의 포괄적 차별금지법이 없다는 점을 먼저 알려 주십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["차별적 처우", "직장 내 성희롱"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "취업규칙",
    aliases: ["사규", "인사규정", "사내규정"],
    domain: "근로관계",
    summary:
      "상시 10명 이상 근로자를 사용하는 사용자가 작성·신고해야 하는 근로조건 규범.",
    usages: [
      {
        english: "rules of employment",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제93조" },
        evidence: {
          quote:
            "An employer who regularly employs 10 or more employees shall prepare the rules of employment regarding the following matters and report such rules to the Minister of Employment and Labor.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "Rules of Employment (ROE)",
        register: "본사보고",
        meaning:
          "미국 로펌이 미국 본사에 설명하는 방식. handbook 과 달리 **당국에 제출**하고 **과반수 동의**가 따른다는 점이 한 문단에 드러난다.",
        source: {
          tier: 2,
          outlet: "Littler Mendelson P.C.",
          firm: "미국 노동·고용 전문 로펌",
          title:
            "10 Things Employers Should Know About Korean Labor Law (2025. 3. 25.)",
          url: "https://www.littler.com/news-analysis/asap/10-things-employers-should-know-about-korean-labor-law",
        },
        evidence: {
          quote:
            "Rules of Employment (ROE) must be drafted and submitted to Korean labor authorities. Before filing, employers must follow an adoption process under which a majority of employees must review the ROE, and consent to any significantly detrimental change.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "미국계는 employee handbook, 일본계는 work rules 라고 부릅니다. **미국의 handbook 은 계약이 아니라는 면책을 다는 것이 보통**입니다(다만 그 효과는 주법과 문구에 따라 다릅니다). 한국 취업규칙은 그와 법적 구조가 크게 다릅니다 — 한국 취업규칙은 근로조건을 정하는 규범이고, 불이익하게 바꾸려면 **근로자 과반수의 동의**가 필요합니다(제94조). 본사가 handbook 개정처럼 일방 통보로 처리하려 할 때 이 차이를 먼저 설명해야 합니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로기준법", article: "제94조" }],
    },
    related: ["근로계약", "단체협약", "취업규칙 불이익변경"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "취업규칙 불이익변경",
    aliases: ["불이익변경", "규정 불리하게 변경"],
    domain: "근로관계",
    summary:
      "근로조건을 근로자에게 불리하게 바꾸는 취업규칙 변경. 근로자 과반수의 동의가 필요하다.",
    usages: [
      {
        english: "amending the rules of employment unfavorably to employees",
        register: "법령",
        // 전에는 조문 표제(procedures for preparation and amendment of rules)를
        // 대응어로 싣고 본문 전단만 인용해 두어, 정작 「동의」가 한 글자도 나오지
        // 않았다. 의견 청취와 동의를 같은 것으로 읽으면 변경 자체가 무효가 된다.
        // (서현님 2차 검수가 같은 유형 4건을 잡아 전건을 훑다가 적발, 2026-09-15)
        meaning:
          "근로기준법 제94조제1항 **단서**. 작성·변경 일반에는 의견 청취로 족하지만 **불이익변경에는 동의(consent)가 필요합니다.** 이 갈림이 표제어의 실질입니다.",
        source: { tier: 1, law: "근로기준법", article: "제94조제1항" },
        evidence: {
          quote:
            "An employer shall, with regard to the preparation or alteration of the rules of employment, hear the opinion of a trade union … : Provided, That in case of amending the rules of employment unfavorably to employees, the employer shall obtain their consent thereto.",
          checkedOn: "2026-09-15",
          by: "원문 확인",
        },
      },
      {
        english: "collective consent",
        register: "분쟁",
        meaning:
          "집단적 동의의 정착 역어. 대법원 판결 해설에서 쓰인 표현이다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "The Supreme Court's Decision Acknowledging the Validity of Converting to an Annual Salary System by Amending the Rules of Employment (2022. 3. 11.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=24863",
        },
        evidence: {
          quote:
            "even if collective consent regarding disadvantageous changes to the ROE was obtained, such disadvantageous changes cannot be deemed to take precedence",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "집단적 동의를 받아도 **그보다 유리한 개별 근로계약을 이길 수는 없다**는 것이 이 판결의 요지다. 동의만 받으면 끝난다고 본사에 전하지 않는다.",
      },
    ],
    aiOpinion: {
      body: "본사가 글로벌 정책을 내려보낼 때 가장 자주 걸리는 조항입니다. **의견 청취로는 부족하고 동의여야 합니다.** 동의를 받지 못한 변경은 그 근로자들에게 적용되지 않으므로, 같은 회사 안에 두 벌의 규정이 사는 상태가 생깁니다. 본사에는 consent, not consultation 이라고 못 박아 전하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["취업규칙", "근로자대표"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "근로자대표",
    aliases: ["근로자 과반수 대표", "직원대표"],
    domain: "근로관계",
    summary:
      "과반수 노동조합이 있으면 그 노동조합, 없으면 근로자 과반수를 대표하는 자.",
    usages: [
      {
        english: "representative of employees",
        register: "법령",
        meaning:
          "근로기준법 영문본이 정리해고 협의 주체를 가리킬 때 쓰는 표현.",
        source: { tier: 1, law: "근로기준법", article: "제24조제3항" },
        evidence: {
          quote:
            'Where there is an organized labor union that represents more than half of the employees at the business or workplace, the employer shall inform at least 50 days before the intended date of dismissal and consult in good faith with the labor union (where there is no such organized labor union, this shall refer to a person who represents more than half of the employees; hereinafter referred to as "representative of employees")',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "employee representative",
        register: "본사보고",
        meaning:
          "2022. 12. 11. 시행 시행령 개정으로 **직접·비밀·무기명 투표** 선출이 명문화됐다. 선출 절차가 부실하면 그 서면합의가 무효가 된다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title: "Key HR/Labor Law Amendments for 2023 (2022. 12. 28.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=26432",
        },
        evidence: {
          quote:
            "employee representatives will be elected by said majority of the employees via direct, secret, and anonymous votes",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "외국 로펌 문서의 employee representative 는 **노사협의회 근로자위원**을 가리키는 경우가 있다. 근로기준법상 서면합의 주체를 뜻할 때는 근거법을 함께 밝힌다.",
      },
    ],
    aiOpinion: {
      body: "**유연근로시간제·보상휴가제 등 많은 제도가 이 사람과의 서면합의를 요건으로 합니다.** 다만 **정리해고는 서면합의가 아니라 50일 전 통보와 성실한 협의**입니다(제24조제3항) — 둘을 섞지 마십시오. 본사에는 works council 이나 union rep 과 다르다고 설명해야 합니다 — 상설 기구가 아니라 사안마다 선출되는 대표이고, 선출 절차가 부실하면 그 합의 자체가 무효가 됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["노사협의회", "노동조합", "정리해고"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "단시간근로자",
    aliases: ["파트타임", "시간제"],
    domain: "근로관계",
    summary:
      "같은 사업장의 같은 종류 업무에 종사하는 통상 근로자보다 소정근로시간이 짧은 근로자.",
    usages: [
      {
        english: "part-time employee",
        register: "법령",
        meaning: "근로기준법·기간제법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제2조제1항제9호" },
        evidence: {
          quote:
            'The term "part-time employee" means an employee whose contractual work hours per week are shorter than those of a full-time employee engaged in the same kind of work at the workplace concerned.',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "part-timer 도 **구어가 아닙니다**(사전에 그런 표시가 없고 비즈니스 사전에 정식 수록돼 있습니다). 다만 part-timer 는 사람을, part-time employee 는 신분을 가리켜, **정의 조항과 맞물리는 계약·법률 문서에서는 part-time employee 쪽이 관행**입니다. 본사에 반드시 전할 것은 **4주 평균 주 15시간 미만이면 주휴일·연차휴가 규정이 적용되지 않는다**는 점입니다(제18조제3항). part-time 이라고만 전하면 이 문턱이 전달되지 않아 나중에 미지급 문제로 돌아옵니다.",
      basis: ["법령 조문", "영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "part-timer",
          source: "Merriam-Webster",
          quote: "one that works or is employed on a part-time basis",
          url: "https://www.merriam-webster.com/dictionary/part-timer",
          checkedOn: "2026-09-14",
        },
      ],
      refs: [{ law: "근로기준법", article: "제18조제3항" }],
    },
    related: ["기간제근로자", "소정근로시간", "통상근로자 전환"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "기간제근로자",
    aliases: ["계약직", "비정규직", "유기계약"],
    domain: "근로관계",
    summary: "기간의 정함이 있는 근로계약을 체결한 근로자.",
    usages: [
      {
        english: "fixed-term employee",
        register: "법령",
        meaning: "기간제법 영문 제명이 쓰는 표준 대응어.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제2조",
        },
        evidence: {
          quote:
            'The term "fixed-term employee" means an employee who has signed an employment contract whose period is fixed (hereinafter referred to as "fixed-term employment contract")',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "non-regular worker",
        kind: "비교",
        register: "본사보고",
        meaning:
          "기간제·단시간·파견을 묶어 부르는 **상위 개념**이라 기간제근로자의 대응어가 아닙니다. 고용노동부가 정책 문서에서 쓰는 상위 개념이라, 본사에 인력 구성을 설명할 때 이 말을 쓰면 정부 통계와 맞물린다.",
        source: {
          tier: 3,
          publisher: "고용노동부",
          title: "Labor Standards (Policy)",
          url: "https://www.moel.go.kr/english/policy/laborStandards.do",
        },
        evidence: {
          quote:
            "strengthen protection for non-regular workers (whose number stood at 7.481 million as of August 2019, accounting for 36.4% of all wage workers)",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "개별 근로자의 지위를 가리키는 법령 용어가 아니다. 계약서에는 fixed-term employee 를 쓴다.",
      },
    ],
    aiOpinion: {
      body: "본사는 contract employee 라고 부르지만 이 말은 **도급·위탁과 혼동됩니다.** 독립계약자(independent contractor)와 반드시 구별하십시오 — 기간제근로자는 근로자입니다. 그리고 **법정 예외(제4조제1항 단서)에 해당하지 않는 한, 2년을 초과해 사용하면 기간의 정함이 없는 근로자로 봅니다.** 본사가 계약 갱신을 가볍게 보는 경우가 많아 이 효과를 먼저 알려야 합니다.",
      basis: ["이 항목의 출처", "AI 일반지식(미검증)"],
    },
    related: ["단시간근로자", "무기계약 전환", "차별적 처우"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "무기계약 전환",
    aliases: ["정규직 전환", "무기계약직", "2년 초과"],
    domain: "근로관계",
    summary:
      "2년을 초과해 기간제근로자를 사용하면 기간의 정함이 없는 근로자로 본다.",
    usages: [
      {
        english: "conversion to employees on non-fixed term contract",
        register: "법령",
        meaning: "기간제법 제5조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제5조",
        },
        evidence: {
          quote:
            "If any employer intends to enter into a non-fixed term employment contract, he or she shall endeavor to preferentially hire fixed-term employees engaged in the same or similar kinds of work at the relevant business or workplace.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 permanent conversion 이라 부르며 승진처럼 이해하는 경우가 있는데, **전환은 회사의 결정이 아니라 법률효과**입니다. 법정 예외가 없으면 2년 초과 시 **법률상 그렇게 보는 것**이지, 회사가 승인해서 되는 것이 아닙니다. 반대로 무기계약직이 정규직과 같은 처우를 받는다는 뜻도 아닙니다 — 계약기간만 사라지는 것이라 permanent 와 regular 를 구분해 설명해야 합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["기간제근로자", "통상근로자 전환"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "통상근로자 전환",
    aliases: ["전일제 전환", "풀타임 전환"],
    domain: "근로관계",
    summary:
      "통상 근로자를 채용할 때 같은 업무의 단시간근로자를 우선 전환하도록 노력할 의무.",
    usages: [
      {
        english: "conversion to full-time employees",
        register: "법령",
        meaning: "기간제법 제7조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제7조",
        },
        evidence: {
          quote:
            "If an employer intends to hire a full-time employee, he or she shall endeavor to preferentially hire part-time employees engaged in the same or similar kinds of work at the relevant business or workplace.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**법은 우선 전환을 「노력하여야 한다」고만 정합니다** — 사전 통지가 법정 의무는 아닙니다. 다만 사내 지원·전환 기회를 두는 절차를 마련해 두면 분쟁의 빌미를 줄일 수 있습니다. 본사에는 절차상 한 단계를 넣는 문제로 설명하는 편이 받아들여지기 쉽습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["단시간근로자", "무기계약 전환"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "차별적 처우",
    aliases: ["차별", "차별시정"],
    domain: "근로관계",
    summary:
      "기간제·단시간·파견 근로자를 비교대상 근로자에 비해 합리적 이유 없이 불리하게 대우하는 것.",
    usages: [
      {
        english: "discriminatory treatment",
        register: "법령",
        meaning: "기간제법·파견법 영문본의 표준 대응어.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제8조",
        },
        evidence: {
          quote:
            "No employer shall give discriminatory treatment to any fixed-term employee on the ground of his or her employment status compared with other employees engaged in the same or similar kinds of work on a non-fixed term employment contract at the relevant business or workplace.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "application for correction of discriminatory treatment",
        register: "분쟁",
        meaning: "노동위원회에 내는 차별시정 신청.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제9조",
        },
        evidence: {
          quote:
            "Any fixed-term or part-time employee who has received discriminatory treatment may file a request for its correction with the Labor Relations Commission under Article 1 of the Labor Relations Commission Act.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "irregular workers",
        register: "본사보고",
        meaning:
          "비정규직을 묶어 부르는 로펌 표기. 고용노동부는 non-regular workers 를 쓴다 — **정부와 로펌의 표기가 갈린다.**",
        source: {
          tier: 2,
          outlet: "Littler Mendelson P.C.",
          firm: "미국 노동·고용 전문 로펌",
          title:
            "10 Things Employers Should Know About Korean Labor Law (2025. 3. 25.)",
          url: "https://www.littler.com/news-analysis/asap/10-things-employers-should-know-about-korean-labor-law",
        },
        evidence: {
          quote:
            "Korea is one of a few countries in Asia that also prohibits discrimination between regular workers (full-time permanent workers) and irregular workers (fixed-term employees and dispatched or contingent workers).",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "**미국 연방 EEO 법의 보호 사유에는 고용형태가 없습니다** — 인종·피부색·종교·성·출신국·연령(40세 이상)·장애·유전정보로 닫혀 있습니다. 그래서 본사는 discrimination 을 그 목록의 문제로만 읽습니다. 한국의 차별적 처우는 **고용형태**를 이유로 한 처우 차이를 다루는 별개 제도이고 노동위원회에 시정신청을 할 수 있습니다. 상여금·복리후생처럼 본사가 정규직에게만 주도록 설계한 항목이 그대로 걸립니다. 본사 문서에는 **non-regular workers** 를 쓰십시오 — OECD 의 한국 보고서가 그렇게 씁니다(아래 인용한 irregular workers 는 그 자료의 표기 그대로입니다). 국제 비교 문서라면 ILO 용어인 **non-standard employment** 가 맞습니다. 그리고 한국의 차별적 처우는 discrimination 만으로 두지 말고 **less favourable treatment of non-regular workers** 처럼 풀어 써야 본사가 오해하지 않습니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "protected characteristics",
          source: "U.S. EEOC",
          quote:
            "Under the laws enforced by EEOC, it is illegal to discriminate against someone (applicant or employee) because of that person's race, color, religion, sex (including transgender status, sexual orientation, and pregnancy), national origin, age (40 or older), disability or genetic information.",
          url: "https://www.eeoc.gov/prohibited-employment-policiespractices",
          checkedOn: "2026-09-14",
        },
        {
          term: "non-standard forms of employment",
          source: "ILO",
          quote:
            "\u2018Non-standard forms of employment\u2019 \u2013 also referred to as diverse forms of work \u2013 is an umbrella term for different employment arrangements that deviate from standard employment.",
          url: "https://www.ilo.org/topics-and-sectors/non-standard-forms-employment",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["기간제근로자", "파견근로자", "시정명령"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "시정명령",
    aliases: ["시정지시", "차별시정명령"],
    domain: "근로관계",
    summary: "노동위원회가 차별적 처우를 인정할 때 내리는 명령.",
    usages: [
      {
        english: "corrective order",
        register: "법령",
        meaning: "기간제법 제12조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제12조",
        },
        evidence: {
          quote:
            "Where any Labor Relations Commission determines that the treatment in question is discriminatory after completing an investigation and inquiry under Article 10, it shall issue a corrective order to the employer.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "확정된 시정명령은 **같은 조건의 다른 근로자에게도 효력이 확대**될 수 있습니다(제15조의3). 한 사람의 사건으로 끝나지 않는다는 뜻이라, 본사에 리스크를 설명할 때 반드시 짚어야 합니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [
        {
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제15조의3",
        },
      ],
    },
    related: ["차별적 처우", "구제명령"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "불리한 처우의 금지",
    aliases: ["보복금지", "불이익 조치 금지"],
    domain: "근로관계",
    summary: "차별 시정을 신청했다는 이유로 해고 등 불리한 처우를 하지 못한다.",
    usages: [
      {
        english: "prohibition of unfavorable treatment",
        register: "법령",
        meaning: "기간제법 제16조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "기간제 및 단시간근로자 보호 등에 관한 법률",
          article: "제16조",
        },
        evidence: {
          quote:
            "No employer shall dismiss nor give any other unfavorable treatment to a fixed-term or part-time employee on the ground that he or she has conducted any of the following acts.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "신고·시정신청·증언을 이유로 한 인사조치는 그 자체가 별도의 위반입니다. 이 대목은 미국의 **retaliation** 금지와 성격이 같아 본사가 바로 이해합니다. ⚠️ 다만 미국 retaliation 은 **보호받는 행위(protected activity)를 했기 때문에** 불이익을 준 경우로 요건이 묶여 있어, **고용형태를 이유로 한 불리한 처우까지는 덮지 못합니다** — 그쪽은 less favourable treatment 로 따로 풀어 쓰십시오.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "retaliation",
          source: "U.S. EEOC",
          quote:
            "Asserting these EEO rights is called \u2018protected activity,\u2019 and it can take many forms.",
          url: "https://www.eeoc.gov/retaliation",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["차별적 처우", "직장 내 괴롭힘"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "수습",
    aliases: ["시용", "프로베이션", "수습기간"],
    domain: "근로관계",
    summary: "채용 후 일정 기간 업무 적격성을 평가하는 기간.",
    usages: [
      {
        english: "probation",
        register: "법령",
        meaning:
          "**근로기준법에는 수습을 정의한 조문이 없다.** 다만 최저임금법이 수습 3개월 감액을 정하면서 probation 이라는 말을 쓴다 — 법령 영문본에 나타나는 유일한 축이다.",
        source: { tier: 1, law: "최저임금법", article: "제5조제2항" },
        evidence: {
          quote:
            "The minimum wage different from that set forth in paragraph (1) may be offered to a person for whom three months have not passed since the beginning of his or her probation at work under a one-year or longer labor contract",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "**근로기준법에 수습을 정의한 조문이 없습니다.** 최저임금법 시행령이 수습 3개월 감액을 정하고 있을 뿐입니다. 계약서에는 probationary period, 유럽계 본사 문서에는 trial period 가 쓰입니다. 본사가 가장 크게 오해하는 것은 **수습이라도 해고에 정당한 이유가 필요하다**는 점입니다. 한국에는 임의고용(at-will employment)이 없습니다. at-will employment during probation 을 전제로 움직이면 그대로 부당해고가 됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로계약", "해고"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "사용증명서",
    aliases: ["경력증명서", "재직증명서"],
    domain: "근로관계",
    summary:
      "근로자가 청구하면 사용 기간·업무 종류·지위·임금 등을 적어 즉시 내주어야 하는 증명서.",
    usages: [
      {
        english: "certificate of employment",
        register: "법령",
        meaning: "근로기준법 제39조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제39조" },
        evidence: {
          quote:
            "Whenever an employer is requested by an employee to issue a certificate specifying the term of employment, kind of work performed, positions taken, wages received, and other necessary information, he or she shall immediately prepare and deliver a certificate based on facts, even after the retirement of the employee.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**퇴직 후에도 청구하면 내주어야 하고, 근로자가 요구한 사항만 적어야 합니다.** **법정 사용증명서와 회사가 따로 써 주는 추천서(reference letter)는 다른 문서입니다.** 추천서 자체가 금지되는 것은 아니고, 법정 사용증명서에 근로자가 요구하지 않은 평가·퇴직 사유를 적어 넣는 것이 문제가 됩니다. 둘을 섞지 말고 나누어 쓰십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["금품 청산"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "위약 예정의 금지",
    aliases: ["손해배상 예정", "위약금 약정"],
    domain: "근로관계",
    summary:
      "근로계약 불이행에 대한 위약금이나 손해배상액을 미리 정하는 계약을 금지한다.",
    usages: [
      {
        english:
          "prohibition against predetermination of penalty for breach of contracts",
        register: "법령",
        meaning: "근로기준법 제20조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제20조" },
        evidence: {
          quote:
            "An employer shall not enter into any contract in which a penalty or indemnity for possible damages caused by the breach of a labor contract is predetermined.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사 표준 계약서의 **교육비 반환 조항·사이닝보너스 반환 조항**이 여기서 자주 걸립니다. 금지되는 것은 **근로계약 불이행에 대한 위약금·손해배상액을 미리 정해 두는 것**입니다. 실제 손해를 입증해 청구하는 것은 가능하고, **교육비·사이닝보너스 반환 약정은 성격과 조건에 따라 유효한 경우도 있습니다** — 일률적으로 무효라고 보지 말고 조항별로 검토하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로계약"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "파견근로자",
    aliases: ["파견직", "인력파견", "디스패치"],
    domain: "근로관계",
    summary:
      "파견사업주가 고용하고 사용사업주의 지휘·명령을 받아 사용사업주를 위해 근로하는 사람.",
    usages: [
      {
        english: "temporary agency worker",
        register: "법령",
        meaning: "파견법 영문 제명이 쓰는 표준 대응어.",
        source: {
          tier: 1,
          law: "파견근로자 보호 등에 관한 법률",
          article: "제2조",
        },
        evidence: {
          quote:
            'The term "user company" means a person for whom a temporary agency worker works under a contract on temporary placement of workers',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "dispatched worker",
        register: "본사보고",
        meaning: "고용노동부 영문 자료와 법령 영문본이 함께 쓰는 표현.",
        source: {
          tier: 3,
          publisher: "고용노동부",
          title: "Labor Standards (Policy)",
          url: "https://www.moel.go.kr/english/policy/laborStandards.do",
        },
        evidence: {
          quote:
            "Upon identifying illegal use of dispatched temporary agency workers, measures such as issuing of corrective orders for direct employment are taken.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사는 agency worker, contractor, temp 를 뒤섞어 씁니다. 한국에서 결정적인 것은 **파견 대상 업무가 법으로 한정돼 있다**는 점입니다(제5조). 허용 업무가 아닌데 지휘·명령을 하면 위장도급·불법파견이 되고 **사용사업주에게 직접고용 의무**가 생깁니다(제6조의2). 본사에는 비용 문제가 아니라 고용 의무가 생기는 문제로 설명하십시오.",
      basis: ["법령 조문", "이 항목의 출처", "AI 일반지식(미검증)"],
      refs: [
        { law: "파견근로자 보호 등에 관한 법률", article: "제5조" },
        { law: "파견근로자 보호 등에 관한 법률", article: "제6조의2" },
      ],
    },
    related: ["파견사업주", "사용사업주", "파견기간", "고용의무"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "파견사업주",
    aliases: ["파견업체", "인력회사"],
    domain: "근로관계",
    summary: "근로자파견사업을 하는 자. 파견근로자를 고용한 쪽이다.",
    usages: [
      {
        english: "temporary work agency",
        register: "법령",
        meaning: "파견법 영문본의 표준 대응어.",
        source: {
          tier: 1,
          law: "파견근로자 보호 등에 관한 법률",
          article: "제7조",
        },
        evidence: {
          quote:
            "Any person who intends to engage in temporary work agency business shall obtain permission from the Minister of Employment and Labor, as prescribed by Ordinance of the Ministry of Employment and Labor.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "파견사업은 **고용노동부 허가**가 있어야 합니다. 본사가 지정한 글로벌 인력업체가 한국 허가를 갖고 있는지 먼저 확인하십시오 — 무허가 업체를 쓰면 사용하는 쪽도 처벌 대상이 됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["파견근로자", "사용사업주"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "사용사업주",
    aliases: ["사용업체", "원청"],
    domain: "근로관계",
    summary: "파견계약에 따라 파견근로자를 사용하는 자.",
    usages: [
      {
        english: "user company",
        register: "법령",
        meaning: "파견법 영문본의 표준 대응어.",
        source: {
          tier: 1,
          law: "파견근로자 보호 등에 관한 법률",
          article: "제27조",
        },
        evidence: {
          quote:
            "Where a temporary work agency places a temporary agency worker, it shall notify the user company of the temporary agency worker's name and other matters prescribed by Ordinance of the Ministry of Employment and Labor.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "고용주가 아닌데도 **근로시간·휴게·휴일·산업안전에 대해서는 사용사업주가 사용자로 취급**됩니다(제34조·제35조). 본사에 not our employee 라는 인식이 있으면 그대로 위반으로 이어지므로, 어느 항목이 우리 책임인지 표로 정리해 전달하는 편이 안전합니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [
        { law: "파견근로자 보호 등에 관한 법률", article: "제34조" },
        { law: "파견근로자 보호 등에 관한 법률", article: "제35조" },
      ],
    },
    related: ["파견근로자", "파견사업주", "고용의무"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "파견기간",
    aliases: ["파견 2년"],
    domain: "근로관계",
    summary:
      "근로자파견 기간은 원칙적으로 1년, 연장해도 총 2년을 초과할 수 없다.",
    usages: [
      {
        english: "period of temporary employment",
        register: "법령",
        meaning: "파견법 제6조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "파견근로자 보호 등에 관한 법률",
          article: "제6조",
        },
        evidence: {
          quote:
            "The employment period of a temporary agency worker shall not exceed one year, except in cases falling under Article 5 (2). (2) Notwithstanding paragraph (1), a period of temporary employment may be extended if agreed among the temporary work agency, the user company and the temporary agency worker.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 예산 편의로 파견을 연장하다 2년을 넘기는 사례가 가장 흔합니다. **법정 예외가 없는 일반적인 경우 허용기간을 넘기면 직접고용 의무가 발생**하므로 계약 관리표에 종료일을 못 박아 두십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["파견근로자", "고용의무"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "고용의무",
    aliases: ["직접고용의무", "직고용"],
    domain: "근로관계",
    summary:
      "파견 허용 업무가 아니거나 기간을 초과해 사용한 경우 사용사업주가 파견근로자를 직접 고용해야 하는 의무.",
    usages: [
      {
        english: "obligations of employment",
        register: "법령",
        meaning: "파견법 제6조의2 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "파견근로자 보호 등에 관한 법률",
          article: "제6조의2",
        },
        evidence: {
          quote:
            "Where a user company falls under any of the following cases, the user company shall directly employ a temporary agency worker.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "이 조항이 **위장도급 분쟁의 종착점**입니다. 본사에 설명할 때 벌금이 아니라 **사용사업주에게 직접고용 의무가 발생한다**는 점을 강조하십시오. 고용관계가 저절로 생기는 것은 아니지만, 근로자가 고용 의사표시를 구하면 회사가 그에 응해야 합니다. 인원 계획과 직결되므로 재무 담당자가 있는 자리에서 설명하는 편이 효과적입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["파견근로자", "파견기간", "사용사업주"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "특수형태근로종사자",
    aliases: ["특고", "특수고용"],
    domain: "근로관계",
    summary:
      "계약 형식과 관계없이 주로 하나의 사업에 노무를 제공하고 대가를 받는 사람 중 산업안전보건법이 보호 대상으로 정한 직종.",
    usages: [
      {
        english: "persons in special types of employment",
        register: "법령",
        meaning: "산업안전보건법 제77조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제77조" },
        evidence: {
          quote:
            "With respect to a person meeting all of the following requirements to which the Labor Standards Act or any other Act is not applicable despite the fact that he or she provides labor similar to that of employees and needs protection from occupational accidents…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "근로자가 아니어도 **안전·보건 조치 의무는 생깁니다.** 본사가 independent contractor 라는 이유로 안전 관리 대상에서 빼면 그대로 위반입니다. 프리랜서를 많이 쓰는 조직에서 특히 놓치는 지점입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로자", "안전조치"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  // ───────────────────────── 해고·종료 ─────────────────────────
  {
    term: "해고",
    aliases: ["짤리다", "해고당하다", "면직"],
    domain: "해고·종료",
    summary:
      "사용자가 일방적으로 근로관계를 끝내는 것. 정당한 이유가 있어야 한다.",
    usages: [
      {
        english: "dismissal",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제23조제1항" },
        evidence: {
          quote:
            'An employer shall not, without justifiable cause, dismiss, lay off, suspend, or transfer an employee, reduce his or her wages, or take other punitive measures (hereinafter referred to as "unfair dismissal, etc.") against him/her.',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "at-will employment",
        kind: "비교",
        register: "본사보고",
        meaning:
          "한국에 **임의고용이 없다**는 것을 본사에 알릴 때 쓰는 말. 국내 로펌이 직접 쓴 문장이라 그대로 인용할 수 있다.",
        source: {
          tier: 2,
          outlet: "Yulchon LLC",
          firm: "법무법인 율촌",
          title: "Disciplinary Action and Termination (Labor & Employment)",
          url: "https://www.yulchon.com/en/expertise/practices/labor-and-employment/disciplinary-action-and-termination/1390/page.do",
        },
        evidence: {
          quote:
            "At-will employment is virtually nonexistent and disciplinary action, including disciplinary dismissal, requires 'just cause' and is strictly evaluated for proportionality with an employee's provable offenses",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "이 페이지에는 발행일 표기가 없다. 인용할 때는 접속일(2026. 9. 1.)을 함께 적는다.",
      },
      {
        english: "Korea does not recognize at-will employment",
        kind: "문장",
        register: "본사보고",
        meaning:
          "미국 로펌이 미국 본사 독자를 상대로 쓴 문장.",
        source: {
          tier: 2,
          outlet: "Littler Mendelson P.C.",
          firm: "미국 노동·고용 전문 로펌",
          title:
            "10 Things Employers Should Know About Korean Labor Law (2025. 3. 25.)",
          url: "https://www.littler.com/news-analysis/asap/10-things-employers-should-know-about-korean-labor-law",
        },
        evidence: {
          quote:
            "Korea does not recognize at-will employment. Even when there is an urgent business necessity to dismiss employees, various legal requirements must be satisfied before workers can be dismissed.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사 문서에는 termination, discharge, redundancy, firing 이 섞여 나옵니다. **termination 은 계약을 끝내는 일 전반을 가리키지만, 고용 문맥에서 수식어 없이 쓰면 사용자 주도로 읽힙니다** — 미국 법률용어사전도 「자진퇴사가 아닌 것」으로 정의합니다. 자진퇴사를 가리킬 때에만 voluntary termination 처럼 밝히십시오. discharge 는 **징계성에 한정되지 않습니다** — 미국 노동통계 정의는 인원 감축·합병·폐쇄로 인한 것까지 포함하고, 귀책 여부는 뒤에 붙는 for cause 같은 수식어가 정합니다. redundancy 는 영국·호주에서 경영상 감원을 뜻합니다. firing 은 **구어가 아닙니다**(사전에 그런 표시가 없습니다) — 다만 termination 에는 formal 표시가 붙어 있어, 격식을 갖춘 문서에는 termination·dismissal 이 무난합니다. 가장 먼저 바로잡을 것은 **한국에 임의고용(at-will employment)이 없다**는 점입니다. 본사가 '사유 없이 해고 가능'을 전제하면 그 전제부터 무너뜨려야 합니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "termination",
          source: "Cornell LII (Wex)",
          quote:
            "Termination is an ending of something, for example employment (such as a layoff), that is not a voluntary resignation.",
          url: "https://www.law.cornell.edu/wex/termination",
          checkedOn: "2026-09-14",
        },
        {
          term: "termination",
          source: "Cambridge Dictionary",
          quote: "formal — the act of ending something or the end of something",
          url: "https://dictionary.cambridge.org/dictionary/english/termination",
          checkedOn: "2026-09-14",
        },
        {
          term: "discharge",
          source: "U.S. Bureau of Labor Statistics (JOLTS)",
          quote:
            "Layoffs and Discharges: Involuntary separations initiated by the employer, including: … Discharges resulting from mergers, downsizing, or plant closings",
          url: "https://www.bls.gov/jlt/jltdef.htm",
          checkedOn: "2026-09-14",
        },
        {
          term: "at-will employment",
          source: "Cornell LII (Wex)",
          quote:
            "The employment-at-will doctrine contrasts just cause employment/termination, in which an employer must provide a fair reason for terminating an employee.",
          url: "https://www.law.cornell.edu/wex/employment-at-will_doctrine",
          checkedOn: "2026-09-14",
        },
      ],
    },
    pitfalls: [
      "권고사직을 dismissal 로 적지 않는다. 합의해지는 termination by mutual agreement 이고, 이 구분이 부당해고 다툼에서 결정적이다.",
    ],
    related: ["정리해고", "부당해고", "해고예고", "해고사유의 서면통지"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "정리해고",
    aliases: ["경영상 해고", "구조조정", "감원"],
    domain: "해고·종료",
    summary:
      "긴박한 경영상의 필요에 따른 해고. 해고 회피 노력·공정한 기준·50일 전 협의가 요건이다.",
    usages: [
      {
        english: "dismissal for managerial reasons",
        register: "법령",
        meaning: "근로기준법 제24조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제24조" },
        evidence: {
          quote:
            "Where an employer intends to dismiss an employee for managerial reasons, there must be an urgent managerial necessity.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "notify the employee representative ... 50 days prior",
        kind: "문장",
        register: "분쟁",
        meaning:
          "50일 사전통보·성실협의 의무를 영어로 옮긴 실무 표현. redundancy 로만 적으면 이 요건이 사라진 것처럼 읽힌다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "the employer must notify the employee representative of the dismissal no later than 50 days prior to the dismissal and engage in good-faith discussions with that employee representative.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "영연방계는 redundancy, 미국계는 layoff 또는 RIF(reduction in force)라고 부릅니다. **layoff 는 보통 고용을 끝내는 것이고, 복귀를 전제하려면 temporary layoff 라고 밝힙니다** — 미국 노동통계에는 복귀 예정일이 있는 temporary layoff 가 별도 범주로 있습니다. 한국의 정리해고에는 그 범주가 없어 근로관계가 끝납니다. 본사 일정에 맞춰 앞당기기 쉬운데, **50일 전 근로자대표 통보·협의는 법정 요건**입니다(제24조제3항). 다만 아래 화우 자료는 **이 기간을 지키지 못한 것만으로 해고의 효력이 좌우되지는 않는다**고 적고 있습니다 — 요건을 가볍게 볼 일은 아니지만, 일정이 빠듯하다면 **미리 담당 노무사와 상의**하십시오.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "temporary layoff",
          source: "U.S. Bureau of Labor Statistics (CPS)",
          quote:
            "People on temporary layoff — These are people who have been given a date to return to work or who expect to return to work within 6 months.",
          url: "https://www.bls.gov/cps/definitions.htm",
          checkedOn: "2026-09-14",
        },
      ],
    },
    pitfalls: [
      "해고 후 3년 내 같은 업무로 채용할 때는 우선 재고용 의무가 있다(제25조).",
    ],
    related: ["해고", "우선 재고용", "근로자대표"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "징계해고",
    aliases: ["징계면직", "비위해고"],
    domain: "해고·종료",
    summary:
      "비위행위·중대한 의무위반 등 징계사유를 이유로 하는 해고. 취업규칙·단체협약이 정한 징계절차를 밟아야 한다.",
    usages: [
      {
        english: "disciplinary dismissal",
        register: "분쟁",
        meaning:
          "징계절차를 밟지 않으면 그 자체로 무효가 된다는 점을 드러낸 문장. 본사가 가장 자주 빠뜨리는 대목이다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "disciplinary dismissals are invalid if an employer fails to follow the procedures laid out in its collective agreements, rules of employment, employment contracts or other relevant agreements",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
      },
      {
        english: "dismissal by disciplinary action",
        register: "본사보고",
        meaning:
          "국내 로펌이 실무분야를 나열할 때 쓰는 표기. 징계·정리·저성과 세 갈래를 나란히 적는다.",
        source: {
          tier: 2,
          outlet: "Shin & Kim LLC",
          firm: "법무법인 세종",
          title: "Labor Disputes (실무분야 소개)",
          url: "https://www.shinkim.com/eng/business/view/U1030",
        },
        evidence: {
          quote:
            "Dismissal by disciplinary action, layoff, and dismissal for poor performance",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 가장 자주 무너뜨리는 것이 **절차**입니다. 사유가 아무리 분명해도 취업규칙·단체협약이 정한 징계절차(징계위원회 구성·소명 기회 등)를 건너뛰면 **그것만으로 무효**가 됩니다. ⚠️ 그리고 **영문 자료의 표준 설명은 3분류가 아닙니다** — 화우·Littler 등은 「정당한 이유(justifiable cause)가 있느냐 / 경영상 해고냐」 2분법으로 씁니다. 본사 문서에 우리 분류를 그대로 옮기면 상대가 못 알아들으니, disciplinary dismissal 을 쓰되 **무엇이 정당한 이유인지**를 함께 적으십시오.",
      basis: ["이 항목의 출처", "AI 일반지식(미검증)"],
    },
    pitfalls: [
      "징계절차를 밟았더라도 해고가 양정에 견주어 과중하면 부당해고가 된다. 절차와 양정은 따로 본다.",
    ],
    related: ["해고", "통상해고", "정리해고", "부당해고"],
    madeBy: ["리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-12",
    status: "confirmed",
  },
  {
    term: "통상해고",
    aliases: ["일반해고", "저성과 해고"],
    domain: "해고·종료",
    summary:
      "질병·능력 부족 등 근로자의 일신상 사유에 따른 해고. 징계사유에 의한 것도, 경영상 사유에 의한 것도 아닌 경우를 가리킨다.",
    usages: [
      {
        english: "ordinary dismissal",
        register: "분쟁",
        meaning:
          "저성과자 해고를 **징계가 아닌 성질**로 다툰 사건을 해설하며 쓴 표기. 대법원이 그 해고를 인정한 드문 사례다(2024두44396).",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "Recent Supreme Court Decision Recognizing Ordinary Dismissal of Sales Employee for Poor Performance (2024. 10. 2.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=30421",
        },
        caution:
          "⚠️ **영어권에 정착한 말이 아니다.** 확인된 2등급 자료가 이 한 건뿐이고, 그 글조차 따옴표로 감싸 쓴다. 본사에 설명할 때는 dismissal for poor performance 처럼 풀어 쓰는 편이 통한다.",
        evidence: {
          quote:
            "On behalf of the Company, Kim & Chang proactively argued that in this case, the dismissal actually constituted an “ordinary dismissal” that was implemented after comprehensively considering the employee’s efforts to improve and the likelihood for promising changes in the future.",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
      },
      {
        english: "unlike a disciplinary dismissal",
        kind: "문장",
        register: "분쟁",
        meaning:
          "**징계해고와 갈라지는 지점**을 한 문장에 담았다 — 통상해고는 단체협약의 징계 대상에 들어 있지 않았다는 것이 회사의 논거였다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "Recent Supreme Court Decision Recognizing Ordinary Dismissal of Sales Employee for Poor Performance (2024. 10. 2.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=30421",
        },
        evidence: {
          quote:
            "In addition, our team emphasized that, despite the fact that the Company implemented an ordinary dismissal as a matter of substance (which, unlike a disciplinary dismissal, was not included in the Company’s collective bargaining agreement, “CBA”)",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 **저성과를 이유로 내보내려 할 때** 부딪히는 자리입니다. 미국계는 performance-based termination 을 당연하게 여기지만, 한국에서 이 유형이 인정된 예는 **매우 드뭅니다** — 아래 근거가 된 사건도 「드문 사례」라고 적고 있습니다. 개선 기회를 실제로 주었는지, 그 기록이 남아 있는지가 갈림길입니다. ⚠️ **말을 고르는 데도 주의하십시오.** ordinary dismissal 은 영어권에 정착한 표현이 아니고, 영문 자료의 표준은 「정당한 이유(justifiable cause)가 있느냐 / 경영상 해고냐」 2분법입니다. 본사에는 dismissal for poor performance 로 풀어 쓰는 편이 통합니다.",
      basis: ["이 항목의 출처", "AI 일반지식(미검증)"],
    },
    pitfalls: [
      "취업규칙·단체협약이 그 사유를 징계 대상으로 적어 두었다면, 통상해고라고 이름 붙여도 징계절차를 밟아야 할 수 있다. 규정부터 확인한다.",
      "개선 기회(PIP)를 형식만 돌리면 오히려 '이미 기회를 주었다'는 회사 주장이 약해진다. 목표·기간·지원 내용을 남긴다.",
    ],
    related: ["해고", "징계해고", "정리해고", "부당해고"],
    madeBy: ["리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-12",
    status: "confirmed",
  },
  {
    term: "부당해고",
    aliases: ["부당해고등", "위법해고"],
    domain: "해고·종료",
    summary: "정당한 이유 없는 해고·휴직·정직·전직·감봉 등.",
    usages: [
      {
        english: "unfair dismissal",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제23조제1항" },
        evidence: {
          quote:
            'An employer shall not, without justifiable cause, dismiss, lay off, suspend, or transfer an employee, reduce his or her wages, or take other punitive measures (hereinafter referred to as "unfair dismissal, etc.") against him/her.',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "wrongful termination",
        register: "분쟁",
        meaning:
          "국내 최상위 로펌이 노동위 사건을 설명하며 쓰는 표현. 같은 글에서 unfair dismissal 과 섞어 쓴다 — 한국 실무 영문에서는 두 표현이 혼용된다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "Overview of the Supreme Court's Recent Decision on Receiving a Relief Order from the Labor Relations Commission (2022. 9. 2.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=25659",
        },
        evidence: {
          quote:
            "if an employee has already lost his/her employee status ... at the time of filing a petition for relief (e.g., wrongful termination, disciplinary action, etc.) with the competent labor relations commission",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "영국법의 unfair dismissal(제정법상 청구)과 미국법의 wrongful termination(보통법상 청구) 구별은 한국에 그대로 적용되지 않는다. 국내 로펌 영문 자료는 둘을 혼용한다.",
      },
    ],
    aiOpinion: {
      body: "미국계는 wrongful termination 을 씁니다. 그런데 **미국의 wrongful termination 은 고용계약 위반이나 공서양속 위반(내부고발·법정 권리 행사·위법행위 지시 거부 등), 차별·보복처럼 특정 사유가 있을 때 성립**하는 반면, 한국은 '정당한 이유' 자체가 요건이라 범위가 훨씬 넓습니다. 미국의 기본 원칙이 임의고용이고 그 반대편이 just cause 라는 점을 짚어 주면 차이가 분명해집니다. 이 차이를 설명하지 않으면 본사는 '사유가 없으니 문제없다'고 판단합니다. **구제신청 기간 3개월은 제척기간**이라 본사와 협의하다 넘기는 사례가 많습니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "wrongful termination",
          source: "Cornell LII (Wex)",
          quote:
            "Wrongful termination is a terminated employee's claim that the firing breached an employment contract or public policy.",
          url: "https://www.law.cornell.edu/wex/wrongful_termination",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["해고", "구제신청", "원직복직"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "해고예고",
    aliases: ["30일전통보", "예고수당"],
    domain: "해고·종료",
    summary:
      "해고 30일 전 예고. 하지 않으면 30일분 이상의 통상임금을 지급해야 한다.",
    usages: [
      {
        english: "advance notice of dismissal",
        register: "법령",
        meaning: "근로기준법 제26조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제26조" },
        evidence: {
          quote:
            "When an employer intends to dismiss an employee (including dismissal for management reasons), he or she shall give the employee a notice of dismissal at least 30 days in advance of such dismissal, and, if the employer fails to give such advance notice, he or she shall pay such employee a 30 days' ordinary wage at the least.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "notice period",
        register: "본사보고",
        // 전에는 prior notice 로 적어 두었다. 그 말은 인용문에 없고, 「사전 통지」는
        // 뜻이 너무 넓어 해고예고를 가리키지 못한다(서현님 2차 검수 지적, 2026-09-15).
        meaning:
          "예고기간을 가리키는 로펌 영문 표현. 제26조의 예고 외에는 **별도의 법정 통지기간이 없다**는 점이 함께 나온다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "Other than the foregoing, the Labour Standards Act does not provide a mandatory notice period for terminations.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english: "advance notice of dismissal",
        register: "분쟁",
        meaning:
          "2019년 개정으로 수습·단기근로자 예외가 삭제되고 계속근로 3개월 미만 하나로 정리된 경위를 설명한 표현.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "Key Changes to the Labor and Employment Laws in 2019 (2019. 1.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=19059",
        },
        evidence: {
          quote:
            "Instead, the amendment to the LSA inserted a separate exception to the advance notice requirement for employees whose consecutive service period is less than 3 months (i.e., regardless of whether they are probationary employees or not) (Article 26 of the LSA).",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "계약서에서는 notice period 를 씁니다. 영국 정부 문서는 **payment in lieu of notice** 를 쓰고 약어 **PILON** 까지 공식적으로 쓰며, 호주는 같은 문구를 풀어 씁니다. 본사가 가장 자주 오해하는 지점은 **예고수당을 줬다고 해고가 정당해지지는 않는다**는 것입니다. 정당한 이유는 완전히 별개 요건입니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "payment in lieu of notice (PILON)",
          source: "HMRC Employment Income Manual",
          quote:
            "The phrase payment in lieu of notice (PILON) is used to describe a range of payments made in a variety of legal situations.",
          url: "https://www.gov.uk/hmrc-internal-manuals/employment-income-manual/eim12975",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["해고", "통상임금", "해고사유의 서면통지"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "해고사유의 서면통지",
    aliases: ["해고통지서", "서면통지"],
    domain: "해고·종료",
    summary:
      "해고 사유와 시기를 서면으로 통지해야 하며, 서면통지가 있어야 효력이 있다.",
    usages: [
      {
        english: "written notice of grounds for dismissal",
        register: "법령",
        meaning: "근로기준법 제27조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제27조" },
        evidence: {
          quote:
            "When an employer intends to dismiss an employee, he or she shall notify the employee in writing of grounds and timing for the dismissal. (2) The dismissal of an employee shall become effective only upon a written notice pursuant to paragraph (1).",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "written termination notice",
        register: "계약·규정",
        meaning:
          "실무 문서 이름으로 쓸 때의 표기. 법령어(written notice of grounds for dismissal)와 나란히 두고 쓴다.",
        source: {
          tier: 2,
          outlet: "Legal 500 Country Comparative Guides",
          firm: "Sigong Law P.C. 기고",
          title: "South Korea: Employment and Labour Law",
          url: "https://www.legal500.com/guides/chapter/south-korea-employment-and-labour-law/",
        },
        evidence: {
          quote:
            "An employer must provide a written termination notice indicating the effective termination date and the grounds for termination.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "이 가이드에는 발행일 표기가 없어 접속일 기준으로 인용한다.",
      },
    ],
    aiOpinion: {
      body: "**절차가 아니라 효력 요건입니다.** 구두 통보나 메신저 통보는 해고 자체가 효력이 없습니다. 본사가 exit conversation 으로 끝내려 하면 그 순간 무효인 해고가 되고, 이후 임금 상당액을 소급해 물어야 합니다. 사유를 두루뭉술하게 적는 것도 위험합니다 — 나중에 다른 사유를 추가하지 못합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["해고", "해고예고", "부당해고"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "구제신청",
    aliases: ["부당해고 구제신청", "노동위 신청"],
    domain: "해고·종료",
    summary:
      "부당해고 등을 당한 근로자가 노동위원회에 구제를 신청하는 것. 3개월 이내.",
    usages: [
      {
        english: "request for remedy from unfair dismissal",
        register: "법령",
        meaning: "근로기준법 제28조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제28조" },
        evidence: {
          quote:
            "When an employee is subjected by the employer to any unfair dismissal, etc., he or she may request a remedy therefor from a labor relations commission. (2) A request for remedy under paragraph (1) shall be made within three months from the date of the unfair dismissal, etc.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "petition the labor tribunal",
        register: "본사보고",
        meaning:
          "노동위원회를 labor tribunal 로 옮긴 용례. 영미 인사담당자가 즉시 이해한다.",
        source: {
          tier: 2,
          outlet: "SHRM (미국 인사관리협회)",
          firm: "HHC Employment & Labor Law 기고",
          title:
            "The Wrongful Dismissal Dispute Resolution Process in South Korea (2025. 6. 6.)",
          url: "https://www.shrm.org/topics-tools/employment-law-compliance/wrongful-dismissal-dispute-resolution-process-south-korea",
        },
        evidence: {
          quote:
            "LSA Article 28 establishes a three-month period for employees to petition the labor tribunal for redress.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "한국 노동위원회는 법원이 아니라 준사법적 행정기관이다. tribunal 은 설명적 의역이므로 공식 문서에는 Labor Relations Commission 을 쓴다.",
      },
    ],
    aiOpinion: {
      body: "본사에는 **법원 소송이 아니라 행정기관 절차**라고 설명해야 합니다. 비용이 들지 않고 빠르기 때문에 근로자가 먼저 이 길을 택합니다. 행정기관에 내는 소송 전 신청이라는 점에서 미국의 EEOC charge 와 절차가 닮았습니다. ⚠️ 다만 **EEOC charge 는 인종·성별·연령·장애 등 차별 사유에 걸려야 성립**하는 반면 한국의 구제신청은 해고 사유의 정당성 전반을 다툽니다 — 본사가 「차별 주장이 없으니 신청도 없다」로 읽지 않도록 이 차이를 함께 전하십시오. **3개월은 제척기간이라 협상으로 시간을 끌어도 멈추지 않습니다.**",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "EEOC charge",
          source: "U.S. EEOC",
          quote:
            "All of the laws enforced by EEOC, except for the Equal Pay Act, require you to file a Charge of Discrimination with us before you can file a job discrimination lawsuit against your employer.",
          url: "https://www.eeoc.gov/filing-charge-discrimination",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["부당해고", "구제명령", "재심신청"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "구제명령",
    aliases: ["원직복직 명령", "노동위 명령"],
    domain: "해고·종료",
    summary: "노동위원회가 부당해고를 인정할 때 사용자에게 내리는 명령.",
    usages: [
      {
        english: "order for remedy",
        register: "법령",
        meaning: "근로기준법 제30조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제30조" },
        evidence: {
          quote:
            "If a dismissal, etc. is judged to be unfair in consequence of the examination under Article 29, the Labor Relations Commission shall issue to the employer an order for remedy, and, if the dismissal, etc. is judged not to be unfair, make a decision to reject the request for remedy.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**재심이나 소송을 내도 구제명령의 효력은 정지되지 않습니다**(제32조). 본사는 appeal 을 걸면 집행이 멈춘다고 생각하는데 한국은 반대입니다. 이행하지 않으면 이행강제금이 부과됩니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로기준법", article: "제32조" }],
    },
    related: ["구제신청", "원직복직", "이행강제금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "원직복직",
    aliases: ["복직", "복귀명령"],
    domain: "해고·종료",
    summary: "부당해고로 인정되면 원래의 직위로 되돌리는 것.",
    usages: [
      {
        english: "reinstatement",
        register: "법령",
        meaning:
          "근로기준법 영문본이 구제명령을 규정하면서 쓰는 표현(reinstate ... in his or her former office). 복직을 원하지 않으면 금전보상으로 갈음할 수 있다.",
        source: { tier: 1, law: "근로기준법", article: "제30조제3항" },
        evidence: {
          quote:
            "In issuing an order for remedy (only referring to an order for remedy following dismissal) under paragraph (1), if an employee does not desire to be reinstated in his or her former office, the Labor Relations Commission may, instead of issuing an order to reinstate him/her in his or her former office, order the employer to pay such employee…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**근로자가 원하지 않으면 금전보상 명령으로 갈음할 수 있습니다.** 본사가 자리를 없앴다는 이유로 복직이 불가능하다고 주장하는 경우가 많은데, 그 사정만으로는 면제되지 않습니다. 협상 카드로 쓸 수 있는 것은 금전보상 신청이지 회사의 사정이 아닙니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["구제명령", "부당해고"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "이행강제금",
    aliases: ["강제금", "미이행 부과금"],
    domain: "해고·종료",
    summary:
      "구제명령을 이행하지 않는 사용자에게 노동위원회가 부과하는 금전. 3천만원 이하.",
    usages: [
      {
        english: "charges for compelling compliance",
        register: "법령",
        meaning: "근로기준법 제33조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제33조" },
        evidence: {
          quote:
            "The Labor Relations Commission shall impose charges for compelling compliance not exceeding 30 million won on an employer who fails to comply with an order for remedy (including a retrial decision on the order for remedy; hereafter in this Article the same shall apply) within the deadline for complying with the order after such order is issued.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**벌금(fine)이 아니라 이행을 압박하는 수단**입니다. 이행하면 더 부과되지 않는다는 점이 형벌과 다릅니다. 다만 연 2회씩 최대 2년간 반복 부과되므로 누적액이 커집니다. 본사에는 일회성 비용이 아니라 시계가 돌아가는 비용으로 설명하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["구제명령"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "재심신청",
    aliases: ["중노위 재심", "재심"],
    domain: "해고·종료",
    summary:
      "지방노동위원회 판정에 불복해 중앙노동위원회에 다시 심판을 구하는 것. 10일 이내.",
    usages: [
      {
        english: "application for reexamination",
        register: "법령",
        meaning: "근로기준법 제31조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제31조" },
        evidence: {
          quote:
            "An employer or employee who is dissatisfied with an order for remedy or a decision of rejection made by a local Labor Relations Commission under the Labor Relations Commission Act may apply for reexamination to the Central Labor Relations Commission within ten days from the date when he or she has received a written notice of such order…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**10일은 매우 짧습니다.** 본사 승인 절차를 거치다 넘기는 사고가 실제로 자주 납니다. 판정서를 받는 즉시 본사에 알리고, 결정 권한을 미리 위임받아 두는 편이 안전합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["구제신청", "노동위원회"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "우선 재고용",
    aliases: ["재고용 의무", "우선채용"],
    domain: "해고·종료",
    summary:
      "정리해고 후 3년 이내에 같은 업무로 채용할 때 해고된 근로자를 우선 고용해야 하는 의무.",
    usages: [
      {
        english: "preferential reemployment",
        register: "법령",
        meaning: "근로기준법 제25조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제25조" },
        evidence: {
          quote:
            "When an employer who has dismissed an employee under Article 24 intends to hire, within three years of the date of the dismissal, any employee who will perform the same duty as the dismissed employee did at the time of such dismissal, he or she shall preferentially rehire the employee dismissed under Article 24, if the employee so desires.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "구조조정 뒤 경기가 회복돼 다시 채용할 때 그대로 걸립니다. 본사는 이미 끝난 일로 생각하지만 **3년간 의무가 남아 있습니다.** 채용 공고를 내기 전에 해고자 명단을 먼저 확인하는 절차를 만들어 두십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["정리해고"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "권고사직",
    aliases: ["사직권고", "합의퇴직", "명예퇴직"],
    domain: "해고·종료",
    summary: "회사가 퇴직을 권유하고 근로자가 받아들여 근로관계를 끝내는 것.",
    usages: [
      {
        english: "mutual separation agreement",
        register: "계약·규정",
        meaning:
          "합의로 근로관계를 끝내고 통상 위로금을 지급하는 구조. 권고사직의 실무적 결과물(합의서)을 가리키는 데 가장 가깝다.",
        source: {
          tier: 2,
          outlet: "Legal 500 Country Comparative Guides",
          firm: "Sigong Law P.C.",
          title: "South Korea: Employment and Labour Law",
          url: "https://www.legal500.com/guides/chapter/south-korea-employment-and-labour-law/",
        },
        evidence: {
          quote:
            "In a mutual separation agreement, the employee agrees to resign in exchange for – most commonly – an ex-gratia payment from the employer.",
          checkedOn: "2026-08-30",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "**법령에 권고사직이라는 말 자체가 없습니다.** 근로기준법은 해고만 규정합니다. 실무에서는 voluntary resignation 이라는 직역이 쓰이지만, 이 말만 쓰면 본사는 '근로자가 알아서 그만뒀다'로 읽습니다. 회사가 권유한 사정이 있으면 그 사실을 함께 적어야 합니다. **dismissal 로 적어서도 안 됩니다** — 합의해지를 해고로 기재하면 이후 다툼에서 사용자가 해고를 인정한 근거로 쓰입니다. 그리고 형식만 갖추는 것으로는 부족합니다. **압박 속에 받아낸 사직서는 노동위·법원에서 해고로 재구성될 수 있습니다.**",
      basis: ["이 항목의 출처", "AI 일반지식(미검증)"],
    },
    pitfalls: [
      "희망퇴직(voluntary retirement program)과 다르다. 희망퇴직은 회사가 요건·위로금을 공지하고 근로자가 신청하는 제도이고, 권고사직은 개별 통보형이다.",
      "사직서에 '권고에 의함'을 적을지는 실업급여 수급과 연결된다. 문구를 정하기 전에 노무사와 확인한다.",
    ],
    related: ["해고", "구직급여"],
    madeBy: ["리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-08-30",
    status: "confirmed",
  },
  {
    term: "정년",
    aliases: ["정년퇴직", "리타이어먼트"],
    domain: "해고·종료",
    summary: "사업주가 정하는 퇴직 연령. 60세 이상으로 정해야 한다.",
    usages: [
      {
        english: "retirement age",
        register: "법령",
        meaning: "고령자고용법 제19조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "고용상 연령차별금지 및 고령자고용촉진에 관한 법률",
          article: "제19조",
        },
        evidence: {
          quote:
            "An employer shall set the retirement age of workers at 60 years of age or older. (2) In cases where any employer sets the retirement age of workers at below 60 years of age notwithstanding paragraph (1), the retirement age shall be deemed set at 60.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "mandatory retirement age",
        register: "본사보고",
        // 전에는 minimum mandatory retirement age 전체를 대응어로 실었다. minimum 은
        // 정년의 뜻이 아니라 그 법정 기준의 성격이다(서현님 2차 검수 지적, 2026-09-15).
        meaning:
          "정년의 표준 대응어. 인용문은 이 앞에 minimum 을 붙여 **법정 60세가 상한이 아니라 하한**임을 드러냅니다 — 본사가 60세를 정년 상한으로 오해하는 것을 막을 때 그 수식어를 함께 쓰십시오.",
        source: {
          tier: 2,
          outlet: "Ius Laboris",
          firm: "법무법인 율촌(Yulchon) 집필",
          title:
            "A new minimum wage for 2026 and other key updates from South Korea (2025. 11. 26.)",
          url: "https://iuslaboris.com/insights/a-new-minimum-wage-for-2026-and-other-key-updates-from-south-korea/",
        },
        caution:
          "이 문장은 2025년 11월 기준의 「아직 입법되지 않았다」는 서술이다. 정년 연장 입법이 이뤄지면 그날로 낡는다 — 확인일을 함께 본다.",
        evidence: {
          quote:
            "Although the government has clearly expressed its desire to raise the minimum mandatory retirement age from 60 to 65, a law has not yet been enacted.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english: "retirement age",
        register: "본사보고",
        meaning:
          "정년 도달을 근로관계 자동 종료 사유의 하나로 드는 로펌 영문 표현.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "In South Korea, termination of employment can occur in the following ways: occurrence of grounds for automatic termination (eg, employee reaching retirement age, death of the employee or expiry of the contract period);",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "미국계 본사는 **mandatory retirement age 가 연령차별로 금지된 나라**에서 오기 때문에 이 제도 자체를 낯설어합니다. 한국은 60세 이상으로 정하기만 하면 적법하고, 60세 미만으로 정하면 그 정년 규정이 무효가 되어 정년이 없는 상태가 됩니다. 정년을 연장할 때는 **임금체계 개편을 함께 논의해야 한다**는 조항(제19조의2)도 함께 설명하십시오.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [
        {
          law: "고용상 연령차별금지 및 고령자고용촉진에 관한 법률",
          article: "제19조의2",
        },
      ],
    },
    related: ["연령차별 금지", "퇴직금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "연령차별 금지",
    aliases: ["나이차별", "연령제한"],
    domain: "해고·종료",
    summary:
      "모집·채용, 임금, 배치·전보·승진, 퇴직·해고에서 연령을 이유로 차별하지 못한다.",
    usages: [
      {
        english:
          "prohibition on age discrimination in recruitment or employment",
        register: "법령",
        meaning: "고령자고용법 제4조의4 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "고용상 연령차별금지 및 고령자고용촉진에 관한 법률",
          article: "제4조의4",
        },
        evidence: {
          quote:
            "Employers shall not discriminate against any of their workers or any person who wishes to work for an employer, on the grounds of age without reasonable grounds in the following areas.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**채용 공고의 나이 제한이 가장 흔한 위반**입니다. 본사가 보내온 job posting 템플릿에 'young and dynamic' 같은 표현이 들어 있으면 그대로 문제가 됩니다. 미국계에는 **ADEA** 를 들면 이해가 빠릅니다. ⚠️ 다만 **ADEA 는 40세 이상만 보호**하는 반면 **한국은 연령 하한이 없습니다** — 젊은 직원에 대한 연령차별도 그대로 위반입니다. 이 한 줄을 빼면 본사와 말이 어긋납니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "ADEA",
          source: "U.S. EEOC",
          quote:
            "The ADEA prohibits employment discrimination against persons 40 years of age or older.",
          url: "https://www.eeoc.gov/statutes/age-discrimination-employment-act-1967",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["정년", "균등한 처우"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  // ───────────────────────── 임금 ─────────────────────────
  {
    term: "임금",
    aliases: ["급여", "월급", "보수"],
    domain: "임금",
    summary:
      "사용자가 근로의 대가로 근로자에게 지급하는 일체의 금품. 명칭을 불문한다.",
    usages: [
      {
        english: "wages",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제2조제1항제5호" },
        evidence: {
          quote:
            'The term "wages" means wages, salary and any other kinds of money or valuables, regardless of their titles, which the employer pays to an employee as remuneration for work',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "계약서에는 salary 나 remuneration, 미국계 본사 보고에는 compensation 이 쓰입니다. **salary 는 wages 의 하위 개념이 아니라 대비쌍**입니다 — wages 는 시급·주급으로 지급되는 쪽, salary 는 기간 단위로 정한 고정 급여 쪽을 가리킵니다. 둘을 아우르는 말이 compensation(총보상 — 기본급+상여+복리후생)입니다. **한국에서 '보상'은 재해보상(compensation for accidents)을 뜻하기도 하므로** 문맥을 밝히십시오. 법령상 임금은 **명칭을 불문**하므로, 본사가 allowance·bonus 로 이름 붙였더라도 **근로의 대가로 지급할 의무가 있는 금품**이면 임금이 됩니다. ⚠️ **정기성·일률성은 통상임금의 판단 요소이지 임금 일반의 정의 요건이 아닙니다** — 둘을 섞으면 범위가 어긋납니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "salary",
          source: "Cornell LII (29 CFR 541.602)",
          quote:
            "the employee regularly receives each pay period on a weekly, or less frequent basis, a predetermined amount constituting all or part of the employee's compensation",
          url: "https://www.law.cornell.edu/cfr/text/29/541.602",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["통상임금", "평균임금", "임금 지급"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "통상임금",
    aliases: ["통상시급", "오디너리웨이지"],
    domain: "임금",
    summary:
      "정기적·일률적으로 소정근로 또는 총근로에 대하여 지급하기로 정한 금액. 연장·야간·휴일수당의 기준이다.",
    usages: [
      {
        english: "ordinary wage",
        register: "법령",
        meaning:
          "정의 조문이 쓰는 표준 대응어. 시행령은 '정기적이고 일률적으로'를 **on a regular and flat basis** 로 옮긴다.",
        source: { tier: 1, law: "근로기준법 시행령", article: "제6조제1항" },
        evidence: {
          quote:
            '"ordinary wage" means hourly wage, daily wage, weekly wage, monthly wage, or contract amount to be paid to an employee for a specifically agreed work or entire work on a regular and flat basis.',
          checkedOn: "2026-08-30",
          by: "원문 확인",
        },
      },
      {
        english: "criteria for determining ordinary wages",
        kind: "문장",
        register: "분쟁",
        // 전에는 regular, uniform and fixed 를 대응어로 실었다. 번역어가 아니라
        // 요건의 이름인 데다, **인용문이 바로 그 fixed 를 뺐다고 말하고 있었다**
        // (서현님 2차 검수 지적, 2026-09-15).
        meaning:
          "산입 판단 기준을 가리키는 영문 표현. **2024. 12. 19. 전원합의체가 고정성 요건을 폐기**해 2013년 전원합의체의 3요소(정기성·일률성·고정성) 중 정기성·일률성 2요소만 남았다.",
        source: {
          tier: 2,
          outlet: "Shin & Kim LLC",
          firm: "법무법인 세종(Shin & Kim)",
          title:
            "Supreme Court decision changes criteria for ordinary wages. (2024-12-20)",
          url: "https://www.shinkim.com/eng/media/newsletter/2655",
        },
        evidence: {
          quote:
            'the Supreme Court excluded "payment on fixed basis" or "fixedness" as one of the criteria for determining ordinary wages',
          checkedOn: "2026-08-30",
          by: "원문 확인",
        },
        caution:
          "2024년 12월 이전에 나온 영문 자료는 아직 3요소로 설명한다. 본사에 그대로 전하면 낡은 법리가 된다.",
      },
    ],
    aiOpinion: {
      body: "본사에 기능을 설명할 때 base pay for statutory allowances 처럼 풀어 쓰는 것은 우리 편의상 표현이고 표준 표기가 아닙니다. **법령 영문본이 ordinary wage 를 쓰므로 그대로 쓰고 괄호로 설명을 답니다.** regular wage 로 옮기면 본사가 못 알아듣습니다. 가장 큰 오해는 **기본급(base salary)과 같은 말로 보는 것**입니다 — 정기적·일률적으로 지급되는 고정수당이 함께 들어가므로 base salary 로만 보고하면 연장근로수당이 과소 산정됩니다.",
      basis: ["이 항목의 출처", "AI 일반지식(미검증)"],
    },
    pitfalls: [
      "평균임금과 뭉뚱그리지 않는다. 퇴직금·재해보상은 평균임금, 연장·야간·휴일수당과 해고예고수당은 통상임금이 기준이다.",
    ],
    related: ["평균임금", "연장근로", "해고예고"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "원문 대조 검증"],
    verifiedOn: "2026-08-30",
    status: "confirmed",
  },
  {
    term: "평균임금",
    aliases: ["평임", "3개월 평균"],
    domain: "임금",
    summary:
      "산정 사유 발생일 이전 3개월간 지급된 임금 총액을 그 기간의 총일수로 나눈 금액.",
    usages: [
      {
        english: "average wages",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제2조제1항제6호" },
        evidence: {
          quote:
            'The term "average wages" means the amount calculated by dividing the total amount of wages paid to a relevant employee during three calendar months immediately before the day grounds for calculating his or her average wages occurred by the total number of calendar days during the three months.',
          checkedOn: "2026-09-15",
          by: "원문 확인",
        },
      },
      {
        english: "average wage",
        register: "본사보고",
        meaning: "산정 방법까지 한 문장에 담은 실무 가이드 표현.",
        source: {
          tier: 2,
          outlet: "Legal 500 Country Comparative Guides",
          firm: "Sigong Law P.C. 기고",
          title: "South Korea: Employment and Labour Law",
          url: "https://www.legal500.com/guides/chapter/south-korea-employment-and-labour-law/",
        },
        evidence: {
          quote:
            "The average wage is calculated by dividing the total wages paid to the employee during the last 3 months of service by the number of days in the three months.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english: "average wages",
        register: "본사보고",
        meaning:
          "퇴직금 산정 기준으로서의 평균임금. 본사에 퇴직금 구조를 설명할 때 쓰는 문장이다.",
        source: {
          tier: 2,
          outlet: "Littler Mendelson P.C.",
          firm: "미국 노동·고용 전문 로펌",
          title:
            "10 Things Employers Should Know About Korean Labor Law (2025. 3. 25.)",
          url: "https://www.littler.com/news-analysis/asap/10-things-employers-should-know-about-korean-labor-law",
        },
        evidence: {
          quote:
            "Thus, all employers are expected to establish a retirement allowance system for employees that amounts to equivalent average wages earned for 30 days for each year of continuous service.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "**실제로 지급받는 임금의 종류가 아니라 급여 산출의 기준 단위**입니다. 본사에 3-month average wage 라고만 전하면 무엇에 쓰는 숫자인지 전달되지 않습니다. 퇴직금·휴업수당·재해보상·감급 제재의 기준이라고 함께 설명하십시오. 평균임금이 통상임금보다 낮으면 통상임금을 평균임금으로 봅니다(제2조제2항).",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로기준법", article: "제2조제2항" }],
    },
    related: ["통상임금", "퇴직금", "휴업수당"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "최저임금",
    aliases: ["최저시급", "미니멈웨이지"],
    domain: "임금",
    summary: "국가가 정해 사용자에게 강제하는 임금의 최저 수준.",
    usages: [
      {
        english: "minimum wage",
        register: "법령",
        meaning: "최저임금법 영문 제명이 쓰는 표준 대응어.",
        source: { tier: 1, law: "최저임금법", article: "제5조" },
        evidence: {
          quote:
            "The minimum wage (referring to the smallest amount of wage set out in law; hereinafter the same shall apply) shall be expressed in hourly, daily, weekly, or monthly terms.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "minimum wage",
        register: "본사보고",
        meaning:
          "최저임금 미달 약정은 그 부분만 무효가 되고 최저임금액으로 대체된다는 효력을 담은 문장.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "…employment contracts that stipulate wages below the minimum wage level are invalidated as to such stipulation and, by operation of law, the wages under those employment contracts are presumed to be minimum wages.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "매년 8월 5일까지 고시되어 다음 해 1월 1일부터 적용됩니다. 본사 예산 주기와 어긋나므로 **연말 급여 검토 때 반드시 재확인**하십시오. 고용노동부 영문 홈페이지의 금액은 갱신이 느려 옛 수치가 남아 있으니 금액은 고시로 확인해야 합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["최저임금의 효력", "임금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "최저임금의 효력",
    aliases: ["최저임금 미달", "최저임금 위반"],
    domain: "임금",
    summary:
      "최저임금에 미달하는 임금을 정한 근로계약은 그 부분이 무효가 되고 최저임금액이 적용된다.",
    usages: [
      {
        english: "effect of minimum wage",
        register: "법령",
        meaning: "최저임금법 제6조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "최저임금법", article: "제6조" },
        evidence: {
          quote:
            "Each employer shall pay employees covered by the minimum wage, at least the minimum wage amount or more. (2) No employer may lower the previous wage level on the ground of the minimum wage determined under this Act.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 총액 기준으로 맞췄다고 생각해도 **산입 범위에서 빠지는 수당이 있으면 위반**이 됩니다. **2024년부터 매월 지급하는 상여금과 통화로 지급하는 식비·숙박비·교통비 등은 원칙적으로 전액 산입**됩니다(해마다 비율이 달라지던 단계적 산입 제도는 끝났습니다). 현물로 주는 복리후생비 등 제외 항목은 따로 확인하고, 연봉제 직원도 시급 환산으로 한 번 검산해 두십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["최저임금", "임금체불"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "소정근로시간",
    aliases: ["약정근로시간", "소정시간"],
    domain: "임금",
    summary: "법정 근로시간의 범위에서 근로자와 사용자가 정한 근로시간.",
    usages: [
      {
        english: "contractual work hours",
        register: "법령",
        meaning: "근로기준법 영문본의 표준 대응어.",
        source: { tier: 1, law: "근로기준법", article: "제2조제1항제8호" },
        evidence: {
          quote:
            'The term "contractual work hours" means work hours on which employees and their employer have made an agreement within the limit of work hours under Article 50 or the main clause of Article 69 of this Act',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에 설명할 때 scheduled working hours 처럼 풀어 쓰는 것은 우리 편의상 표현입니다. **실제 근로시간(actual hours worked)과 다릅니다.** 최저임금·통상임금을 환산할 때 중요한 기준입니다. 다만 월급제의 산정 분모는 **법정 산정기준시간수 등 별도 계산규칙**으로 정해지므로, 소정근로시간이 늘 그대로 분모가 되는 것은 아닙니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로시간", "통상임금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "임금 지급",
    aliases: ["임금지급 4원칙", "직접불 전액불"],
    domain: "임금",
    summary: "통화로, 직접, 전액을, 매월 1회 이상 일정한 날에 지급해야 한다.",
    usages: [
      {
        english: "payment of wages",
        register: "법령",
        meaning: "근로기준법 제43조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제43조" },
        evidence: {
          quote:
            "Payment of wages shall be directly made in full to employees in currency: Provided, That if otherwise prescribed by statutes or regulations or by a collective agreement, wages may partially be deducted or may be paid by means other than currency.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 스톡·바우처·현물로 일부를 대체하려 할 때 걸립니다. **법령이나 단체협약에 근거가 없으면 통화 이외의 지급도, 공제도 안 됩니다.** 미국계 본사의 payroll deduction 관행을 그대로 들여오면 전액불 위반이 되기 쉽습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금", "임금체불", "임금대장"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "임금대장",
    aliases: ["급여대장"],
    domain: "임금",
    summary: "사업장별로 작성해 두어야 하는 임금 기록.",
    usages: [
      {
        english: "wage ledger",
        register: "법령",
        meaning:
          "근로기준법 제48조제1항이 쓰는 말. **작성·보존 의무**이며, 근로자에게 주는 임금명세서와는 다른 문서다.",
        source: { tier: 1, law: "근로기준법", article: "제48조제1항" },
        evidence: {
          quote:
            "An employer shall prepare a wage ledger for each workplace and state therein the matters serving as a basis for calculating wages and family allowances, the amount of wages, and other matters prescribed by Presidential Decree, at each time of paying wages.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사 payroll 시스템이 만드는 기록으로 갈음하려는 경우가 많은데, **대장에 적어야 할 항목이 법으로 정해져 있습니다.** 근로자에게 **교부**해야 하는 것은 대장이 아니라 임금명세서입니다 — 두 문서를 섞지 마십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금명세서", "임금 지급"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "임금명세서",
    aliases: ["급여명세서", "급여내역서"],
    domain: "임금",
    summary: "임금을 지급할 때 근로자에게 서면으로 교부해야 하는 내역서.",
    usages: [
      {
        english: "written wage statement",
        register: "법령",
        meaning:
          "근로기준법 제48조제2항이 쓰는 말. **교부 의무**이며 2021년에 신설됐다.",
        source: { tier: 1, law: "근로기준법", article: "제48조제2항" },
        evidence: {
          quote:
            "Article 48 (Wage Ledger and Written Wage Statement) (2) An employer who intends to pay wages shall issue a written wage statement (including an electronic document defined in subparagraph 1 of Article 2 of the Framework Act on Electronic Documents and Transactions) that sets out matters prescribed by Presidential Decree, such as wage items and methods of calculating wages, and the details of partial deduction of wages under the proviso of Article 43 (1).",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
      },
      {
        english: "payslip",
        kind: "비교",
        register: "본사보고",
        meaning:
          "본사가 쓰는 말. 뜻은 통하지만 **한국의 임금명세서는 항목별 금액과 계산 방법까지 적어야 해** 총액만 보여 주는 글로벌 payslip 양식으로는 부족하다.",
        source: { tier: 1, law: "근로기준법", article: "제48조제2항" },
        caution:
          "출처는 법령이지만 payslip 이라는 낱말 자체는 법령에 없다. 본사에 설명할 때 쓰는 말로만 쓰고, 문서 이름으로는 written wage statement 를 적는다.",
        evidence: {
          quote:
            "Article 48 (Wage Ledger and Written Wage Statement) (2) An employer who intends to pay wages shall issue a written wage statement (including an electronic document defined in subparagraph 1 of Article 2 of the Framework Act on Electronic Documents and Transactions) that sets out matters prescribed by Presidential Decree, such as wage items and methods of calculating wages, and the details of partial deduction of wages under the proviso of Article 43 (1).",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "**교부 의무는 2021년부터입니다.** 항목별 금액과 **계산 방법**을 적어야 하므로, 본사 글로벌 payslip 양식이 총액만 보여 준다면 그대로는 부족합니다. 특히 **연장·야간·휴일근로 수당의 계산식이 드러나야** 합니다. 전자문서로 주어도 됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금대장", "임금 지급", "연장근로"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "금품 청산",
    aliases: ["14일 정산", "퇴직 정산"],
    domain: "임금",
    summary:
      "근로자가 사망하거나 퇴직하면 14일 이내에 임금·보상금 등 모든 금품을 지급해야 한다.",
    usages: [
      {
        english: "settlement of payments",
        register: "법령",
        meaning: "근로기준법 제36조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제36조" },
        evidence: {
          quote:
            "When an employee dies or retires, the employer shall pay the wages, compensations, and other money or valuables within 14 days after the cause for such payment occurred: Provided, That the period may, under special circumstances, be extended by mutual agreement between the parties concerned.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 글로벌 payroll 주기가 월말이라 **다음 급여일에 맞춰 정산하려다 위반**하는 사고가 잦습니다. 14일은 합의로 연장할 수 있지만 **합의가 있어야** 합니다. 퇴직금·미사용 연차수당까지 포함되므로 계산에 시간이 걸린다면 미리 합의 문구를 받아 두십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금체불", "퇴직금", "연차유급휴가"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "임금체불",
    aliases: ["체불", "체불임금", "미지급"],
    domain: "임금",
    summary: "임금·퇴직금 등을 지급기일에 지급하지 않는 것.",
    usages: [
      {
        english: "delayed payment of wages",
        register: "법령",
        meaning: "근로기준법이 지연이자 조문에서 쓰는 표현.",
        source: { tier: 1, law: "근로기준법", article: "제37조" },
        evidence: {
          quote:
            "When an employer fails to pay all or part of the wages falling under any of the following subparagraphs by the dates specified in each subparagraph, he or she shall be liable to pay interest for the number of days delayed starting from the day immediately following the due date at an interest rate prescribed by Presidential Decree…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "unpaid wages",
        register: "본사보고",
        meaning:
          "본사가 바로 이해하는 말. 이 문장은 **그 말을 쓰면서 형사처벌까지 이어진다는 점**을 한 대목에 담고 있다.",
        source: {
          tier: 2,
          outlet: "Littler Mendelson P.C.",
          firm: "미국 노동·고용 전문 로펌",
          title:
            "10 Things Employers Should Know About Korean Labor Law (2025. 3. 25.)",
          url: "https://www.littler.com/news-analysis/asap/10-things-employers-should-know-about-korean-labor-law",
        },
        evidence: {
          quote:
            "This statutory severance must be paid within 14 days of the employee’s departure from the company along with other unpaid wages. Failure to comply with these conditions may result in imprisonment of up to three years and/or a fine of up to KRW 30 million.",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 unpaid wages 라고 하면 바로 이해하지만, 그 말로는 **형사처벌 대상**이라는 무게가 전달되지 않습니다. 단순 연체(late payment)가 아니라 **형사책임이 문제될 수 있는 사안**이라고 설명하십시오(책임 주체는 사안에 따라 사용자 범위에서 판단합니다). 명단공개·신용정보 제공은 자동으로 따라오는 것이 아니라 **각각의 법정 요건을 채울 때** 별도로 적용됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["금품 청산", "지연이자", "체불사업주 명단공개"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "지연이자",
    aliases: ["지연손해금", "체불이자"],
    domain: "임금",
    summary:
      "퇴직 후 14일이 지나도록 지급하지 않은 임금·퇴직금에 붙는 연 20% 수준의 이자.",
    usages: [
      {
        english: "interest for delayed payment of wages",
        register: "법령",
        meaning: "근로기준법 제37조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제37조" },
        evidence: {
          quote:
            "When an employer fails to pay all or part of the wages falling under any of the following subparagraphs by the dates specified in each subparagraph, he or she shall be liable to pay interest for the number of days delayed starting from the day immediately following the due date at an interest rate prescribed by Presidential Decree…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사는 late payment interest 를 상거래 연체이자 수준으로 생각합니다. **법정 상한이 연 40%이고 시행령이 정하는 이율이 붙습니다.** 금액이 크면 이자만으로도 무시할 수 없어, 다툼이 있어도 다툼 없는 부분은 먼저 지급하는 편이 낫습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금체불", "금품 청산"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "임금채권 우선변제",
    aliases: ["최우선변제", "임금 우선변제"],
    domain: "임금",
    summary:
      "임금·재해보상금 등은 다른 채권보다 우선 변제되며, 최종 3개월분 임금 등은 담보물권보다도 우선한다.",
    usages: [
      {
        english: "preferential payment for claims for wages",
        register: "법령",
        meaning: "근로기준법 제38조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제38조" },
        evidence: {
          quote:
            "Wages, accident compensations, and other claims arising from labor relations shall be paid in preference to taxes, public charges, or other claims except for claims secured by pledges, mortgages, or the security rights under the Act on Security over Movable Property and Claims on the whole property of the employer concerned…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 한국 법인을 청산하거나 매각할 때 실사에서 반드시 나옵니다. **최종 3개월분 임금과 재해보상금은 저당권보다도 앞섭니다.** 인수 측 실사 담당자에게 super-priority 라고 설명하면 이해가 빠릅니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금체불", "퇴직급여제도"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "임금의 시효",
    aliases: ["임금 소멸시효", "3년"],
    domain: "임금",
    summary: "임금채권은 3년간 행사하지 않으면 시효로 소멸한다.",
    usages: [
      {
        english: "prescription of wages",
        register: "법령",
        meaning: "근로기준법 제49조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제49조" },
        evidence: {
          quote:
            "A claim for wages under this Act shall be extinguished by prescription, unless exercised within three years.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사는 statute of limitations 로 이해합니다. **3년은 짧아 보이지만 매월 임금마다 따로 진행**되므로, 수당 산정 오류가 있으면 3년치가 한꺼번에 청구됩니다. 통상임금 산입 오류가 발견되면 규모가 큰 이유가 이것입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금체불", "통상임금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "체불사업주 명단공개",
    aliases: ["명단공개", "체불 공개"],
    domain: "임금",
    summary:
      "3년 내 2회 이상 유죄가 확정되고 1년간 체불액이 3천만원 이상이면 고용노동부가 인적사항을 공개할 수 있다.",
    usages: [
      {
        english: "disclosure of names of business owners in arrears",
        register: "법령",
        meaning: "근로기준법 제43조의2 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제43조의2" },
        evidence: {
          quote:
            "If a business owner (including the representative in the case of a corporation; hereinafter referred to as “business owners in arrears”) has been convicted twice of failing to pay wages, compensations, allowances, retirement benefits under Article 12 (1) of the Act on the Guarantee of Employee's Retirement Benefits, or any other money…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 **평판 리스크**로 설명해야 움직입니다. 다만 **명단공개(제43조의2)와 신용정보 제공(제43조의3)은 별개 제도이고 요건도 다릅니다** — 한 절차처럼 묶어 설명하지 마십시오. 벌금보다 이쪽이 실질적 압박인 것은 맞습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임금체불"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "휴업수당",
    aliases: ["휴업급여(사용자)", "셧다운 수당"],
    domain: "임금",
    summary:
      "사용자의 귀책사유로 휴업하는 경우 평균임금의 70% 이상을 지급해야 한다.",
    usages: [
      {
        english: "shutdown allowances",
        register: "법령",
        meaning: "근로기준법 제46조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제46조" },
        evidence: {
          quote:
            "When a business shuts down due to a cause attributable to the employer, he or she shall pay the employees concerned allowances of not less than 70/100 of their average wages during the period of shutdown.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "business suspension allowance",
        register: "본사보고",
        meaning:
          "로펌 실무 문서에서 우세한 표기. 법조문 표제는 shutdown allowances 다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title: "COVID-19: Key HR Issues (2020. 3. 5.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=21161",
        },
        evidence: {
          quote:
            "the employer shall pay each employee at least 70% of his/her average wage as a business suspension allowance during the business suspension period",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          '같은 글이 **연차를 임의로 소진시킬 수 없다**고 함께 밝힌다 — "an employer cannot unilaterally exhaust the annual paid leave of employees during the business suspension period against their will". 무급 furlough 로도, 연차 소진으로도 대체할 수 없다.',
      },
    ],
    aiOpinion: {
      body: "본사가 생산 중단·발주 감소로 조업을 세울 때 **무급 furlough 로 처리하려다 걸립니다.** 사용자의 귀책사유 범위가 넓게 인정되므로 경영상 사정도 대개 여기 들어갑니다. 다만 **부득이한 사유로 사업을 계속할 수 없어 노동위원회 승인을 받으면 기준에 못 미치는 금액도 가능합니다**(제46조제2항) — 무급이 절대 불가한 것은 아닙니다. 산재보험의 휴업급여(temporary layoff benefits)와 이름이 비슷하지만 전혀 다른 제도라는 점도 함께 밝히십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["평균임금", "휴업급여"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "퇴직금",
    aliases: ["퇴직급여", "퇴직 일시금"],
    domain: "임금",
    summary:
      "계속근로 1년에 대하여 30일분 이상의 평균임금을 퇴직 시 지급하는 제도.",
    usages: [
      {
        english: "retirement allowance",
        register: "법령",
        meaning: "근로기준법이 퇴직금제도를 가리킬 때 쓰는 표현.",
        source: { tier: 1, law: "근로기준법", article: "제34조" },
        evidence: {
          quote:
            "The retirement allowance system under which an employer pays retiring employees retirement allowances shall comply with the Act on the Guarantee of Employees' Retirement Benefits.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "retirement benefits",
        register: "법령",
        meaning:
          "근로자퇴직급여 보장법 영문 제명이 쓰는 상위 개념. 퇴직금과 퇴직연금을 포괄한다.",
        source: { tier: 1, law: "근로자퇴직급여 보장법", article: "법 제명" },
        evidence: {
          quote: "ACT ON THE GUARANTEE OF EMPLOYEES' RETIREMENT BENEFITS",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "severance pay",
        register: "본사보고",
        meaning:
          "본사가 가장 흔히 쓰는 말. ⚠️ **Littler 는 이 말 대신 statutory severance 를 쓴다** — 그래서 이 말을 실제로 쓰는 화우(Chambers) 자료로 근거를 옮겼다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "To describe employers’ obligation to provide severance pay in more detail, Article 8(1) of the Act on the Guarantee of Workers’ Retirement Benefits (the “Retirement Benefits Act”) requires employers to set up a system that enables the employers to pay a retiring worker severance pay in the pro-rated amount equivalent to the average wages earned in 30 days for each year of the resigning employee’s continuous service.",
          checkedOn: "2026-09-12",
          by: "원문 확인",
        },
        caution:
          "미국 민간부문에서는 severance 가 법정 의무가 아닌 경우가 많다(영국에는 법정 redundancy pay 가 있으므로 「영미권」으로 묶지 말 것). 이 문장을 함께 붙이지 않으면 본사는 '해고가 아니면 안 줘도 되는 돈'으로 읽는다.",
      },
    ],
    aiOpinion: {
      body: "본사가 가장 흔히 쓰는 말은 severance pay 입니다. 그런데 **미국 연방 임금법(FLSA)은 퇴직금 지급을 요구하지 않고 노사 합의사항으로 둡니다**(주법·대량해고 통지법은 별개입니다). 반면 **한국 퇴직금은 퇴직 사유를 불문한 법정 급여**입니다. ⚠️ 「영미권」으로 묶지 마십시오 — **영국에는 법정 redundancy pay 가 있습니다.** 다만 그것은 **정리해고 전용**이라, 퇴직 사유를 불문하는 한국 퇴직금과도 다릅니다. 이 차이를 설명하지 않으면 본사는 '해고가 아니면 안 줘도 되는 돈'으로 오해합니다. 자발적 사직도, 정년퇴직도 지급 대상입니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "severance pay",
          source: "U.S. Department of Labor",
          quote:
            "There is no requirement in the Fair Labor Standards Act (FLSA) for severance pay.",
          url: "https://www.dol.gov/general/topic/wages/severancepay",
          checkedOn: "2026-09-14",
        },
        {
          term: "statutory redundancy pay",
          source: "GOV.UK",
          quote:
            "You'll normally be entitled to statutory redundancy pay if you're an employee and you've been working for your current employer for 2 years or more.",
          url: "https://www.gov.uk/redundancy-your-rights/redundancy-pay",
          checkedOn: "2026-09-14",
        },
      ],
    },
    pitfalls: [
      "1년 미만 근속이면 발생하지 않는다. 다만 4주 평균 주 15시간 이상 요건도 함께 본다.",
    ],
    related: ["평균임금", "퇴직급여제도", "금품 청산"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "퇴직급여제도",
    aliases: ["퇴직연금제도", "퇴직급여 설정"],
    domain: "임금",
    summary:
      "사용자가 퇴직금제도 또는 퇴직연금제도 중 하나 이상을 설정해야 하는 의무.",
    usages: [
      {
        english: "retirement benefit scheme",
        register: "법령",
        meaning: "퇴직급여법 제4조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로자퇴직급여 보장법", article: "제4조" },
        evidence: {
          quote:
            "Each employer shall establish at least one retirement benefit scheme in order to pay benefits to retiring employees: Provided, That this shall not apply to employees whose continuous service period is less than one year, nor employees whose average weekly working hours over a four-week period is less than 15 hours.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "retirement benefits",
        register: "본사보고",
        meaning:
          "계약서·취업규칙에 없어도 퇴직 시 지급해야 하는 법정 급여라는 성격을 드러낸 문장.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "To provide these payments or pensions, an employer is required to operate a retirement benefit scheme in accordance with the Retirement Benefits Act.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english:
          "retirement pension schemes (Defined Benefit or Defined Contribution)",
        register: "계약·규정",
        meaning:
          "DB·DC·IRP 세 낱말이 한 문장에 모두 나오는 유일한 2등급 문장. 본사 pension plan 과 대조할 때 쓴다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "Key Details on the Amendments to the Act on the Guarantee of Employees’ Retirement Benefits (2022. 5. 3.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=24984",
        },
        evidence: {
          quote:
            "Previously, only retirement benefits for employees who had subscribed to retirement pension schemes (Defined Benefit or Defined Contribution) were legally required to be paid into their IRP accounts.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "**설정하지 않으면 퇴직금제도를 설정한 것으로 봅니다**(제11조). 즉 아무것도 안 하는 선택지는 없습니다. 본사에 pension plan 이라고 하면 선택 가능한 복리후생으로 오해하므로, statutory 라는 말을 반드시 붙이십시오.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로자퇴직급여 보장법", article: "제11조" }],
    },
    related: ["퇴직금", "확정급여형 퇴직연금", "확정기여형 퇴직연금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "확정급여형 퇴직연금",
    aliases: ["DB형", "확정급여형", "DB"],
    domain: "임금",
    summary:
      "근로자가 받을 급여 수준이 사전에 정해지고 적립·운용 책임을 사용자가 지는 퇴직연금.",
    usages: [
      {
        english: "defined benefit plan",
        register: "법령",
        meaning: "퇴직급여법 제13조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로자퇴직급여 보장법", article: "제13조" },
        evidence: {
          quote:
            "Any employer who intends to establish a defined benefit plan shall prepare the rules for defined benefit plan stipulating the following matters with the consent of, or after seeking opinions from, the representatives of employees under Article 4 (3) or Article 5.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사 재무팀은 DB/DC 라는 말을 이미 알고 있어 소통이 쉽습니다. 다만 **한국의 DB 는 사용자가 최소 적립비율을 맞춰야 하고 미달하면 시정 대상**이라는 점이 다릅니다. 본사 회계기준상 부채 인식과도 연결되므로 재무팀과 함께 설명하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["퇴직급여제도", "확정기여형 퇴직연금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "확정기여형 퇴직연금",
    aliases: ["DC형", "확정기여형", "DC"],
    domain: "임금",
    summary:
      "사용자가 매년 일정액을 납입하고 운용 성과에 따라 급여가 달라지는 퇴직연금.",
    usages: [
      {
        english: "defined contribution plan",
        register: "법령",
        meaning: "퇴직급여법 제19조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로자퇴직급여 보장법", article: "제19조" },
        evidence: {
          quote:
            "Any employer who intends to establish a defined contribution plan shall prepare the rules for defined contribution plan containing the following matters after obtaining the consent of, or seeking opinions from, the representatives of employees pursuant to Article 4 (3) or Article 5.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**연간 임금총액의 1/12 이상을 납입**해야 합니다. 본사가 매칭 기여(matching contribution) 개념으로 이해하면 어긋납니다 — 근로자 부담이 전제가 아니라 사용자 의무 납입입니다. 납입을 미루면 지연이자가 붙습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["퇴직급여제도", "확정급여형 퇴직연금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "개인형 퇴직연금",
    aliases: ["IRP", "개인형 IRP"],
    domain: "임금",
    summary:
      "퇴직급여를 이전받거나 추가 납입해 적립·운용하는 근로자 개인 명의의 퇴직연금.",
    usages: [
      {
        english: "individual retirement pension plan",
        register: "법령",
        meaning: "퇴직급여법 제24조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로자퇴직급여 보장법", article: "제24조" },
        evidence: {
          quote:
            "Any retirement pension trustee may operate an individual retirement pension plan. (2) A person falling under any of the following subparagraphs may establish an individual retirement pension plan.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**퇴직급여는 원칙적으로 IRP 계정으로 이전해 지급**합니다. 본사가 현금 일시 지급을 전제로 계산하면 절차가 어긋납니다. 외국인 근로자가 출국하는 경우의 처리는 별도로 확인이 필요합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["퇴직금", "퇴직급여제도"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "수급권의 보호",
    aliases: ["퇴직급여 압류금지", "수급권 보호"],
    domain: "임금",
    summary:
      "퇴직연금제도의 급여를 받을 권리는 양도·압류하거나 담보로 제공할 수 없다.",
    usages: [
      {
        english: "protection of entitlement to benefits",
        register: "법령",
        meaning: "퇴직급여법 제7조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로자퇴직급여 보장법", article: "제7조" },
        evidence: {
          quote:
            "An entitlement to benefits under a retirement pension plan (including a SME retirement pension fund plan; hereafter the same shall apply in this Article) shall neither be transferred nor be offered as collateral to another person.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "이 조문이 직접 막는 것은 **퇴직연금제도 급여수급권의 양도·압류·담보 제공**입니다. 본사가 대여금·손해배상금을 퇴직급여에서 상계하려는 경우는 **임금 전액지급 원칙 등 별도 법리**로 따로 따져야 합니다 — 두 문제를 섞지 마십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["퇴직급여제도", "임금 지급"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  // ───────────────────── 근로시간·휴가 ─────────────────────
  {
    term: "근로시간",
    aliases: ["법정근로시간", "주52시간"],
    domain: "근로시간·휴가",
    summary: "1주 40시간, 1일 8시간을 초과할 수 없는 법정 근로시간.",
    usages: [
      {
        english: "work hours",
        register: "법령",
        meaning: "근로기준법 제50조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제50조" },
        evidence: {
          quote:
            "Work hours shall not exceed 40 hours a week, excluding hours of recess. (2) Work hours shall not exceed eight hours a day, excluding hours of recess.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "working hours",
        register: "본사보고",
        meaning:
          "법령 공식 영문본은 work hours, 로펌 영문자료는 일관되게 working hours 를 쓴다. 본사 문서에는 이쪽이 표준이다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "Article 50(1) and (2) of the Labour Standards Act provide that working hours may not exceed eight hours per day and 40 hours per week.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사는 working hours 를 씁니다. 뜻은 통합니다. 중요한 것은 **주 52시간이 법정 40시간 + 연장 12시간의 합**이라는 구조입니다. 본사가 '52시간까지는 정상 근무'로 이해하면 연장근로수당 지급을 빠뜨립니다. 미국 FLSA 의 exempt/non-exempt 체계를 그대로 옮겨 올 수는 없습니다. 다만 **한국에도 제한적인 적용제외가 있습니다** — 제63조와 시행령 제34조가 실질적인 **관리·감독 업무 또는 기밀을 취급하는 업무**를 근로시간·휴게·휴일 규정에서 빼 놓습니다. 「한국에는 예외가 전혀 없다」고 전하지 마십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["연장근로", "소정근로시간", "적용 제외"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "연장근로",
    aliases: ["초과근무", "오버타임", "잔업"],
    domain: "근로시간·휴가",
    summary: "당사자 합의로 1주 12시간 한도에서 법정 근로시간을 연장하는 것.",
    usages: [
      {
        english: "extended work",
        register: "법령",
        meaning: "근로기준법 제53조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제53조" },
        evidence: {
          quote:
            "Where an agreement is made between the parties, work hours referred to in Article 50 may be extended by up to 12 hours per week.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "overtime",
        register: "본사보고",
        meaning:
          "**40시간 + 연장 12시간 = 52시간** 구조를 한 문장으로 보여 준다. 본사가 '52시간까지 정상 근무'로 오해하는 것을 막는다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "The maximum number of weekly working hours with the permitted extensions is 52 hours (40 hours per week plus up to 12 hours of overtime).",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 바로 이해하는 말은 overtime 입니다. 반드시 함께 전할 것은 **가산수당 50% 이상이 법정 의무**라는 점과, **미국식 exempt 분류가 그대로 대응하지는 않는다**는 점입니다. 다만 한국에도 제63조·시행령 제34조의 제한적 적용제외가 있으므로, **직함이 아니라 실제 업무를 기준으로** 따로 판단해야 합니다. 본사가 '관리직은 일률적으로 오버타임 없음'을 전제하면 바로잡아야 합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로시간", "통상임금", "휴일근로", "야간근로"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "야간근로",
    aliases: ["심야근무", "나이트"],
    domain: "근로시간·휴가",
    summary: "오후 10시부터 다음 날 오전 6시 사이의 근로. 50% 이상을 가산한다.",
    usages: [
      {
        english: "night work",
        register: "법령",
        meaning: "근로기준법 제56조가 가산수당을 정하며 쓰는 표현.",
        source: { tier: 1, law: "근로기준법", article: "제56조" },
        evidence: {
          quote:
            "An employer shall, in addition to the ordinary wages, pay at least 50/100 thereof to employees who perform night work (referring to the work performed between 10:00 p.m. and 6:00 a.m. of the next day).",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**연장근로와 야간근로가 겹치면 가산이 중복 적용**됩니다. 본사의 shift differential 개념은 회사가 정하는 수당이지만 한국은 법정 가산이라 성격이 다릅니다. 글로벌 팀과 시차 회의를 자주 하는 조직에서 특히 놓칩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["연장근로", "휴일근로", "통상임금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "휴일근로",
    aliases: ["휴일근무", "주말근무"],
    domain: "근로시간·휴가",
    summary: "휴일에 하는 근로. 8시간 이내 50%, 8시간 초과분 100%를 가산한다.",
    usages: [
      {
        english: "holiday work",
        register: "법령",
        meaning: "근로기준법 제56조가 가산수당을 정하며 쓰는 표현.",
        source: { tier: 1, law: "근로기준법", article: "제56조" },
        evidence: {
          quote:
            "An employer shall, in addition to the ordinary wages, pay employees at least 50/100 thereof for extended work (referring to the work during the hours extended pursuant to Articles 53 and 59 and to the proviso of Article 69).",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 work on holidays 로 설명하면 통합니다. 다만 **어떤 날이 휴일인지는 회사마다 다릅니다** — 법정 공휴일이 유급휴일로 보장되는지, 취업규칙이 어떻게 정했는지 먼저 확인해야 계산이 맞습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["휴일", "연장근로", "통상임금"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "휴일",
    aliases: ["주휴일", "유급휴일", "공휴일"],
    domain: "근로시간·휴가",
    summary: "1주 평균 1회 이상 유급으로 보장해야 하는 휴일과 법정 공휴일.",
    usages: [
      {
        english: "holidays",
        register: "법령",
        meaning: "근로기준법 제55조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제55조" },
        evidence: {
          quote:
            "An employer shall guarantee to employees at least one paid holiday per week on the average.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**주휴일이 유급이라는 점**이 본사에 가장 낯선 대목입니다. 일하지 않는 날에 임금이 나가는 구조라, 시급제 인력의 인건비를 본사가 계산할 때 반드시 빠집니다. 주 15시간 미만 근로자에게는 주휴일 규정이 적용되지 않습니다. **상시 5명 이상 사업장에서는 법정 공휴일과 대체공휴일도 법에 따라 유급휴일입니다**(제55조제2항) — 회사가 정하기 나름인 것은 그 밖의 약정휴일입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["휴일근로", "단시간근로자"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "휴게시간",
    aliases: ["휴식시간", "점심시간"],
    domain: "근로시간·휴가",
    summary:
      "4시간에 30분 이상, 8시간에 1시간 이상 근로시간 도중에 주어야 하는 시간. 무급이다.",
    usages: [
      {
        english: "recess hours",
        register: "법령",
        meaning: "근로기준법 제54조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제54조" },
        evidence: {
          quote:
            "An employer shall allow employees a recess of not less than thirty minutes in cases of working for four hours, or a recess of not less than one hour in cases of working for eight hours, during work hours. (2) Recess hours may be freely used by employees.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 break time 이나 rest period 로 설명하면 통합니다. 다만 **근로자가 자유롭게 이용할 수 있어야 휴게시간**이고, 대기 상태면 근로시간으로 봅니다. unpaid break 라고만 전하면 이 요건이 빠집니다 — 점심시간에 전화를 받게 하면 그 시간은 근로시간입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로시간"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "탄력적 근로시간제",
    aliases: ["탄력근로", "탄력근무제"],
    domain: "근로시간·휴가",
    summary:
      "일정 단위기간을 평균해 주 40시간을 넘지 않게 하면서 특정 주·일에 더 일할 수 있게 하는 제도.",
    usages: [
      {
        english: "flexible work hours system",
        register: "법령",
        meaning: "근로기준법 제51조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제51조" },
        evidence: {
          quote:
            "An employer may, as prescribed by the rules of employment (including other rules equivalent thereto), extend work hours in excess of those as referred to in Article 50 (1) in a particular week, or extend work hours in excess of those as referred to in Article 50 (2) in a particular day…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "flexible working hours system",
        register: "본사보고",
        meaning:
          "본사의 flexible working 과 다른 지점 — **단위기간 평균 40시간**이라는 총량 정산 장치 — 이 정의문 안에 그대로 있다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "In a flexible working hours system, working hours are increased during the weeks where work is concentrated but reduced during other weeks so that, on average, the weekly working hours are within the statutory working hours (ie, 40 hours). A flexible working hours system can be utilised for a maximum of six months.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
        caution:
          "선택적 근로시간제(selective working hours system)와 다르다. 탄력적은 사용자가 배분하고, 선택적은 근로자가 고른다.",
      },
    ],
    aiOpinion: {
      body: "본사의 flexible working arrangements 는 대개 근무 장소·시간을 자유롭게 하는 제도를 뜻해 **이름은 같고 내용은 다릅니다.** 한국의 탄력근로제는 **총 근로시간을 평균으로 맞추는 제도**이고, 2주 초과 단위는 근로자대표와의 서면합의가 필요합니다. 도입 절차를 밟지 않으면 연장근로수당이 그대로 발생합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["선택적 근로시간제", "근로자대표", "근로시간"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "선택적 근로시간제",
    aliases: ["선택근로", "플렉스타임"],
    domain: "근로시간·휴가",
    summary:
      "정산기간의 총 근로시간만 정하고 시작·종료 시각을 근로자의 결정에 맡기는 제도.",
    usages: [
      {
        english: "selective work hours system",
        register: "법령",
        meaning: "근로기준법 제52조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제52조" },
        evidence: {
          quote:
            "Article 52 (Selective Work Hours System) When an employer has determined the matters falling under the following subparagraphs by a written agreement with the representative of employees with regard to employees who are allowed to decide on their own beginning and finishing time of work pursuant to the rules of employment…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "selective working hours system",
        register: "본사보고",
        meaning:
          "정산기간(원칙 1개월, 신제품·신기술 연구개발은 3개월) 안에서 근로자가 시간을 정하는 제도라는 설명.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "In a selective working hours system, an employee may freely choose their working hours over a certain period (not exceeding one month or, in the case of work pertaining to research and development of new products or new technologies, not exceeding three months), as long as the total working hours do not exceed the statutory working hours for such period.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english: "selective-working-hours system",
        register: "본사보고",
        meaning:
          "출퇴근 시각 결정권을 근로자에게 준다는 뜻풀이. 숫자가 없어 사전 정의문으로 쓰기 좋다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "Measures to Implement Alternative Working Hours System in Compliance with the 52-Hour Work Week and the Grace Period (2019. 11. 29.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=20555",
        },
        evidence: {
          quote:
            "Businesses primarily comprised of office workers are generally adopting selective-working-hours system, which provides employees with the authority to decide when to begin and finish work.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 flextime 과 가장 가깝습니다. **근로자대표와의 서면합의가 요건**이고 합의서에 대상 근로자·정산기간·총 근로시간을 적어야 합니다. 합의 없이 운영하면 제도가 아니라 그냥 관행이 되어, 나중에 연장근로수당 청구로 돌아옵니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["탄력적 근로시간제", "근로자대표"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "간주근로시간제",
    aliases: ["재량근로", "사업장 밖 근로", "간주근로"],
    domain: "근로시간·휴가",
    summary:
      "사업장 밖 근로 등으로 근로시간을 산정하기 어려울 때 소정근로시간을 근로한 것으로 보는 제도.",
    usages: [
      {
        english: "special cases concerning calculation of work hours",
        register: "법령",
        meaning: "근로기준법 제58조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제58조" },
        evidence: {
          quote:
            "When it is difficult to calculate work hours provided by an employee because he or she performs all or part of his or her duty outside the workplace owing to a business trip or any other reason, it shall be deemed that he or she has worked for contractual work hours.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "⚠️ 법령 조문 표제(제58조)는 **간주근로와 재량근로를 함께 묶은 넓은 이름**입니다. 본사 문서에는 `deemed working hours for work outside the workplace` 처럼 풀어 쓰고, 재량근로(discretionary work system)와 구분해 적으십시오. 본사가 원격근무를 이유로 근로시간 관리를 하지 않으려 할 때 여기를 근거로 대곤 합니다. 그러나 **근로시간을 산정하기 어려운 경우**여야 하고, 재량근로는 대상 업무가 법으로 한정돼 있습니다. 노트북 접속 기록으로 시간이 확인되는 원격근무는 대개 해당하지 않습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로시간", "근로자대표"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "보상 휴가제",
    aliases: ["보상휴가", "대체휴가"],
    domain: "근로시간·휴가",
    summary:
      "근로자대표와 서면합의로 연장·야간·휴일근로 수당을 지급하는 대신 휴가를 주는 제도.",
    usages: [
      {
        english: "compensatory leave system",
        register: "법령",
        meaning: "근로기준법 제57조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제57조" },
        evidence: {
          quote:
            "An employer may, in lieu of paying additional wages, grant leave to an employee to compensate for the extended, night and holiday work, etc.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 comp time 과 이름이 같아 오해가 쉽습니다. 한국에서는 **근로자대표와의 서면합의가 있어야** 하고, 부여하는 휴가는 **가산율을 반영한 시간**이어야 합니다. 1시간 연장에 1시간 휴가로 갈음하면 부족합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["연장근로", "근로자대표"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "연차유급휴가",
    aliases: ["연차", "연차휴가", "유급휴가"],
    domain: "근로시간·휴가",
    summary:
      "1년간 80% 이상 출근한 근로자에게 15일, 계속근로연수에 따라 가산해 주는 유급휴가.",
    usages: [
      {
        english: "annual paid leave",
        register: "법령",
        meaning: "근로기준법 제60조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제60조" },
        evidence: {
          quote:
            "Every employer shall grant any employee who has worked not less than 80 percent of one year a paid leave of 15 days.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "annual paid leave",
        register: "본사보고",
        meaning:
          "**법정 최소 15일**이 조문에 박혀 있다는 점이 문장에 드러난다. PTO 에 통합하면 안 되는 이유를 이 한 줄로 설명할 수 있다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "Annual paid leave is prescribed under Article 60 of the Labor Standards Act, and it refers to the 15 days of paid vacation granted to employees who have worked for at least 80% of a year.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "미국에는 연차·병가·개인휴가를 한 계정으로 합친 **PTO(paid time off)** 가 널리 쓰입니다(미 노동통계국 용어로는 consolidated leave plan). 다만 모든 미국 기업이 그런 것은 아니고 vacation 과 sick leave 를 나눠 운영하는 곳도 많습니다. **한국의 연차는 법정 최소 일수가 정해진 별도 제도**라 PTO 안에 뭉뚱그리면 법정 일수 미달을 못 잡아냅니다. 영국·EU·싱가포르 등 영국법계에는 annual leave 로 설명하면 바로 통합니다. ⚠️ **vacation 과 annual leave 는 격의 차이가 아니라 지역의 차이**입니다 — 사전은 vacation 을 미국 용법, annual leave 를 주로 영국 용법으로 표시합니다. **미국 본사에 annual leave 를 쓰면 오히려 낯설게 읽힙니다.**",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "vacation",
          source: "Cambridge Dictionary",
          quote:
            "A1 [ C or U ] US (UK holiday) — a time when someone does not go to work or school but is free to do what they want",
          url: "https://dictionary.cambridge.org/dictionary/english/vacation",
          checkedOn: "2026-09-14",
        },
        {
          term: "paid time off",
          source: "U.S. Bureau of Labor Statistics",
          quote:
            "Also referred to as paid time off, these plans replace different types of leave, such as vacation, sick leave, and personal leave.",
          url: "https://www.bls.gov/ebs/publications/national-compensation-survey-glossary-of-employee-benefit-terms.htm",
          checkedOn: "2026-09-14",
        },
      ],
    },
    pitfalls: [
      "사용 촉진 절차를 밟지 않으면 미사용 연차는 수당으로 정산해야 한다. 본사가 'use it or lose it'을 전제하면 그대로 미지급이 된다.",
    ],
    related: ["연차휴가 사용촉진", "금품 청산"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "연차휴가 사용촉진",
    aliases: ["사용촉진", "연차촉진"],
    domain: "근로시간·휴가",
    summary:
      "정해진 시기에 서면으로 사용을 촉구하고 시기를 지정하면 미사용 연차에 대한 보상 의무가 면제되는 절차.",
    usages: [
      {
        english: "urging employees to take annual paid leave",
        register: "법령",
        meaning: "근로기준법 제61조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제61조" },
        evidence: {
          quote:
            "Where any employee's paid leave is terminated by time limitation pursuant to the main clause of Article 60 (7) because the employee fails to take his or her paid leave although the relevant employer has taken the following measures to urge employees to take the paid leave…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**절차를 지켜야만 면제**됩니다. 시기와 방법(서면)이 법으로 정해져 있어, 메일 한 통으로 끝내거나 시기를 놓치면 그대로 수당 지급 의무가 남습니다. 본사에는 use-it-or-lose-it 정책을 쓰려면 이 절차를 밟아야 한다고 설명하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["연차유급휴가"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "적용 제외",
    aliases: ["근로시간 적용제외", "감시단속적"],
    domain: "근로시간·휴가",
    summary:
      "감시·단속적 근로 등 일부 근로자에게 근로시간·휴게·휴일 규정을 적용하지 않는 제도.",
    usages: [
      {
        english: "exclusion from application",
        register: "법령",
        meaning: "근로기준법 제63조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제63조" },
        evidence: {
          quote:
            "Article 63 (Exclusion from Application) The provisions pertaining to work hours, recess, and holidays referred to in this Chapter and Chapter V shall not apply to an employee who falls under any one of the following subparagraphs.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 exempt employee 개념을 여기에 대응시키려 하는데 **범위가 훨씬 좁습니다.** **manager 라는 직함만으로는 부족합니다** — 실제 업무가 시행령 제34조의 관리·감독 업무 또는 기밀 취급 업무에 해당하는지를 실질로 따집니다. 감시·단속적 근로는 고용노동부 승인이 따로 필요합니다. 화이트칼라 전반에 적용된다고 오해하면 미지급 수당이 쌓입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["근로시간", "연장근로"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "생리휴가",
    aliases: ["보건휴가"],
    domain: "근로시간·휴가",
    summary: "여성 근로자가 청구하면 월 1일의 무급 생리휴가를 주어야 한다.",
    usages: [
      {
        english: "monthly menstrual leave",
        register: "법령",
        meaning: "근로기준법 제73조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제73조" },
        evidence: {
          quote:
            "Every employer shall, when any female employee files a claim for a menstrual leave, grant her one day of menstrual leave per month.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 존재 자체를 모르는 제도입니다. **무급이지만 청구하면 거부할 수 없습니다.** 사용 사유를 캐묻거나 증빙을 요구하면 그 자체가 문제가 되므로, 신청 절차를 단순하게 설계하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임산부의 보호"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  // ───────────────────────── 모성·양립 ─────────────────────────
  {
    term: "출산전후휴가",
    aliases: ["출산휴가", "산전후휴가"],
    domain: "모성·양립",
    summary: "출산 전후를 통하여 90일(다태아 120일)의 휴가를 주어야 한다.",
    usages: [
      {
        english: "maternity leave",
        register: "법령",
        meaning: "남녀고용평등법 제18조가 지원을 정하며 쓰는 표현.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제18조",
        },
        evidence: {
          quote:
            "The State may pay an amount equivalent to the ordinary wages for the period of the relevant leave (hereinafter referred to as “maternity leave benefits, etc.”) to employees who meet certain requirements and who have taken paternity leave under Article 18-2, fertility treatment leave under Article 18-3…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "maternity leave",
        register: "법령",
        // 전에는 제74조의 조문 표제 protection for maternity 를 대응어로 실었다.
        // 그것은 「임산부의 보호」의 영역이지 휴가 자체를 가리키는 말이 아니다
        // (서현님 2차 검수 지적, 2026-09-15). headings.test.ts 가 재발을 막는다.
        meaning:
          "근로기준법 제74조제1항이 90일(다태아 120일) 부여를 정하며 쓰는 표현. **휴가 자체를 정한 본체 조문이다.**",
        source: { tier: 1, law: "근로기준법", article: "제74조" },
        evidence: {
          quote:
            "An employer shall grant a pregnant woman 90 days of maternity leave (100 days for a pregnant woman who gave birth to a premature baby, and 120 days for a pregnant woman who is pregnant with two or more children at a time) before and after childbirth.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "maternity leave",
        register: "본사보고",
        meaning:
          "사용자의 시기 조정권도, 근로자의 포기도 인정되지 않는 강행규정이라는 점을 드러낸 문장.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "Statutes on maternity leave are mandatory provisions and, thus, neither the employer’s right to adjust the timing of such leave nor an employee’s forfeiture of the right to take such leave is recognised under the law.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 미국계라면 **민간부문 근로자를 위한 연방 유급 가족·의료휴가 법이 없는 나라**에서 오기 때문에 이 제도를 크게 놀랍니다(연방법 FMLA 는 무급입니다. 연방 공무원에게는 별도 유급 육아휴직이 있고, 자체 유급휴가를 둔 주도 있습니다). 최초 60일(다태아 75일)이 **법정 유급기간**입니다. 다만 고용보험에서 출산전후휴가급여가 지급되면 **그 금액의 한도에서 사용자의 지급 책임이 면제**되고(제74조제4항 단서), 우선지원대상기업은 90일분을 고용보험이 지원해 사업주는 통상임금과 지원금의 차액을 부담합니다. 「회사 60일 + 보험 30일」로 나눠 설명하지 마십시오. **휴가 기간과 그 후 30일간은 해고가 금지**된다는 점도 함께 전하십시오.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "paid family and medical leave",
          source: "U.S. Department of Labor (Women's Bureau)",
          quote:
            "there is currently no federal law providing or guaranteeing access to paid family and medical leave for workers in the private sector",
          url: "https://www.dol.gov/agencies/wb/featured-paid-leave",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["육아휴직", "출산전후휴가 급여", "임산부의 보호"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "배우자 출산휴가",
    aliases: ["아빠 출산휴가", "배우자휴가"],
    domain: "모성·양립",
    summary: "배우자의 출산을 이유로 청구하면 주어야 하는 유급휴가.",
    usages: [
      {
        english: "paternity leave",
        register: "법령",
        meaning: "남녀고용평등법 제18조의2 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제18조의2",
        },
        evidence: {
          quote:
            "If an employee notifies the employer of leave due to their spouse's childbirth (hereinafter referred to as “paternity leave”), the employer shall allow the employee to take such leave for 20 days, and the period of leave used shall be paid.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 paternity leave 로 바로 통합니다. **청구하면 주어야 하는 유급휴가**이고 회사 재량이 아니라는 점만 분명히 하십시오. 일수와 분할 사용 방식은 개정이 잦으므로 최신 조문을 확인해야 합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["출산전후휴가", "육아휴직"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "난임치료휴가",
    aliases: ["난임휴가"],
    domain: "모성·양립",
    summary: "인공수정·체외수정 등 난임치료를 받기 위해 청구할 수 있는 휴가.",
    usages: [
      {
        english: "fertility treatment leave",
        register: "법령",
        meaning: "남녀고용평등법 제18조의3 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제18조의3",
        },
        evidence: {
          quote:
            "If an employee requests leave of absence to receive fertility treatment, such as artificial insemination or in vitro fertilization (hereinafter referred to as “fertility treatment leave”), the employer shall allow the employee to take such leave for up to 6 days per year, and the first 2 days shall be paid.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 낯선 제도입니다. **치료 사실을 알린 것 자체가 민감정보**이므로 신청 처리 과정에서 정보가 퍼지지 않도록 절차를 설계하십시오. 이를 이유로 불리한 처우를 하면 별도 위반입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["출산전후휴가"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "육아휴직",
    aliases: ["육휴", "육아휴가"],
    domain: "모성·양립",
    summary: "만 8세 이하 또는 초등학교 2학년 이하 자녀를 양육하기 위한 휴직.",
    usages: [
      {
        english: "childcare leave",
        register: "법령",
        meaning: "남녀고용평등법 제19조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제19조",
        },
        evidence: {
          quote:
            "If a pregnant female employee or any employee applies for a leave of absence (hereinafter referred to as “childcare leave”) in order to protect maternity or to raise their child aged 8 years or younger or in the second grade or lower of elementary school…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "childcare leave",
        register: "본사보고",
        meaning:
          "**must permit** — 회사가 승인하는 복리후생이 아니라 강행규정이라는 점이 동사에 드러난다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "An employer must permit childcare leave of up to one year if: a female employee requests childcare leave to protect her motherhood during pregnancy; or an employee requests childcare leave to tend to their child who is eight years of age or younger, or in second grade or lower in elementary school.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english: "disadvantageous measure on account of childcare leave",
        register: "분쟁",
        meaning:
          "육아휴직을 이유로 한 인사조치가 금지된다는 것과, 복귀 시 같은 업무로 돌려야 한다는 것을 함께 담은 표현.",
        source: {
          tier: 2,
          outlet: "Legal 500 Country Comparative Guides",
          firm: "Sigong Law P.C. 기고",
          title: "South Korea: Employment and Labour Law",
          url: "https://www.legal500.com/guides/chapter/south-korea-employment-and-labour-law/",
        },
        evidence: {
          quote:
            "No employer shall terminate or take any disadvantageous measure against an employee on account of childcare leave, or dismiss the relevant employee during the period of childcare leave.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution: "이 가이드에는 발행일 표기가 없어 접속일 기준으로 인용한다.",
      },
    ],
    aiOpinion: {
      body: "미국계 본사는 parental leave 라고 부르며 **대체로 사내 제도로 이해**합니다(민간부문의 법정 근거는 무급의 FMLA 입니다). ⚠️ **영국에서 parental leave 는 다른 제도**입니다 — 출산휴가가 아니라 자녀 양육을 위한 별도 무급휴가라, 영국 본사에 이 말을 그대로 쓰면 어긋납니다. 한국은 법정 권리이고 **요건을 갖춘 신청을 거부할 수 없습니다.** 급여는 회사가 아니라 고용보험에서 나가고, 휴직을 이유로 불리한 처우를 해서는 안 되고, 복귀 시에는 **휴직 전과 같은 업무 또는 같은 수준의 임금을 지급하는 직무**에 복귀시켜야 합니다(제19조제4항) — 반드시 같은 자리일 필요는 없습니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "Unpaid Parental Leave",
          source: "GOV.UK",
          quote:
            "Eligible employees can take Unpaid Parental Leave to look after their child's welfare",
          url: "https://www.gov.uk/parental-leave",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["육아기 근로시간 단축", "육아휴직 급여", "출산전후휴가"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "육아기 근로시간 단축",
    aliases: ["육아 단축근무", "육아기 단축"],
    domain: "모성·양립",
    summary: "육아휴직 대신 또는 함께 근로시간을 줄여 일할 수 있게 하는 제도.",
    usages: [
      {
        english: "reduced working hours during period of childcare",
        register: "법령",
        meaning: "남녀고용평등법 제19조의2 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제19조의2",
        },
        evidence: {
          quote:
            'If an employee applies for reduced working hours to raise their child aged 12 years or younger or in the sixth grade or lower of elementary school (hereinafter referred to as "reduced working hours during a period of childcare"), the employer shall allow the employee to work under such reduced working hours.',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 part-time arrangement 와 달리 **단축된 시간에 비례해 임금을 깎되 그 밖의 근로조건은 불리하게 하지 못합니다**(제19조의3). 그리고 **단축 근무자에게 연장근로를 시키려면 본인의 명시적 청구**가 있어야 합니다. 팀장이 관행적으로 야근을 요청하면 그대로 위반입니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [
        {
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제19조의3",
        },
      ],
    },
    related: ["육아휴직", "가족돌봄 근로시간 단축"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "육아 시간",
    aliases: ["수유시간", "유급 수유"],
    domain: "모성·양립",
    summary:
      "생후 1년 미만 유아를 가진 여성 근로자에게 1일 2회 각 30분 이상 주는 유급 시간.",
    usages: [
      {
        english: "nursing hours",
        register: "법령",
        meaning: "근로기준법 제75조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제75조" },
        evidence: {
          quote:
            "An employer shall grant thirty-minute or longer paid nursing time twice a day to those female employees who have infants under the age of one, upon request.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**유급**이라는 점이 핵심입니다. 본사에 nursing break 로 설명하면 무급 휴게로 오해하기 쉬우니 paid 를 붙여 전하십시오. 사용할 공간을 마련하지 않으면 제도가 있어도 쓰이지 않습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["출산전후휴가", "임산부의 보호"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "임산부의 보호",
    aliases: ["임신부 보호", "모성보호"],
    domain: "모성·양립",
    summary:
      "임신 중 여성의 시간외근로 금지, 쉬운 종류의 근로로의 전환, 근로시간 단축 등 보호 조치.",
    usages: [
      {
        english: "protection for maternity",
        register: "법령",
        meaning: "근로기준법 제74조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제74조" },
        evidence: {
          quote:
            "An employer shall grant a pregnant woman 90 days of maternity leave (100 days for a pregnant woman who gave birth to a premature baby, and 120 days for a pregnant woman who is pregnant with two or more children at a time) before and after childbirth.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 놓치기 쉬운 것은 **임신 중 시간외근로 자체가 금지**된다는 점입니다. 본인이 동의해도 시킬 수 없습니다. **임신 후 12주 이내 또는 32주 이후**(유산·조산 등 위험이 있으면 임신 전 기간)의 근로시간 단축 청구도 임금을 깎지 못합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["출산전후휴가", "육아 시간", "태아검진 시간"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "태아검진 시간",
    aliases: ["산전검진", "임산부 정기검진"],
    domain: "모성·양립",
    summary:
      "임신한 여성 근로자가 정기 건강진단을 받는 데 필요한 시간을 청구하면 허용해야 한다.",
    usages: [
      {
        english: "permission for time for medical examination of unborn child",
        register: "법령",
        meaning: "근로기준법 제74조의2 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제74조의2" },
        evidence: {
          quote:
            "Where a pregnant employee claims time necessary for a periodical medical examination of pregnant women under Article 10 of the Mother and Child Health Act, an employer shall grant permission for such time. (2) The employer shall not cut wages of such employee by reason of time for medical examination under paragraph (1).",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**그 시간의 임금을 깎을 수 없습니다.** 본사가 연차로 처리하려 하면 위반입니다. 작은 조항이지만 실무에서 자주 연차로 잘못 처리됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["임산부의 보호"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "가족돌봄 근로시간 단축",
    aliases: ["가족돌봄휴직", "돌봄 단축"],
    domain: "모성·양립",
    summary:
      "가족의 질병·사고·노령이나 본인 건강, 학업 등을 이유로 근로시간을 줄여 일할 수 있게 하는 제도.",
    usages: [
      {
        english: "reduced working hours for family care",
        register: "법령",
        meaning: "남녀고용평등법 제22조의3 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제22조의3",
        },
        evidence: {
          quote:
            "If an employee applies for reduced working hours for any of the following reasons, the employer shall allow the employee to work under such reduced working hours.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "무급이라는 점은 미국 FMLA·영국 carer's leave 와 같습니다. ⚠️ 다만 **근로시간 단축에 가장 가까운 영어는 FMLA 의 reduced leave schedule** 이고, **영국 carer's leave 는 시간 단축이 아니라 단기 무급휴가**라 대응어로 쓰면 안 됩니다. 다만 **사유가 가족 돌봄에 한정되지 않습니다** — 본인의 건강, **55세 이상 근로자의 은퇴 준비**, 학업이 각각 독립 사유입니다(제22조의3제1항). 허용하지 않으려면 법이 정한 거부 사유에 해당해야 하고, 그 경우에도 대체 조치를 협의해야 합니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "reduced leave schedule",
          source: "U.S. Department of Labor (FMLA FAQ)",
          quote:
            "employees may take FMLA leave intermittently – taking leave in separate blocks of time for a single qualifying reason – or on a reduced leave schedule",
          url: "https://www.dol.gov/agencies/whd/fmla/faq",
          checkedOn: "2026-09-14",
        },
        {
          term: "carer's leave",
          source: "GOV.UK",
          quote:
            "Employees are entitled to unpaid leave to give or arrange care for a 'dependant'",
          url: "https://www.gov.uk/carers-leave",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["육아기 근로시간 단축"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "직장 내 성희롱",
    aliases: ["성희롱", "sexual harassment"],
    domain: "모성·양립",
    summary:
      "지위를 이용하거나 업무와 관련해 성적 언동으로 굴욕감을 주거나 고용상 불이익을 주는 행위.",
    usages: [
      {
        english: "workplace sexual harassment",
        register: "법령",
        meaning: "남녀고용평등법 제12조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제12조",
        },
        evidence: {
          quote:
            "No employer, superior, or employee shall commit workplace sexual harassment against another employee.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "the employer shall, without delay, conduct an investigation",
        kind: "문장",
        register: "법령",
        // 전에는 제14조의 조문 표제(measures when workplace sexual harassment
        // occurs)를 대응어 자리에 두었다. 그것은 「조치」이지 「성희롱」이 아니다
        // (서현님 2차 검수 지적, 2026-09-15).
        meaning:
          "제14조. 신고를 받거나 발생 사실을 알게 되면 **지체 없이 조사**해야 합니다. 본사에 조치 의무를 전할 때 그대로 옮겨 쓸 수 있는 문장입니다.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제14조",
        },
        evidence: {
          quote:
            "If any person becomes aware that workplace sexual harassment has occurred, they may file a report on the matter with the employer. (2) If an employer receives a report under paragraph (1) or becomes aware that workplace sexual harassment has occurred, the employer shall, without delay, conduct an investigation.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "workplace sexual harassment",
        register: "본사보고",
        meaning:
          "남녀고용평등법 제2조제2호의 정의를 그대로 영역한 문장. 지위를 이용하거나 업무와 관련해 성적 굴욕감을 주는 것과, 거부를 이유로 불이익을 주는 것을 모두 포함한다.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, HR Internal Investigations 2026 — South Korea",
          firm: "법무법인 율촌(Yulchon) 집필",
          title:
            "HR Internal Investigations 2026 — South Korea (Last Updated 2026. 2. 4.)",
          url: "https://practiceguides.chambers.com/practice-guides/hr-internal-investigations-2026/south-korea",
        },
        caution:
          "이 자료는 조문 번호(제12조·제14조)를 병기하지 않는다. 조문 대응은 1등급 용례에서 본다.",
        evidence: {
          quote:
            "Sexual harassment is defined as occurring when “an employer, a superior or an employee causes another employee to feel sexual humiliation or repulsion by sexual words or actions by utilising a position in the workplace or in relation to duties, or providing any disadvantages in working conditions and employment on account of disregard for sexual words or actions or any other demands, etc”.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 글로벌 정책이 이미 있는 영역이라 대화가 쉬운 편입니다. 다만 한국은 **신고를 받으면 지체 없이 조사할 법적 의무**가 있고, **고객 등 제3자에 의한 성희롱에도 조치 의무**가 있습니다(제14조의2). 본사 정책이 사내 행위자만 다룬다면 그 범위를 넓혀야 합니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [
        {
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제14조의2",
        },
      ],
    },
    related: ["직장 내 괴롭힘", "성희롱 예방교육"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "성희롱 예방교육",
    aliases: ["예방교육", "성희롱 교육"],
    domain: "모성·양립",
    summary: "사업주가 연 1회 이상 실시해야 하는 직장 내 성희롱 예방 교육.",
    usages: [
      {
        english: "workplace sexual harassment prevention education",
        register: "법령",
        meaning: "남녀고용평등법 제13조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "남녀고용평등과 일ㆍ가정 양립 지원에 관한 법률",
          article: "제13조",
        },
        evidence: {
          quote:
            "An employer shall provide education for the prevention of workplace sexual harassment (hereinafter referred to as “sexual harassment prevention education”) every year in order to prevent workplace sexual harassment and to create conditions in which their employees can work in a safe working environment.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 글로벌 e-러닝으로 갈음하려는 경우가 많은데, **한국 법이 요구하는 내용과 실시 방법을 갖춰야** 인정됩니다. 영어 교육만 제공하면 한국어 사용 직원에게 실질적으로 전달되지 않아 형식적 이수로 남습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["직장 내 성희롱"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  // ───────────────────────── 집단노사 ─────────────────────────
  {
    term: "노동조합",
    aliases: ["노조", "유니온"],
    domain: "집단노사",
    summary:
      "근로자가 주체가 되어 자주적으로 단결해 근로조건의 유지·개선을 도모하는 조직.",
    usages: [
      {
        english: "trade union",
        register: "법령",
        meaning: "노동조합 및 노동관계조정법 영문 제명이 쓰는 표준 대응어.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제2조",
        },
        evidence: {
          quote:
            '"Trade union" means an organization or associated organization of workers, which is organized in voluntary and collective manner upon the workers’ initiative for the purpose of maintaining and improving their working conditions and enhancing their economic and social status',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "영국계에는 trade union, 미국계에는 labor union 이 자연스럽습니다. 어느 쪽을 써도 통하므로 본사 국적에 맞추면 됩니다. **미국 법률문서에서는 `labor organization`** 이 정식 용어입니다(NLRA 가 그렇게 씁니다). **주의할 것은 works council 입니다** — 유럽계 본사의 종업원 대표기구는 한국의 노사협의회에 가깝고 노동조합과는 다른 기구입니다. 노조를 works council 로 옮기면 안 됩니다. 그리고 한국은 **기업 단위에 복수 노조가 허용**되므로 본사가 '노조는 하나'라고 전제하면 어긋납니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "labor organization",
          source: "Cornell LII (29 U.S.C. §152)",
          quote:
            "any organization of any kind, or any agency or employee representation committee or plan, in which employees participate and which exists for the purpose, in whole or in part, of dealing with employers concerning grievances, labor disputes, wages, rates of pay, hours of employment, or conditions of work.",
          url: "https://www.law.cornell.edu/uscode/text/29/152",
          checkedOn: "2026-09-14",
        },
        {
          term: "works council",
          source: "Eurofound",
          quote:
            "In the workplace, workers may be represented by trade union and through works councils \u2013 or similar structures elected by all employees.",
          url: "https://www.eurofound.europa.eu/en/topics/employee-representation",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["노사협의회", "단체교섭", "단체협약"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "단체교섭",
    aliases: ["교섭", "노사교섭"],
    domain: "집단노사",
    summary:
      "노동조합이 사용자와 근로조건 등에 관하여 교섭하고 협약을 체결하는 것.",
    usages: [
      {
        english: "authority to bargain and make agreement",
        register: "법령",
        meaning: "노조법 제29조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제29조",
        },
        evidence: {
          quote:
            "The representative of a trade union shall have the authority to bargain and make a collective agreement with the employer or employers' association for the trade union and its members.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 collective bargaining 으로 통합니다. 한국에서 중요한 것은 **정당한 이유 없이 교섭을 거부하면 그 자체가 부당노동행위**라는 점입니다. 본사가 '아직 검토 중'이라며 응답을 미루는 것도 거부로 평가될 수 있습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["노동조합", "단체협약", "교섭창구 단일화", "부당노동행위"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "교섭창구 단일화",
    aliases: ["창구단일화", "교섭대표노조"],
    domain: "집단노사",
    summary:
      "하나의 사업장에 복수 노조가 있을 때 교섭대표노동조합을 정해 교섭하는 절차.",
    usages: [
      {
        english: "simplification of bargaining windows",
        register: "법령",
        meaning: "노조법 제29조의2 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제29조의2",
        },
        evidence: {
          quote:
            "Where at least two trade unions established or joined by workers exist in one business or one place of work regardless of the type of organization, trade unions shall determine a bargaining representative trade union.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "복수 노조를 겪어 보지 않은 본사에는 **원칙적으로 단일화 절차를 거쳐야 한다**는 점을 먼저 설명해야 합니다. 다만 **자율 결정 기한 안에 사용자가 단일화 절차를 거치지 않기로 동의하면 개별교섭이 가능합니다**(제29조의2제1항 단서). 그 경우에는 교섭을 요구한 **모든 노조와 성실히 교섭해야 하고 차별해서는 안 됩니다.** 어느 노조와 먼저 대화할지를 회사가 임의로 고르는 문제는 아닙니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["단체교섭", "교섭단위", "공정대표의무"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "교섭단위",
    aliases: ["교섭단위 분리"],
    domain: "집단노사",
    summary:
      "교섭창구를 단일화해야 하는 범위. 필요하면 노동위원회가 분리를 결정한다.",
    usages: [
      {
        english: "determination of bargaining unit",
        register: "법령",
        meaning: "노조법 제29조의3 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제29조의3",
        },
        evidence: {
          quote:
            'A unit which shall determine a bargaining representative trade union pursuant to Article 29-2 (hereinafter referred to as "bargaining unit") shall be one business or one place of business.',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "미국계 본사는 **bargaining unit** 개념을 알고 있어 소통이 쉽습니다 — 미국도 **NLRB 가 교섭단위를 결정**합니다(법문 표현은 the unit appropriate for the purposes of collective bargaining). 한국은 **하나의 사업 또는 사업장**이 원칙이고, 근로조건·고용형태가 현저히 다르면 노동위원회 결정으로 분리할 수 있습니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "bargaining unit",
          source: "Cornell LII (29 U.S.C. §159)",
          quote:
            "The Board shall decide in each case whether, in order to assure to employees the fullest freedom in exercising the rights guaranteed by this subchapter, the unit appropriate for the purposes of collective bargaining shall be the employer unit, craft unit, plant unit, or subdivision thereof",
          url: "https://www.law.cornell.edu/uscode/text/29/159",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["교섭창구 단일화", "노동위원회"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "공정대표의무",
    aliases: ["공정대표", "차별금지(교섭)"],
    domain: "집단노사",
    summary:
      "교섭대표노동조합과 사용자가 교섭 참여 노조나 조합원을 합리적 이유 없이 차별하지 못할 의무.",
    usages: [
      {
        english: "duties of fair representation",
        register: "법령",
        meaning: "노조법 제29조의4 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제29조의4",
        },
        evidence: {
          quote:
            "A bargaining representative trade union and an employer shall not discriminate among trade unions participating in procedures for the simplification of bargaining windows or members thereof without reasonable grounds.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**사용자에게도 의무가 있다**는 점이 핵심입니다. 소수 노조를 **합리적 이유 없이 차별하면** 시정 대상이 됩니다 — 사무실·게시판·근로시간면제 배분도 차별에 해당하는지를 사안별로 따집니다. **똑같이 나눠 주어야 하는 의무는 아닙니다.** 본사는 대표 노조와만 상대하면 된다고 생각하기 쉽습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["교섭창구 단일화", "근로시간 면제"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "단체협약",
    aliases: ["단협", "CBA"],
    domain: "집단노사",
    summary:
      "노동조합과 사용자가 교섭해 체결하는 서면 협약. 유효기간 상한이 있다.",
    usages: [
      {
        english: "collective agreement",
        register: "법령",
        meaning: "근로기준법·노조법 영문본이 함께 쓰는 표준 대응어.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제31조",
        },
        evidence: {
          quote:
            "A collective agreement shall be prepared in writing, and both of the parties shall affix their signatures or their seals thereto.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "collective agreement",
        register: "본사보고",
        meaning:
          "단체교섭으로 정한 조합원의 근로조건을 적은 서면 합의라는 정의.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, Employment 2026 — South Korea",
          firm: "법무법인 화우(Yoon & Yang) 집필",
          title: "Employment 2026 — South Korea (Last Updated 2026. 9. 3.)",
          url: "https://practiceguides.chambers.com/practice-guides/employment-2026/south-korea",
        },
        evidence: {
          quote:
            "“Collective agreement” refers to a written agreement that details the terms of trade union members’ working conditions (eg, their wages and working hours) that have been negotiated through the collective bargaining process.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english: "collective agreement",
        register: "분쟁",
        meaning:
          "단체협약에 해고 관련 요건이 있으면 사용자가 그 절차를 따라야 한다는 실무 지점.",
        source: {
          tier: 2,
          outlet: "Legal 500 Country Comparative Guides",
          firm: "Sigong Law P.C. 기고",
          title: "South Korea: Employment and Labour Law",
          url: "https://www.legal500.com/guides/chapter/south-korea-employment-and-labour-law/",
        },
        evidence: {
          quote:
            "In the case where a collective agreement is entered into between an employer and a trade union that includes certain requirements (substantive or procedural) regarding terminations, the employer must follow the terms of such collective agreement.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "미국계 본사는 **CBA(collective bargaining agreement)** 라고 부릅니다 — 미 노동부 문서도 이 약어를 씁니다. 유럽계·ILO 문서에서는 **collective agreement** 를 씁니다. 반드시 전할 것은 **효력 순위**입니다 — 단체협약은 취업규칙·근로계약보다 우선합니다. 본사가 사규 개정만으로 조건을 바꾸려 할 때 이 순위를 먼저 설명해야 합니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "collective bargaining agreement (CBA)",
          source: "U.S. Department of Labor (OLMS)",
          quote:
            "Collective bargaining agreements (CBAs) are available from the Office of Labor-Management Standards (OLMS)",
          url: "https://www.dol.gov/agencies/olms/regs/compliance/cba",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["단체교섭", "일반적 구속력", "취업규칙"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "일반적 구속력",
    aliases: ["단협 확장적용", "구속력 확장"],
    domain: "집단노사",
    summary:
      "한 사업장의 동종 근로자 과반수가 하나의 단체협약을 적용받으면 나머지 동종 근로자에게도 적용된다.",
    usages: [
      {
        english: "general binding force",
        register: "법령",
        meaning: "노조법 제35조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제35조",
        },
        evidence: {
          quote:
            "Article 35 (General binding force) When a collective agreement applies to a majority of workers of the same kind of job employed under ordinary circumstances in a business or workplace, it shall apply to the other workers of the same kind of job.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 가장 놀라는 조항입니다. **비조합원에게도 협약이 적용될 수 있습니다.** 협약 체결의 파급 범위를 계산할 때 조합원 수만 보면 안 된다는 뜻입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["단체협약"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "근로시간 면제",
    aliases: ["타임오프", "time-off", "근면"],
    domain: "집단노사",
    summary:
      "노조 활동에 쓰는 시간 중 법이 정한 한도에서 유급으로 인정하는 제도.",
    usages: [
      {
        english: "time-off",
        register: "법령",
        meaning: "노조법 제24조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제24조",
        },
        evidence: {
          quote:
            "Article 24 (Time-Off) If provided in a collective agreement or consented by employers, workers may be engaged in affairs of the trade union without providing work specified in their employment contracts, while receiving wages from the employers or the trade union.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 **한도를 넘겨 유급으로 주면 부당노동행위(경비 원조)가 된다**는 점을 먼저 설명해야 합니다. 노사관계를 부드럽게 하려고 더 주는 것이 오히려 위법이 되는 드문 구조입니다. 한도는 근로시간면제심의위원회가 정합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["노동조합", "부당노동행위"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "쟁의행위",
    aliases: ["파업", "태업", "스트라이크"],
    domain: "집단노사",
    summary:
      "파업·태업·직장폐쇄 등 노동관계 당사자가 주장을 관철할 목적으로 하는 행위.",
    usages: [
      {
        english: "industrial action",
        register: "법령",
        meaning: "노조법 제37조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제37조",
        },
        evidence: {
          quote:
            "Any industrial action shall not be inconsistent with the Acts and subordinate statutes or other social order with respect to its purpose, method and procedure.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 strike 로 통하지만 **쟁의행위는 파업보다 넓은 개념**입니다. 두 가지를 반드시 전하십시오. 첫째, **조정 절차를 거치지 않고 쟁의행위에 들어가면 법 위반**입니다(제45조). 둘째, **쟁의행위 기간의 임금은 지급 의무가 없고, 그 임금을 요구하는 쟁의행위도 금지**됩니다(제44조) — no work, no pay 라고 설명하면 이해가 빠릅니다. 다만 조정 절차를 빠뜨렸다는 사정 하나만으로 쟁의행위의 정당성이 곧바로 없어진다고 보지는 않습니다. 정당성은 주체·목적·절차·수단을 함께 놓고 따지므로, 절차 위반을 곧 불법파업으로 단정해 대응하지 마십시오.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [
        { law: "노동조합 및 노동관계조정법", article: "제45조" },
        { law: "노동조합 및 노동관계조정법", article: "제44조" },
      ],
    },
    related: ["직장폐쇄", "조정", "부당노동행위"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "직장폐쇄",
    aliases: ["락아웃", "lockout"],
    domain: "집단노사",
    summary: "사용자가 대항수단으로 사업장을 닫는 쟁의행위.",
    usages: [
      {
        english: "lock-out",
        register: "법령",
        meaning: "노조법 제46조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제46조",
        },
        evidence: {
          quote:
            "An employer may conduct a lock-out only after the trade union commences an industrial action. (2) In cases of lock-out under paragraph (1), an employer shall report the lock-out, in advance, to the administrative agencies and the Labor Relations Commission.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**노동조합이 쟁의행위를 개시한 뒤에만 할 수 있습니다.** 선제적 직장폐쇄는 위법입니다. 본사가 미국식 defensive lockout 개념으로 접근하더라도 이 선후 관계는 반드시 지켜야 합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["쟁의행위"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "부당노동행위",
    aliases: ["부노", "unfair labor practice"],
    domain: "집단노사",
    summary:
      "노조 가입·활동을 이유로 한 불이익 취급, 교섭 거부, 지배·개입 등 사용자의 금지 행위.",
    usages: [
      {
        english: "unfair labor practice",
        register: "법령",
        meaning: "노조법 제81조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제81조",
        },
        evidence: {
          quote:
            'The employers shall not conduct any of the following acts (hereinafter referred to as "unfair labor practice").',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english:
          "controlling/interfering with the formation and operation of labor unions",
        register: "분쟁",
        meaning:
          "지배·개입의 **로펌 실무 번역**. 법령 영문본은 dominating/intervening 을 쓴다 — 둘 다 통용된다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "Appellate Court Decision Provides Legal Principles on Unfair Labor Practice for Business Places with Multiple Labor Unions (2020. 7. 3.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=2&idx=21986",
        },
        evidence: {
          quote:
            "unfair labor practice of controlling/interfering with the formation and operation of labor unions",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "법령을 인용하는 문서에는 법령 영문본 표기를, 자문 문서·본사 보고에는 이 표기를 쓴다.",
      },
    ],
    aiOpinion: {
      body: "대응어는 미국 NLRA 의 **unfair labor practice(ULP)** 입니다. ⚠️ 다만 **미국은 노동조합 측에도 ULP 가 성립**해(29 U.S.C. §158(b)) 주체 범위가 한국보다 넓습니다 — 한국 노조법의 부당노동행위는 **사용자만 주체**입니다. 이 차이를 빼고 「같은 것」이라고 전하면 본사가 잘못 이해합니다. 한국에서 특히 자주 걸리는 것은 **지배·개입**입니다 — 노조 결성 시기의 관리자 개별 면담은 **내용·시기·태도·불이익 암시 여부**에 따라 지배·개입으로 평가될 수 있어 신중해야 합니다(면담 자체가 곧바로 위반이 되는 것은 아닙니다). 본사가 좋은 뜻으로 지시한 '직원 의견 청취'가 그대로 위반이 되는 경우가 있습니다.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "unfair labor practice",
          source: "Cornell LII (29 U.S.C. §158)",
          quote:
            "It shall be an unfair labor practice for a labor organization or its agents—",
          url: "https://www.law.cornell.edu/uscode/text/29/158",
          checkedOn: "2026-09-14",
        },
        {
          term: "unfair labor practices",
          source: "U.S. Department of Labor (Glossary)",
          quote:
            "Defined by the National Labor Relations Act and by the Taft-Hartley Act as practices of discrimination, coercion, and intimidation prohibited to labor and management.",
          url: "https://www.dol.gov/general/aboutdol/history/glossary",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["단체교섭", "근로시간 면제", "노동위원회"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "조정",
    aliases: ["노동쟁의 조정", "조정신청"],
    domain: "집단노사",
    summary: "노동쟁의가 발생했을 때 노동위원회가 개입해 합의를 이끄는 절차.",
    usages: [
      {
        english: "mediation",
        register: "법령",
        meaning: "노조법 제53조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제53조",
        },
        evidence: {
          quote:
            "The Labor Relations Commission shall commence the mediation without delay when any one of the parties concerned file an application for mediation of a labor dispute to said Commission, and both parties concerned shall undertake the proceedings of mediation with good faith.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**조정을 거치지 않으면 쟁의행위를 할 수 없습니다**(조정전치). 본사에는 파업 전 반드시 지나야 하는 관문으로 설명하십시오. 조정 기간에는 쟁의행위가 제한됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["쟁의행위", "중재", "노동위원회"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "중재",
    aliases: ["노동쟁의 중재", "중재재정"],
    domain: "집단노사",
    summary:
      "노동위원회가 판정으로 분쟁을 매듭짓는 절차. 재정은 단체협약과 같은 효력을 가진다.",
    usages: [
      {
        english: "arbitration",
        register: "법령",
        meaning: "노조법 제62조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "노동조합 및 노동관계조정법",
          article: "제62조",
        },
        evidence: {
          quote:
            "The Labor Relations Commission shall conduct arbitration in the case falling under any of the following subparagraphs.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**노동쟁의가 중재에 회부된 날부터 15일간 쟁의행위를 할 수 없고**(제63조) 중재재정은 단체협약과 같은 효력을 가집니다(제70조). 본사에 binding arbitration 이라고 설명하면 무게가 전달됩니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "노동조합 및 노동관계조정법", article: "제70조" }],
    },
    related: ["조정", "단체협약"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "노동위원회",
    aliases: ["지노위", "중노위", "노동위"],
    domain: "집단노사",
    summary:
      "부당해고·부당노동행위 등을 심판하는 준사법적 행정기관. 지방·중앙 2심 구조다.",
    usages: [
      {
        english: "Labor Relations Commission",
        register: "법령",
        meaning: "근로기준법 영문본의 공식 기관명.",
        source: { tier: 1, law: "근로기준법", article: "제13조" },
        evidence: {
          quote:
            'An employer or an employee shall report on, or attend meetings relating to, necessary matters without delay, whenever the Minister of Employment and Labor, a Labor Relations Commission under the Labor Relations Commission Act (hereinafter referred to as "Labor Relations Commission"), or a labor inspector requests to do so…',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "National Labor Relations Commission (NLRC)",
        register: "분쟁",
        meaning:
          "중앙노동위원회를 가리킬 때. 고용노동부 영문 홈페이지가 이 표기를 쓴다.",
        source: {
          tier: 3,
          publisher: "고용노동부",
          title: "Labor Standards (Policy)",
          url: "https://www.moel.go.kr/english/policy/laborStandards.do",
        },
        evidence: {
          quote:
            "Any party dissatisfied with the competent Regional Labor Relations Commission's corrective order or decision to dismiss the case may file an appeal with the National Labor Relations Commission.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "미국의 NLRB(National Labor Relations Board)와 다른 기관이다. 미국계 본사에 약어만 쓰면 혼동한다.",
      },
      {
        english: "Regional Labor Relations Commission",
        register: "분쟁",
        meaning:
          "지방노동위원회. 사건은 이곳에서 시작하고, 불복하면 중앙노동위원회로 간다.",
        source: {
          tier: 3,
          publisher: "고용노동부",
          title: "Labor Standards (Policy)",
          url: "https://www.moel.go.kr/english/policy/laborStandards.do",
        },
        evidence: {
          quote:
            "Each discrimination case is handled by the Regional Labor Relations Commission or the Regional Employment and Labor Office having jurisdiction over the seat of the workpalce where the discrimination occurred.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사에 labor court 라고 옮기는 경우가 있는데 **법원이 아닙니다.** 행정기관이고, **지방노동위원회 판정에 불복하면 중앙노동위원회 재심을 거치고, 중앙노동위원회 재심판정에 불복하면 행정소송**으로 갑니다. 절차가 빠르고 비용이 들지 않아 근로자가 먼저 찾는 곳이라는 점을 함께 설명하십시오.",
      basis: ["이 항목의 출처", "AI 일반지식(미검증)"],
    },
    related: ["구제신청", "재심신청", "부당노동행위"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "노사협의회",
    aliases: ["협의회", "works council"],
    domain: "집단노사",
    summary:
      "상시 30명 이상 사업장이 설치해야 하는 근로자·사용자 동수의 협의 기구.",
    usages: [
      {
        english: "Labor-Management Council",
        register: "법령",
        meaning:
          "근로자참여 및 협력증진에 관한 법률 제4조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "근로자참여 및 협력증진에 관한 법률",
          article: "제4조",
        },
        evidence: {
          quote:
            'A labor-management council (hereinafter referred to as a "council") shall be established at each business or workplace which is vested with the right to decide working conditions: Provided, That this shall not apply to any business or workplace employing less than 30 people on a regular basis.',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "Labor Management Council (LMC)",
        register: "본사보고",
        meaning:
          "상시 30명 이상이면 노사 동수로 설치해야 하는 기구. 본사에 설명할 때 쓰는 영문 표기다.",
        source: {
          tier: 2,
          outlet: "Littler Mendelson P.C.",
          firm: "미국 노동·고용 전문 로펌",
          title:
            "10 Things Employers Should Know About Korean Labor Law (2025. 3. 25.)",
          url: "https://www.littler.com/news-analysis/asap/10-things-employers-should-know-about-korean-labor-law",
        },
        evidence: {
          quote:
            "At this stage, the company is obliged to establish a Labor Management Council (LMC) with the same number of employer and employee representatives.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
      {
        english: "labour-management council",
        register: "본사보고",
        meaning:
          "노사협의회와 고충처리위원을 함께 두어야 한다는 점을 담은 문장.",
        source: {
          tier: 2,
          outlet:
            "Chambers Global Practice Guides, HR Internal Investigations 2026 — South Korea",
          firm: "법무법인 율촌(Yulchon) 집필",
          title:
            "HR Internal Investigations 2026 — South Korea (Last Updated 2026. 2. 4.)",
          url: "https://practiceguides.chambers.com/practice-guides/hr-internal-investigations-2026/south-korea",
        },
        evidence: {
          quote:
            "For workplaces with 30 or more employees, a labour-management council and a grievance-handling committee must be established, with their members chosen from the council.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "**유럽계 본사의 works council 과 가장 가까운 기구**이고, 노동조합과는 다릅니다. 노조가 있어도 별도로 설치해야 합니다(제5조). 상시 30명 이상이면 **노조 유무와 무관하게 설치 의무**가 있는데, 이를 모르고 운영하지 않는 외국계 사업장이 많습니다. 분기마다 회의를 열고 회의록을 비치해야 합니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로자참여 및 협력증진에 관한 법률", article: "제5조" }],
    },
    related: ["노동조합", "고충처리위원", "근로자대표"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "고충처리위원",
    aliases: ["고충처리", "grievance"],
    domain: "집단노사",
    summary: "근로자의 고충을 청취하고 처리하기 위해 두어야 하는 위원.",
    usages: [
      {
        english: "grievance handling committee",
        register: "법령",
        meaning: "근로자참여법 제26조 조문 표제의 영문 표기.",
        source: {
          tier: 1,
          law: "근로자참여 및 협력증진에 관한 법률",
          article: "제26조",
        },
        evidence: {
          quote:
            "Every business or workplace shall have a grievance handling committee to hear and handle employees' grievances: Provided, That the foregoing shall not apply to a business or workplace employing less than 30 persons on a regular basis.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 grievance procedure 와 목적이 같습니다. 다만 한국은 **상시 30명 이상 사업·사업장이면 기구를 두는 것 자체가 의무**이고(30명 미만은 제외됩니다), 고충을 접수하면 10일 이내에 처리 결과를 알려야 합니다. 본사 글로벌 핫라인만 있고 사내 고충처리위원이 없으면 의무를 이행한 것이 아닙니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["노사협의회", "직장 내 괴롭힘"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  // ───────────────────────── 산업안전 ─────────────────────────
  {
    term: "직장 내 괴롭힘",
    aliases: ["괴롭힘", "갑질", "harassment"],
    domain: "산업안전",
    summary:
      "지위·관계의 우위를 이용해 업무상 적정범위를 넘어 신체적·정신적 고통을 주거나 근무환경을 악화시키는 행위.",
    usages: [
      {
        english: "workplace harassment",
        register: "법령",
        meaning: "근로기준법 제76조의2 조문 표제의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제76조의2" },
        evidence: {
          quote:
            "Article 76-2 (Prohibition against Workplace Harassment) No employer or employee shall cause physical or mental suffering to other employees or deteriorate the work environment beyond the appropriate scope of work by taking advantage of superiority in rank, relationship, etc.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "measures in cases of workplace harassment",
        register: "법령",
        meaning: "신고를 받았을 때의 조사·조치 의무를 정한 조문의 영문 표기.",
        source: { tier: 1, law: "근로기준법", article: "제76조의3" },
        evidence: {
          quote:
            "Anyone who has learned the occurrence of workplace harassment may report such fact to the employer. (2) Where an employer receives a report under paragraph (1) or becomes aware of the occurrence of workplace harassment, the employer shall, without delay, conduct an objective investigation.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "workplace harassment",
        register: "본사보고",
        meaning:
          "로펌이 옮긴 정의 번역. **성적 요소를 요구하지 않고 지위·관계 우위만으로 성립**한다는 점이 문장에 그대로 드러난다.",
        source: {
          tier: 2,
          outlet: "Kim & Chang",
          firm: "김·장 법률사무소",
          title:
            "MOEL Announces Amendment to the Labor Standards Act Regarding Workplace Harassment (2019. 5. 15.)",
          url: "https://www.kimchang.com/en/insights/detail.kc?sch_section=4&idx=19126",
        },
        evidence: {
          quote:
            "an act by an employer or worker, which causes physical or mental suffering, or worsens the working conditions/environment of another worker, by taking advantage of his/her position or relationship within the workplace beyond the appropriate scope of work.",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
      },
      {
        english: "hostile work environment",
        register: "본사보고",
        meaning:
          "광장은 **미국 노동법 관용어**를 끌어와 옮겼다. 미국계 본사가 가장 빨리 알아듣는 번역이다.",
        source: {
          tier: 2,
          outlet: "Lee & Ko",
          firm: "법무법인 광장",
          title: "Labor & Employment Newsletter – January 2019",
          url: "https://www.leeko.com/newsl/labor/201901/labor1901_eng.html",
        },
        evidence: {
          quote:
            "acts inflicting physical/mental distress to or creating a hostile work environment for co-workers unreasonably through use (or abuse) or one's position/relationship in the workplace",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "미국법의 hostile work environment 는 차별 사유와 결합해야 성립한다. 한국 괴롭힘은 그 요건이 없으므로, 이 번역을 쓸 때는 범위가 더 넓다는 점을 덧붙인다.",
      },
    ],
    aiOpinion: {
      body: "본사의 anti-bullying 정책과 목적은 같지만 **한국은 법정 의무**입니다. 신고를 받으면 **지체 없이 객관적으로 조사**하고, 조사 기간에 피해자를 보호하며, 신고자·피해자에게 불리한 처우를 하면 별도의 형사처벌 대상입니다. ⚠️ **미국 연방법의 harassment 는 보호사유(인종·성·연령·장애 등)와의 연결이 성립 요건**입니다. 그래서 `workplace harassment` 로만 옮기면 본사가 「우리 보호사유 목록에 없으니 해당 없음」으로 처리합니다. **지위 우위를 이용한 업무상 괴롭힘 전반**이라는 범위를 먼저 밝히고, 필요하면 `workplace bullying` 을 함께 적으십시오.",
      basis: ["영어사전·해외 공식자료", "AI 일반지식(미검증)"],
      englishRefs: [
        {
          term: "harassment",
          source: "U.S. EEOC",
          quote:
            "Harassment is unwelcome conduct that is based on race, color, religion, sex (including sexual orientation, transgender status, or pregnancy), national origin, older age (beginning at age 40), disability, or genetic information (including family medical history).",
          url: "https://www.eeoc.gov/harassment",
          checkedOn: "2026-09-14",
        },
      ],
    },
    related: ["직장 내 성희롱", "고충처리위원", "불리한 처우의 금지"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "AI 초안", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "산업재해",
    aliases: ["산재", "업무상 재해"],
    domain: "산업안전",
    summary:
      "노무를 제공하는 사람이 업무와 관계되는 원인으로 사망·부상하거나 질병에 걸리는 것.",
    usages: [
      {
        english: "industrial accident",
        register: "법령",
        meaning: "산업안전보건법 영문본의 표준 대응어.",
        source: { tier: 1, law: "산업안전보건법", article: "제2조제1호" },
        evidence: {
          quote:
            '"Industrial accident" means any death, injury, or disease of a person who provides labor caused by structures, equipment, raw materials, gas, vapor, powder, dust, etc., related to the duties, or by work or other duties',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "occupational accident",
        register: "법령",
        meaning: "산재보험법이 업무상 재해 인정 기준을 정하며 쓰는 표현.",
        source: { tier: 1, law: "산업재해보상보험법", article: "제37조" },
        evidence: {
          quote:
            "If an employee suffers any injury, disease, or disability or dies due to any of the following causes, it shall be deemed an occupational accident; provided, this shall not apply where there is no proximate causal relation between his or her duties and the accident.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 work-related injury 로 설명하면 통합니다. 반드시 함께 전할 것은 **요양을 위한 휴업 기간과 그 후 30일간은 해고가 금지**된다는 점입니다(근기법 제23조제2항). 본사가 장기 결근으로 보고 해고를 검토하면 먼저 막아야 합니다.",
      basis: ["법령 조문", "AI 일반지식(미검증)"],
      refs: [{ law: "근로기준법", article: "제23조제2항" }],
    },
    related: ["중대재해", "요양급여", "업무상 재해 인정기준"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "중대재해",
    aliases: ["중대산업재해", "중처법"],
    domain: "산업안전",
    summary:
      "사망자가 발생하거나 다수의 피해자가 생긴 산업재해. 경영책임자의 의무는 중대재해처벌법이 따로 규정한다.",
    usages: [
      {
        english: "serious accident",
        register: "법령",
        meaning:
          "산업안전보건법이 직접 정의하는 표준 대응어. 사망 등 중대한 피해가 있거나 다수의 피해자가 발생한 산업재해를 뜻한다.",
        source: { tier: 1, law: "산업안전보건법", article: "제2조제2호" },
        evidence: {
          quote:
            '"Serious accident" means an industrial accident prescribed by Decree of the Ministry of Employment and Labor, resulting in death or other severe damage or causing a number of victims',
          checkedOn: "2026-08-30",
          by: "원문 확인",
        },
      },
      {
        english: "Serious Accidents Punishment Act",
        register: "법령",
        meaning:
          "중대재해처벌법의 공식 영문 제명. 법률 이름을 인용할 때는 이 표기를 그대로 쓴다.",
        source: {
          tier: 1,
          law: "중대재해 처벌 등에 관한 법률",
          article: "법 제명",
        },
        evidence: {
          quote: "SERIOUS ACCIDENTS PUNISHMENT ACT",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "Serious Accident Punishment Act",
        register: "법령",
        meaning:
          "고용노동부 영문 홈페이지가 쓰는 표기. **법제처 영문본은 Accidents(복수)** 인데 고용노동부는 단수로 적는다.",
        source: {
          tier: 3,
          publisher: "고용노동부",
          title: "Occupational Safety and Health (Policy)",
          url: "https://www.moel.go.kr/english/policy/occupational.do",
        },
        evidence: {
          quote:
            "Full revision of the Occupational Safety and Health Act (“OSH Act”), and enactment of the Serious Accident Punishment Act",
          checkedOn: "2026-09-01",
          by: "원문 확인",
        },
        caution:
          "법률 이름을 인용하는 문서(계약서·의견서)에서는 법제처 영문본 표기(Serious Accidents Punishment Act)를 쓴다. 정부 보도자료를 옮길 때만 단수 표기가 나타난다.",
      },
      {
        english: "fatal occupational accident",
        kind: "비교",
        register: "본사보고",
        meaning:
          "사망 사고에 초점을 둔 표현. 이 법을 다룬 학술 문헌이 쓰는 말이라 해외 독자에게 성격이 바로 전달된다.",
        caution:
          "**중대재해는 사망 사고만이 아닙니다** — 6개월 이상 치료가 필요한 부상, 직업성 질병자 발생도 포함됩니다. 이 말로만 옮기면 본사가 범위를 사망으로 좁혀 읽습니다. 법령 대응어는 serious accident 이고, 이 표현은 학술 문헌이 그렇게 부른다는 기록으로만 씁니다.",
        source: {
          tier: 4,
          author: "Seong-Kyu Kang",
          title:
            "Challengeable Legislation Against Fatal Occupational Accidents in Republic of Korea: Serious Accidents Punishment Act of Korea",
          where: "Safety and Health at Work",
          year: "2022",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9347005/",
        },
        evidence: {
          quote:
            "employers shall be imprisoned for more than one year if a fatal occupational accident occurs.",
          checkedOn: "2026-08-30",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "⚠️ **이름이 같은 두 개념을 구분하십시오.** 산업안전보건법의 「중대재해」와 중대재해처벌법의 「중대산업재해」는 **피해 기준도 법적 효과도 다릅니다**(중처법의 「중대재해」는 중대산업재해와 중대시민재해를 함께 가리키는 상위 개념입니다). major industrial accident 처럼 규모를 강조하는 일반 표현도 쓰이지만 법령 용어가 아닙니다. 본사에 전달할 때 핵심은 **경영책임자 개인에게 형사책임이 갈 수 있는 구조**라는 점입니다. '안전관리 미비'가 아니라 '경영진 개인 책임'의 문제로 설명해야 실제 자원이 배정됩니다.",
      basis: ["이 항목의 출처", "AI 일반지식(미검증)"],
    },
    related: ["산업재해", "경영책임자", "위험성평가"],
    madeBy: ["법령 원문 조회", "리서치 에이전트", "원문 대조 검증"],
    verifiedOn: "2026-09-01",
    status: "confirmed",
  },
  {
    term: "경영책임자",
    aliases: ["경영책임자등", "안전보건 최고책임자"],
    domain: "산업안전",
    summary:
      "사업을 대표하고 총괄하는 권한과 책임이 있는 사람 또는 이에 준하여 안전보건을 담당하는 사람.",
    usages: [
      {
        english: "responsible managing officer",
        register: "법령",
        meaning:
          "중대재해처벌법이 안전보건 확보의무의 주체를 가리키며 쓰는 표현.",
        source: {
          tier: 1,
          law: "중대재해 처벌 등에 관한 법률",
          article: "제4조",
        },
        evidence: {
          quote:
            "A business owner or a responsible managing officer, etc. shall take the following measures to prevent hazards or risks to the safety and health of workers in the business or place of business that the business owner, corporation, or institution actually controls, operates, or manages…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 **한국 법인의 대표이사가 형사 피고인이 될 수 있는 자리**라고 설명해야 무게가 전달됩니다. 안전보건 담당 임원을 두었다는 **명칭만으로 책임이 옮겨가지는 않는다**는 점도 함께 짚으십시오. 다만 법은 대표·총괄자 **또는 이에 준하여 안전보건 업무를 담당하는 사람**도 경영책임자등에 넣으므로(중처법 제2조제9호가목), 그런 권한과 책임을 실질로 부여받은 사람이면 해당할 수 있습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["중대재해", "사용자"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "안전보건관리책임자",
    aliases: ["안보책", "안전보건 책임자"],
    domain: "산업안전",
    summary: "사업장의 안전·보건 업무를 총괄 관리하는 사람.",
    usages: [
      {
        english: "person in charge of safety and health management",
        register: "법령",
        meaning: "산업안전보건법 제15조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제15조" },
        evidence: {
          quote:
            "A person who supervises and manages the duties prescribed in each subparagraph of paragraph (1) (hereinafter referred to as “person in charge of safety and health management”) shall direct and supervise safety officers referred to in Article 17 and health officers referred to in Article 18.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**사업장을 실질적으로 총괄하는 사람**이 맡습니다. 본사가 안전 담당 실무자를 지정하면 된다고 생각하기 쉬운데, **직급·직함이 아니라 실제 총괄 권한과 관리 책임**이 기준입니다(공장장·지점장급이 맡는 것은 실무 예시일 뿐 법정 기준이 아닙니다).",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["관리감독자", "경영책임자", "산업안전보건위원회"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "관리감독자",
    aliases: ["현장 관리감독자"],
    domain: "산업안전",
    summary:
      "생산과 관련된 업무와 소속 직원을 직접 지휘·감독하는 직위에 있는 사람.",
    usages: [
      {
        english: "supervisor",
        register: "법령",
        meaning: "산업안전보건법 제16조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제16조" },
        evidence: {
          quote:
            "A business owner shall require a person in a position of directly controlling and supervising production-related operations and employees at the place of business (hereinafter referred to as “supervisor”) to perform duties related to occupational safety and health, as prescribed by Presidential Decree.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "별도로 임명하는 자리가 아닙니다. 다만 **직급명이 아니라 생산 관련 업무와 소속 직원을 직접 지휘·감독하는 실질**로 판단합니다 — 팀장·파트장이라고 모두 해당하는 것은 아닙니다. 본사가 supervisor 를 일반 관리자 호칭으로 이해하면 법상 의무가 붙는다는 사실이 전달되지 않습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["안전보건관리책임자", "안전보건교육"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "안전관리자",
    aliases: ["안전관리자 선임"],
    domain: "산업안전",
    summary: "안전에 관한 기술적 사항을 담당하는 전문 인력.",
    usages: [
      {
        english: "safety officer",
        register: "법령",
        meaning: "산업안전보건법 제17조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제17조" },
        evidence: {
          quote:
            "A business owner shall have a person at the place of business to assist him or her or a person in charge of safety and health management regarding technical matters related to safety, among the matters prescribed in the subparagraphs of Article 15(1)…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**자격 요건과 선임 기준이 업종·규모별로 정해져 있습니다.** 본사가 EHS manager 를 한 명 두면 된다고 생각하면 어긋납니다. 겸직 가능 여부도 규모에 따라 달라집니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["보건관리자", "안전보건관리책임자"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "보건관리자",
    aliases: ["보건관리자 선임", "산업보건의"],
    domain: "산업안전",
    summary: "보건에 관한 기술적 사항을 담당하는 전문 인력.",
    usages: [
      {
        english: "health officer",
        register: "법령",
        meaning: "산업안전보건법 제18조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제18조" },
        evidence: {
          quote:
            "A business owner shall have a person at the place of business to assist him or her or a person in charge of safety and health management regarding technical matters related to health, among the matters prescribed in the subparagraphs of Article 15(1)…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "사무직 중심 사업장도 규모가 되면 선임 대상입니다. 본사가 제조업만의 문제로 여기지 않도록, 선임 여부와 인원은 **사업의 종류와 상시근로자 수를 함께 보아** 시행령 별표로 정해진다는 점을 설명하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["안전관리자"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "산업안전보건위원회",
    aliases: ["산안위", "안전보건위원회"],
    domain: "산업안전",
    summary:
      "안전·보건에 관한 중요 사항을 심의·의결하기 위해 근로자와 사용자 동수로 구성하는 기구.",
    usages: [
      {
        english: "occupational safety and health committee",
        register: "법령",
        meaning: "산업안전보건법 제24조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제24조" },
        evidence: {
          quote:
            "To deliberate on and decide important matters concerning safety and health at the place of business, a business owner shall establish and operate an occupational safety and health committee comprised of an equal number of members representing the employees and the employer.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "노사협의회와 별개 기구입니다. **심의·의결한 사항은 성실히 이행해야** 하므로 형식적 운영이 아니라 회의록이 남는 절차로 설계해야 합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["노사협의회", "안전보건관리규정"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "안전보건관리규정",
    aliases: ["안전보건규정"],
    domain: "산업안전",
    summary: "사업장의 안전·보건 관리 사항을 정해 작성·게시해야 하는 규정.",
    usages: [
      {
        english: "safety and health management regulations",
        register: "법령",
        meaning: "산업안전보건법 제25조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제25조" },
        evidence: {
          quote:
            "To maintain safety and health in the place of business, a business owner shall prepare safety and health management regulations which include the following matters.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "취업규칙과 별개 문서입니다. 작성·변경 시에는 **산업안전보건위원회의 심의·의결**을 거쳐야 하고, 위원회가 없는 사업장은 **근로자대표의 동의**가 필요합니다. 취업규칙 규정은 법이 정하지 않은 사항에 보충적으로 준용될 뿐이며, 이 규정은 단체협약·취업규칙에 반할 수 없습니다. 본사의 글로벌 EHS 정책을 번역해 붙이는 것만으로는 부족합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["취업규칙", "산업안전보건위원회"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "위험성평가",
    aliases: ["리스크 평가", "위험성 평가"],
    domain: "산업안전",
    summary:
      "유해·위험요인을 찾아 부상·질병의 가능성과 중대성을 추정하고 감소대책을 실행하는 과정.",
    usages: [
      {
        english: "risk assessment",
        register: "법령",
        meaning: "산업안전보건법 제36조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제36조" },
        evidence: {
          quote:
            "A business owner shall identify hazardous or risk factors caused by buildings, machinery and apparatus, equipment, raw materials, gas, steam, dust, specific work behaviors of employees, or other duties and evaluate whether the degree of the risks that can cause injury and illness is within acceptable limits…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 risk assessment 로 바로 통합니다. 한국에서 중요한 것은 **중대재해처벌법 대응의 핵심 증빙**이 된다는 점입니다. 실시했다는 기록과 개선 조치가 남아 있어야 경영책임자의 의무 이행을 설명할 수 있습니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["중대재해", "안전조치", "경영책임자"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "안전조치",
    aliases: ["안전 조치 의무"],
    domain: "산업안전",
    summary:
      "기계·폭발성 물질·전기·추락 위험 등에 대해 사업주가 해야 하는 예방 조치.",
    usages: [
      {
        english: "safety measures",
        register: "법령",
        meaning: "산업안전보건법 제38조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제38조" },
        evidence: {
          quote:
            "A business owner shall take measures necessary to prevent industrial accidents caused by any of the following dangers.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**구체적인 기준이 고용노동부 규칙에 수백 개 조항으로 정해져 있습니다.** 본사의 글로벌 기준을 따랐다는 이유로 면제되지 않습니다. 두 기준을 대조해 더 엄격한 쪽을 적용하는 방식으로 정리하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["보건조치", "위험성평가", "도급인의 안전조치"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "보건조치",
    aliases: ["보건 조치 의무"],
    domain: "산업안전",
    summary:
      "분진·소음·화학물질·근골격계 부담작업 등 건강장해를 예방하기 위한 조치.",
    usages: [
      {
        english: "health measures",
        register: "법령",
        meaning: "산업안전보건법 제39조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제39조" },
        evidence: {
          quote:
            'A business owner shall take measures necessary to prevent any of the following health impairments (hereinafter referred to as "health measures").',
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "사무직 사업장에서 놓치기 쉬운 것이 **근골격계 부담작업과 직무스트레스**입니다. 본사가 공장 이슈로만 보면 사무실 인간공학 조치가 빠집니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["안전조치", "감정노동 보호"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "감정노동 보호",
    aliases: ["고객응대 근로자", "폭언 예방조치"],
    domain: "산업안전",
    summary:
      "고객의 폭언 등으로 인한 건강장해를 예방하기 위해 사업주가 해야 하는 조치.",
    usages: [
      {
        english:
          "measures for preventing health impairments caused by abusive language of customers",
        register: "법령",
        meaning: "산업안전보건법 제41조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제41조" },
        evidence: {
          quote:
            "In order to prevent health impairments caused by abusive language, assault, or any other conduct of customers inflicting physical or mental pains beyond a certain limit (hereafter in this Article referred to as “abusive language, etc.”) on customer service employees… a business owner shall take necessary measures as prescribed by Decree of the Ministry of Employment and Labor.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에 **customer-facing 직원 보호가 법정 의무**인 나라는 드물어 설명이 필요합니다. 업무 중단·전환 요청을 이유로 불리한 처우를 하면 위반입니다. 콜센터·매장·고객지원 조직이 있으면 반드시 점검하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["보건조치", "직장 내 괴롭힘"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "안전보건교육",
    aliases: ["안전교육", "정기교육"],
    domain: "산업안전",
    summary: "정기·채용 시·작업내용 변경 시·특별교육으로 나뉘는 법정 교육.",
    usages: [
      {
        english: "safety and health education for employees",
        register: "법령",
        meaning: "산업안전보건법 제29조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제29조" },
        evidence: {
          quote:
            "A business owner shall regularly educate the employees on safety and health, as prescribed by Decree of the Ministry of Employment and Labor. (2) When a business owner employs an employee or changes the scope of the job of an employee, he or she shall provide the employee with the safety and health education necessary for the relevant job, as prescribed by Decree of the Ministry of Employment and Labor…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**시간 수와 대상이 법으로 정해져 있고 기록을 보존해야** 합니다. 본사 글로벌 온라인 교육으로 갈음하려면 내용과 시간이 요건을 충족하는지 대조해야 합니다. 실시 내역을 제대로 기록·관리하지 않으면 **이행을 입증하기 어려워** 감독 대응에 취약해집니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["관리감독자", "위험성평가"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "도급인의 안전조치",
    aliases: ["원청 안전조치", "도급 안전"],
    domain: "산업안전",
    summary:
      "도급인이 자신의 사업장에서 일하는 수급인 근로자에 대해서도 지는 안전·보건 조치 의무.",
    usages: [
      {
        english: "safety and health measures by contractees",
        register: "법령",
        meaning: "산업안전보건법 제63조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업안전보건법", article: "제63조" },
        evidence: {
          quote:
            "Where employees of a relevant contractor work at the place of business of a contractee, the contractee shall take necessary safety and health measures, such as installing safety and health facilities.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**우리 직원이 아니라는 이유로 빠질 수 없습니다.** 청소·경비·시설관리 같은 상시 도급이 있는 사업장에서 특히 문제가 됩니다. 본사에 contractor safety 는 계약 조항이 아니라 법정 의무라고 설명하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["안전조치", "사용사업주", "중대재해"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  // ───────────────────────── 사회보험 ─────────────────────────
  {
    term: "실업급여",
    aliases: ["실업수당", "고용보험 급여"],
    domain: "사회보험",
    summary: "구직급여와 취업촉진 수당으로 구성되는 고용보험 급여.",
    usages: [
      {
        english: "unemployment benefits",
        register: "법령",
        meaning: "고용보험법 제37조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "고용보험법", article: "제37조" },
        evidence: {
          quote:
            "Unemployment benefits shall be classified into job-seeking benefits and employment promotion allowances.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "unemployment-insurance benefits",
        register: "본사보고",
        meaning:
          "주 15시간 미만 근로는 수급자격 기간에 산입되지 않는다는 현행 규칙. 단시간 근로자를 쓰는 본사가 가장 자주 놓치는 지점이다.",
        source: {
          tier: 2,
          outlet: "Ius Laboris",
          firm: "법무법인 율촌(Yulchon) 집필",
          title:
            "A new minimum wage for 2026 and other key updates from South Korea (2025. 11. 26.)",
          url: "https://iuslaboris.com/insights/a-new-minimum-wage-for-2026-and-other-key-updates-from-south-korea/",
        },
        evidence: {
          quote:
            "Under the current law in South Korea, if an employee works less than 15 hours per week on average (over four weeks), the employment period does not count towards eligibility for unemployment-insurance benefits.",
          checkedOn: "2026-09-08",
          by: "원문 확인",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 severance 와 혼동하는 경우가 있습니다. **회사가 주는 돈이 아니라 고용보험에서 나가는 급여**입니다. 이직확인서의 이직사유는 **수급자격 판단의 중요한 자료**입니다. 다만 최종 수급자격은 **직업안정기관이 실제 이직사유와 법정 요건을 확인해 결정**합니다 — 회사가 적은 코드가 그대로 결론이 되는 것은 아니지만, 그만큼 책임 있게 작성해야 합니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["구직급여", "이직 사유에 따른 수급자격 제한"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "구직급여",
    aliases: ["실업급여 본체", "구직수당"],
    domain: "사회보험",
    summary:
      "이직 전 18개월 중 피보험 단위기간이 180일 이상이고 비자발적으로 이직한 경우 지급되는 급여.",
    usages: [
      {
        english: "job-seeking benefits",
        register: "법령",
        meaning: "고용보험법 제40조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "고용보험법", article: "제40조" },
        evidence: {
          quote:
            "Where an insured employee who has left his or her job satisfies all of the following requirements, job-seeking benefits shall be paid to him or her.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사에는 unemployment insurance benefit 으로 설명하면 통합니다. **자발적 이직이면 원칙적으로 받지 못한다**는 점 때문에 퇴직 협의 과정에서 사유 기재가 늘 쟁점이 됩니다. 사실과 다르게 적어 주는 것은 부정수급 방조가 되므로 하지 마십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["실업급여", "권고사직", "피보험자격"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "피보험자격",
    aliases: ["고용보험 취득", "자격 상실"],
    domain: "사회보험",
    summary: "고용보험 피보험자가 되는 날과 자격을 잃는 날.",
    usages: [
      {
        english: "date of acquisition of insured status",
        register: "법령",
        meaning: "고용보험법 제13조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "고용보험법", article: "제13조" },
        evidence: {
          quote:
            "An insured employee shall acquire insured status as of the first day of employment with an employing unit subject to this Act.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
      {
        english: "date of loss of insured status",
        register: "법령",
        meaning: "고용보험법 제14조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "고용보험법", article: "제14조" },
        evidence: {
          quote:
            "An insured employee shall lose his or her insured status on any of the following dates.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "취득·상실 신고는 사용자의 의무이고, **신고하지 않거나 거짓으로 신고하면 과태료 부과 대상**입니다(지연신고도 법정기한 위반이 될 수 있습니다). 본사 온보딩 절차가 느려 신고가 늦어지는 사례가 잦으니, 입사일 기준으로 자동 처리되도록 만들어 두십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["구직급여"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "이직 사유에 따른 수급자격 제한",
    aliases: ["자발적 이직", "수급자격 제한"],
    domain: "사회보험",
    summary:
      "자기 사정으로 이직하거나 중대한 귀책사유로 해고된 경우 구직급여 수급자격을 제한한다.",
    usages: [
      {
        english:
          "restriction on qualifying conditions depending on reasons for job-leaving",
        register: "법령",
        meaning: "고용보험법 제58조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "고용보험법", article: "제58조" },
        evidence: {
          quote:
            "Article 58 (Restriction on qualifying conditions depending on reasons for job-leaving) Notwithstanding Article 40, an insured employee shall be disqualified for benefits if the head of an employment security office determines that any of the following subparagraphs applies to the insured employee.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "권고사직 협의에서 근로자가 가장 신경 쓰는 대목입니다. **이직확인서의 사유 코드가 실질과 달라지면 나중에 부정수급 문제로 회사까지 조사 대상**이 됩니다. 회사가 편의를 봐 주는 영역이 아니라고 본사에도 분명히 해 두십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["구직급여", "권고사직"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "육아휴직 급여",
    aliases: ["육휴급여"],
    domain: "사회보험",
    summary:
      "육아휴직을 30일 이상 사용한 피보험자에게 고용보험이 지급하는 급여.",
    usages: [
      {
        english: "child care leave benefits",
        register: "법령",
        meaning: "고용보험법 제70조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "고용보험법", article: "제70조" },
        evidence: {
          quote:
            "The Minister of Employment and Labor shall pay child care leave benefits to an insured employee whose qualifying days in covered employment under Article 41 before the date child care leave begins amount to at least 180 days from among such insured employees who have been granted child care leave…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**회사가 아니라 고용보험이 지급합니다.** 본사가 인건비 부담을 걱정할 때 이 점을 먼저 알리면 인력 운영·비용 계획을 설명하기가 쉬워집니다. ⚠️ 다만 **육아휴직은 요건을 갖춘 근로자의 법정 권리이지 회사가 승인 여부를 정하는 사안이 아닙니다** — 「승인」이라는 말을 쓰지 마십시오. 다만 회사가 확인서를 제출해야 지급이 진행됩니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["육아휴직"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "출산전후휴가 급여",
    aliases: ["출산휴가 급여"],
    domain: "사회보험",
    summary: "출산전후휴가·유산사산휴가 기간에 고용보험이 지급하는 급여.",
    usages: [
      {
        english: "maternity leave benefits",
        register: "법령",
        meaning: "고용보험법 제75조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "고용보험법", article: "제75조" },
        evidence: {
          quote:
            "Where an insured employee is granted a maternity leave, or a miscarriage or stillbirth leave under Article 74 of the Labor Standards Act, a paternity leave under Article 18-2 of the Equal Employment Opportunity and Work-Family Balance Assistance Act, or a leave of absence for infertility treatment…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "최초 60일(다태아 75일)이 **법정 유급기간**입니다. **우선지원대상기업은 90일분을 고용보험에서 지원**받고 사용자는 최초 유급기간의 통상임금과 보험급여의 **차액**을 부담합니다. 그 밖의 기업은 구조가 다릅니다 — 「회사 초기 + 보험 후반」으로 나눠 설명하지 마십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["출산전후휴가"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "업무상 재해 인정기준",
    aliases: ["업무상 재해", "산재 인정"],
    domain: "사회보험",
    summary: "업무상 사고·업무상 질병·출퇴근 재해의 인정 기준.",
    usages: [
      {
        english: "standards for recognition of occupational accidents",
        register: "법령",
        meaning: "산재보험법 제37조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업재해보상보험법", article: "제37조" },
        evidence: {
          quote:
            "If an employee suffers any injury, disease, or disability or dies due to any of the following causes, it shall be deemed an occupational accident; provided, this shall not apply where there is no proximate causal relation between his or her duties and the accident.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사가 놀라는 것은 **출퇴근 재해가 포함**된다는 점입니다. 그리고 산재 인정은 근로복지공단이 판단하며 **회사가 동의하거나 반대해서 정해지는 것이 아닙니다.** 회사가 할 일은 사실관계를 정확히 확인해 주는 것입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["산업재해", "요양급여"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "요양급여",
    aliases: ["산재 치료비"],
    domain: "사회보험",
    summary: "업무상 재해로 부상하거나 질병에 걸린 근로자의 치료에 드는 비용.",
    usages: [
      {
        english: "medical care benefits",
        register: "법령",
        meaning: "산재보험법 제40조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업재해보상보험법", article: "제40조" },
        evidence: {
          quote:
            "Medical care benefits shall be paid to any employee who suffers from an injury or disease caused by reason of his or her duties.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "본사의 상해보험과 성격이 다릅니다. **산재보험이 적용되면 회사의 민사 배상 책임과는 별개로 급여가 나갑니다.** 민간보험으로 **추가** 보상하는 것 자체가 산재 은폐는 아닙니다. 다만 **산재 신청을 막거나 법정 산재발생 보고를 피하려고 민간보험 처리로 대체하는 것**은 안 됩니다 — 그 선을 본사에 분명히 그어 주십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["업무상 재해 인정기준", "휴업급여"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "휴업급여",
    aliases: ["산재 휴업급여"],
    domain: "사회보험",
    summary:
      "요양으로 취업하지 못한 기간에 대해 평균임금의 70%를 지급하는 산재보험 급여.",
    usages: [
      {
        english: "temporary layoff benefits",
        register: "법령",
        meaning: "산재보험법 제52조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업재해보상보험법", article: "제52조" },
        evidence: {
          quote:
            "Temporary layoff benefits shall be paid to any employee who suffers an occupational injury or disease for a period during which the employee is unable to work for receiving medical care.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "영문 표기가 temporary layoff benefits 라 **정리해고(layoff)와 혼동되기 쉽습니다.** 본사에 그대로 전하면 해고 관련 급여로 오해하므로, 산재 요양 중 소득보전이라고 풀어 설명하십시오. 근로기준법의 휴업수당(shutdown allowances)과도 다른 제도입니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["요양급여", "휴업수당"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "장해급여",
    aliases: ["장해보상", "장해연금"],
    domain: "사회보험",
    summary: "치유 후 신체에 장해가 남은 경우 장해등급에 따라 지급하는 급여.",
    usages: [
      {
        english: "disability benefits",
        register: "법령",
        meaning: "산재보험법 제57조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업재해보상보험법", article: "제57조" },
        evidence: {
          quote:
            "Disability benefits shall be paid to any employee who suffers from a physical disability, etc.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "**원칙적으로 장해보상연금과 일시금 중 수급권자가 선택**합니다. 다만 **노동력을 완전히 상실한 장해등급은 연금으로 지급**하고, 청구 당시 외국에 거주하는 외국인 근로자에게는 **일시금으로 지급**하는 등 법정 예외가 있습니다(제57조제3항 단서). 본사의 disability insurance 와 달리 원칙적으로 근로자가 선택권을 가진다는 점이 다릅니다.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["요양급여", "유족급여"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "유족급여",
    aliases: ["유족보상", "유족연금"],
    domain: "사회보험",
    summary: "업무상 사유로 사망한 경우 유족에게 지급하는 급여.",
    usages: [
      {
        english: "survivors' benefits",
        register: "법령",
        meaning: "산재보험법 제62조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업재해보상보험법", article: "제62조" },
        evidence: {
          quote:
            "Survivors' benefits shall be paid to a survivor of any employee who has died due to a cause related to his or her duties. (2) Survivors' benefits shall be paid in the form of a survivors' compensation annuity or lump-sum survivors' compensation set out in Appendix 3.",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "업무상 사망은 **중대산업재해의 결과 요건에 해당할 수 있어** 중대재해처벌법 적용 여부를 즉시 함께 검토해야 합니다(실제 형사책임은 적용범위·안전보건확보의무 위반·인과관계를 따로 봅니다). 유족 대응과 형사 대응이 겹치므로 초기 발언 하나가 뒤에 증거가 됩니다. 본사 커뮤니케이션 담당자에게 반드시 사전 조율을 요청하십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["중대재해", "장해급여"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
  {
    term: "산재 심사청구",
    aliases: ["심사청구", "산재 불복"],
    domain: "사회보험",
    summary: "근로복지공단의 보험급여 결정에 불복해 심사를 청구하는 절차.",
    usages: [
      {
        english: "filing requests for examination",
        register: "법령",
        meaning: "산재보험법 제103조 조문 표제의 영문 표기.",
        source: { tier: 1, law: "산업재해보상보험법", article: "제103조" },
        evidence: {
          quote:
            "Any person who is dissatisfied with a decision, etc. made by the Service which falls under the following subparagraphs (hereinafter referred to as “decision, etc. on insurance benefits”) may file a request for examination with the Service…",
          checkedOn: "2026-09-22",
          by: "법령원문 대조",
        },
      },
    ],
    aiOpinion: {
      body: "불복 주체는 대개 근로자이지만 **회사도 보험료율에 영향을 받으므로 결과에 이해관계**가 있습니다. 다만 회사가 근로자의 산재 신청을 방해하면 별도의 위반이 되므로, 이해관계와 방해를 혼동하지 마십시오.",
      basis: ["AI 일반지식(미검증)"],
    },
    related: ["업무상 재해 인정기준"],
    madeBy: ["법령 원문 조회", "AI 초안"],
    status: "confirmed",
  },
];
