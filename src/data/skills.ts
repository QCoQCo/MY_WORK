const DEVICON = (name: string, style = 'original') =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${style}.svg`;

/**
 * 기술 스택 (my_work.md)
 */
export interface SkillItem {
    name: string;
    description: { ko: string; ja: string; en: string };
    iconUrl?: string;
}

export interface SkillCategory {
    category: { ko: string; ja: string; en: string };
    items: SkillItem[];
}

export const skills: SkillCategory[] = [
    {
        category: { ko: 'OS', ja: 'OS', en: 'OS' },
        items: [
            { name: 'Windows', iconUrl: DEVICON('windows11'), description: { ko: '설치부터 환경 구축, 개발이 가능합니다.', ja: 'インストールから環境構築、開発が可能です。', en: 'Can install, set up environments, and develop.' } },
            { name: 'Linux', iconUrl: DEVICON('linux'), description: { ko: '설치부터 환경 구축, 개발이 가능합니다.', ja: 'インストールから環境構築、開発が可能です。', en: 'Can install, set up environments, and develop.' } },
            { name: 'macOS', iconUrl: DEVICON('apple'), description: { ko: '설치부터 환경 구축, 개발이 가능합니다.', ja: 'インストールから環境構築、開発が可能です。', en: 'Can install, set up environments, and develop.' } },
        ],
    },
    {
        category: { ko: 'Languages', ja: '言語', en: 'Languages' },
        items: [
            { name: 'HTML', iconUrl: DEVICON('html5'), description: { ko: '화면 설계부터 최적화까지 웹 페이지 구조를 구현할 수 있습니다.', ja: '画面設計から最適化までWebページの構造を実装できます。', en: 'Can implement web page structure from design to optimization.' } },
            { name: 'JavaScript', iconUrl: DEVICON('javascript'), description: { ko: 'ES6+ 구문과 DOM 조작, 비동기 처리 기반 동적 UI를 설계·최적화할 수 있습니다.', ja: 'ES6+構文とDOM操作、非同期処理で動的UIを設計・最適化できます。', en: 'Can design and optimize dynamic UI with ES6+, DOM manipulation, and async handling.' } },
            { name: 'TypeScript', iconUrl: DEVICON('typescript'), description: { ko: '정적 타입과 인터페이스로 안정적이고 확장 가능한 프론트엔드를 설계합니다.', ja: '静的型とインターフェースで安定性・拡張性のあるフロントエンドを設計できます。', en: 'Can design stable, scalable frontends with static types and interfaces.' } },
            { name: 'Python', iconUrl: DEVICON('python'), description: { ko: '표준 라이브러리와 OOP로 데스크톱 앱부터 데이터 처리까지 개발할 수 있습니다.', ja: '標準ライブラリとOOPでデスクトップアプリからデータ処理まで開発可能です。', en: 'Can develop desktop apps and data processing with standard library and OOP.' } },
            { name: 'Rust', iconUrl: DEVICON('rust'), description: { ko: '소유권 모델과 메모리 관리 기반으로 아키텍처 설계부터 구현까지 개발할 수 있습니다.', ja: '所有権モデルとメモリ管理を基にアーキテクチャ設計から実装まで開発できます。', en: 'Can design architectures and implement using ownership and memory management.' } },
            { name: 'Java', iconUrl: DEVICON('java'), description: { ko: 'OOP를 이해하고 정형화된 로직 구현 또는 가이드라인 하 기능 개발이 가능합니다.', ja: 'OOPを理解し、定型ロジックの実装やガイドラインに沿った開発が可能です。', en: 'Understands OOP; can implement structured logic or develop under guidelines.' } },
            { name: 'C / C++', iconUrl: DEVICON('cplusplus'), description: { ko: '포인터·메모리 구조 이해와 STL, OOP 기반 로직 분석·버그 수정이 가능합니다.', ja: 'ポインタ・メモリ構造の理解、STL・OOPに基づくロジック分析・バグ修正が可能です。', en: 'Can analyze logic and fix bugs with pointer, memory, STL, and OOP knowledge.' } },
        ],
    },
    {
        category: { ko: 'Frameworks / Libraries', ja: 'フレームワーク / ライブラリ', en: 'Frameworks / Libraries' },
        items: [
            { name: 'React', iconUrl: DEVICON('react'), description: { ko: 'Hooks, 상태 관리, 렌더링 최적화를 활용한 프론트엔드 아키텍처 구축이 가능합니다.', ja: 'Hooks、状態管理、レンダリング最適化でフロントエンドアーキテクチャを構築できます。', en: 'Can build frontend architecture with Hooks, state management, and render optimization.' } },
            { name: 'Spring / Spring Boot', iconUrl: DEVICON('spring'), description: { ko: 'MVC, DI/AOP로 REST API, 인증/인가, DB 연동 웹 애플리케이션을 구현합니다.', ja: 'MVC、DI/AOPでREST API、認証・認可、DB連携のWebアプリを実装できます。', en: 'Can implement REST API, auth, and DB-integrated web apps with MVC, DI/AOP.' } },
            { name: 'Tauri', iconUrl: DEVICON('tauri'), description: { ko: 'Rust와 웹 기술 결합 데스크톱 앱의 IPC 구현부터 빌드·배포까지 수행합니다.', ja: 'RustとWeb技術の組み合わせでデスクトップアプリのIPCからビルド・配布まで遂行できます。', en: 'Can implement IPC through build and deployment for Rust+web desktop apps.' } },
            { name: 'Express / Node.js', iconUrl: DEVICON('nodejs'), description: { ko: 'RESTful API 설계, 비동기 통신, DB 연동을 구현할 수 있습니다.', ja: 'RESTful API設計、非同期通信、DB連携を実装できます。', en: 'Can implement RESTful API design, async communication, and DB integration.' } },
            { name: 'JPA', iconUrl: DEVICON('java'), description: { ko: '엔티티 매핑, 연관관계 설정, 영속성 컨텍스트 기반 CRUD 조작이 가능합니다.', ja: 'エンティティマッピング、リレーション設定、永続性コンテキストでCRUD操作が可能です。', en: 'Can perform CRUD with entity mapping, relations, and persistence context.' } },
        ],
    },
    {
        category: { ko: 'Databases', ja: 'DB', en: 'Databases' },
        items: [
            { name: 'MySQL', iconUrl: DEVICON('mysql'), description: { ko: '비즈니스 요구에 맞춘 스키마 설계, 복잡한 JOIN 쿼리 작성을 수행할 수 있습니다.', ja: 'ビジネス要件に合わせたスキーマ設計、複雑なJOINクエリの作成を遂行できます。', en: 'Can design schemas and write complex JOIN queries per business needs.' } },
            { name: 'MSSQL', iconUrl: DEVICON('microsoftsqlserver'), description: { ko: '기본 CRUD, 저장 프로시저 작성·수정이 가능합니다.', ja: '基本的なCRUD、ストアドプロシージャの作成・修正が可能です。', en: 'Can perform CRUD and create/modify stored procedures.' } },
            { name: 'Firebase RealTime DB', iconUrl: DEVICON('firebase'), description: { ko: 'NoSQL 실시간 동기화 원리 이해, 클라이언트 간 데이터 업데이트 관리가 가능합니다.', ja: 'NoSQLリアルタイム同期の原理を理解し、クライアント間のデータ更新管理が可能です。', en: 'Understands NoSQL real-time sync; can manage client-side data updates.' } },
            { name: 'Oracle', iconUrl: DEVICON('oracle'), description: { ko: '표준 SQL로 테이블 조회 및 기본 데이터 조작(CRUD)이 가능합니다.', ja: '標準SQLでテーブル照会および基礎的なデータ操作（CRUD）が可能です。', en: 'Can query tables and perform basic CRUD with standard SQL.' } },
        ],
    },
    {
        category: { ko: 'Infra / Tools', ja: 'その他', en: 'Infra / Tools' },
        items: [
            { name: 'Git', iconUrl: DEVICON('git'), description: { ko: 'Git Flow 기반 브랜치 관리, 충돌 해결, PR 프로세스 등 팀 협업이 가능합니다.', ja: 'Git Flow戦略によるブランチ管理、コンフリクト解消、PRプロセス等の協業が可能です。', en: 'Can collaborate via Git Flow, conflict resolution, and PR processes.' } },
            { name: 'Docker', iconUrl: DEVICON('docker'), description: { ko: 'Dockerfile, Docker Compose로 개발 환경 구축 및 운영이 가능합니다.', ja: 'Dockerfile、Docker Composeで開発環境の構築・運用が可能です。', en: 'Can set up and run dev environments with Dockerfile and Docker Compose.' } },
            { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg', description: { ko: 'EC2, S3, RDS 등 주요 서비스의 기본 구축 및 설정이 가능합니다.', ja: 'EC2、S3、RDSなどの主要サービスの基本構築・設定が可能です。', en: 'Can build and configure main services like EC2, S3, RDS.' } },
            { name: 'Apache', iconUrl: DEVICON('apache'), description: { ko: '가상 호스트 설정, 모듈 관리 및 환경 구축이 가능합니다.', ja: 'バーチャルホスト設定、モジュール管理および環境構築が可能です。', en: 'Can configure virtual hosts, manage modules, and set up environments.' } },
        ],
    },
];
