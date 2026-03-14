/**
 * 직무 요약 - 히어로 등 간단 소개용 (my_work.md 직무요약)
 */
export const jobSummary = {
    ko: '풀스텍 개발자를 꿈꾸고 있습니다.',
    ja: 'フルスタック開発者を目指しています。',
    en: 'Aspiring to become a full-stack developer.',
} as const;

/**
 * 자기소개 인용 요약 - IntroSection (my_work.md 267~283)
 * ① 자율적 문제해결·학습 / ② 풀스택 역량 / ③ 글로벌 어학력
 */
export const introSummary = {
    ko: '"불편함을 기술로 해결하는 것"에 기쁨을 느끼며, 독학으로 Rust·Python 등 여러 언어를 습득했습니다. 단순한 지식 습득에 머물지 않고 스톱워치·Rust 계산기 등을 직접 기획·개발하며 실용적 아웃풋을 중시합니다.',
    ja: '「不便さを技術で解決する」ことに喜びを感じ、独学でRust・Pythonなど複数の言語を習得しました。知識の習得にとどまらず、ストップウォッチやRust計算機などを自ら企画・開発し、実用的なアウトプットを重視しています。',
    en: 'I take joy in "solving inconvenience with technology" and have taught myself multiple languages including Rust and Python. Beyond mere knowledge acquisition, I prioritize practical output by planning and developing tools such as a stopwatch and Rust calculator.',
} as const;

export const introStrength = {
    ko: 'React부터 AWS 인프라까지 풀스택 개발을 연마했고, 프로젝트를 통해 UI/UX 최적화와 확장성 있는 설계의 중요성을 체득했습니다. 지속적인 외국어 공부로 글로벌 환경에서 즉시 기여할 준비가 되어 있습니다.',
    ja: 'ReactからAWSインフラまでフルスタック開発を磨き、プロジェクトを通じてUI/UX最適化やスケーラブルな設計の重要性を体得しました。継続的な語学学習により、グローバル環境で即戦力として貢献できる準備が整っております。',
    en: 'I have honed full-stack development from React to AWS infrastructure and learned the importance of UI/UX optimization and scalable design through projects. With continuous language study, I am ready to contribute in global environments.',
} as const;

/** 기술 상세 (Skills 등 참고용) */
export const strengths = {
    ko: 'React Hooks·상태 관리·렌더링 최적화, Spring MVC·DI/AOP·REST API, Tauri 데스크톱 앱, MySQL 스키마 설계·쿼리 최적화, Git Flow·Docker·AWS(EC2, S3, RDS) 환경 구축.',
    ja: 'React Hooks・状態管理・レンダリング最適化、Spring MVC・DI/AOP・REST API、Tauriデスクトップアプリ、MySQLスキーマ設計・クエリ最適化、Git Flow・Docker・AWS(EC2, S3, RDS)環境構築。',
    en: 'React Hooks, state management, rendering optimization; Spring MVC, DI/AOP, REST API; Tauri desktop apps; MySQL schema design and query optimization; Git Flow, Docker, AWS (EC2, S3, RDS) environment setup.',
} as const;

export const selfPr = {
    fullstack: {
        ko: 'React 프론트엔드부터 AWS 인프라까지 풀스택 개발 가능.',
        ja: 'ReactフロントエンドからAWSインフラまでフルスタック開発可能。',
        en: 'Full-stack development from React frontend to AWS infrastructure.',
    },
    stack: {
        ko: '주요 스택: React, TypeScript, Rust, Spring Boot, MySQL, Firebase, AWS.',
        ja: '主要スタック: React, TypeScript, Rust, Spring Boot, MySQL, Firebase, AWS。',
        en: 'Tech stack: React, TypeScript, Rust, Spring Boot, MySQL, Firebase, AWS.',
    },
    language: {
        ko: 'TOEIC 880점, JLPT N2.',
        ja: 'TOEIC 880点、JLPT N2。',
        en: 'TOEIC 880, JLPT N2.',
    },
} as const;
