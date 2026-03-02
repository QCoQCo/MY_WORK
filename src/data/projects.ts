/**
 * 프로젝트 경력 (my_work.md)
 */
export interface Project {
    id: string;
    name: { ko: string; ja: string };
    period: string;
    tech: string[];
    github: string;
    deployUrl?: string;
    /** 단일 경로 또는 다중 경로(스와이퍼) */
    screenshot?: string | string[];
    overview: { ko: string; ja: string };
    team?: { ko: string; ja: string };
    achievements?: { ko: string; ja: string }[];
}

export const projects: Project[] = [
    {
        id: 'logbook',
        name: { ko: 'LogBook', ja: 'LogBook' },
        period: '2025.07 ~ 2026.02',
        tech: [
            'React',
            'Vite',
            'Spring Boot',
            'JPA',
            'Spring Security',
            'WebSocket',
            'Firebase',
            'MySQL',
        ],
        github: 'https://github.com/QCoQCo/LogBook',
        screenshot: [
            '/images/log-book1.png',
            '/images/log-book2.png',
            '/images/log-book3.png',
            '/images/log-book4.png',
        ],
        team: { ko: '3인 팀 (팀장)', ja: '全3名 (チームリーダー)' },
        overview: {
            ko: "'해적의 항해 일지'를 콘셉트로 한 블로그, 실시간 채팅, 음악 공유 기능 통합 차세대 소셜 플랫폼",
            ja: '「海賊の航海日誌」をコンセプトに、ブログ、リアルタイムチャット、音楽共有機能を統合した次世代ソーシャルプラットフォーム',
        },
        achievements: [
            {
                ko: 'WebSocket 기반 실시간 알림 및 Firebase 다중 채팅방 구현',
                ja: 'WebSocketベースのリアルタイム通知およびFirebase複数チャットルーム実装',
            },
            {
                ko: 'React Grid Layout·메모이제이션 기반 렌더링 최적화',
                ja: 'React Grid Layoutおよびメモイゼーションによるレンダリング最適化',
            },
        ],
    },
    {
        id: 'arata-busan',
        name: { ko: 'ARATA BUSAN', ja: 'あらた釜山' },
        period: '2025.07 ~ 2026.01',
        tech: ['Java', 'Spring Boot', 'MyBatis', 'OAuth2', 'Kakao Map API', 'Thymeleaf', 'MySQL'],
        github: 'https://github.com/QCoQCo/ORORAproject',
        screenshot: ['/images/arata1.png', '/images/arata2.png', '/images/arata3.png'],
        team: { ko: '5인 팀 (팀장)', ja: '全5名 (チームリーダー)' },
        overview: {
            ko: '방한 일본인 및 영어권 관광객 타겟 부산 명소 소개 종합 웹 플랫폼',
            ja: '訪韓日本人および英語圏の観光客をターゲットにした釜山の隠れた名所を紹介する総合ウェブプラットフォーム',
        },
    },
    {
        id: 'r-r-gebra',
        name: { ko: 'R_R_Gebra', ja: 'R_R_Gebra' },
        period: '2025.12 ~ 2026.02',
        tech: ['Rust', 'Tauri', 'React', 'TypeScript', 'Mafs', 'MathLive'],
        github: 'https://github.com/QCoQCo/R_R_Gebra',
        screenshot: ['/images/r-r-gebra1.png', '/images/r-r-gebra2.png'],
        overview: {
            ko: '수학 학습용 복잡한 함수 그래프를 고속 렌더링하는 GeoGebra 스타일 데스크톱 앱',
            ja: '複雑な関数のグラフを高速かつ滑らかに可視化するGeoGebra風デスクトップアプリケーション',
        },
    },
    {
        id: 'ws-chat',
        name: { ko: 'WS Chat', ja: 'WS Chat' },
        period: '2025.07',
        tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'WebSocket'],
        github: 'https://github.com/QCoQCo/WS-Chat',
        screenshot: '/images/ws-chat.png',
        overview: {
            ko: 'WebSocket 기반 클라이언트 간 실시간 메시지 통신 채팅 데모 앱',
            ja: 'クライアント間のリアルタイムメッセージ通信が可能なチャットデモアプリ',
        },
    },
    {
        id: 'rogue01',
        name: { ko: 'Rogue01', ja: 'Rogue01' },
        period: '2025.07',
        tech: ['Java 21', 'Swing', 'Maven'],
        github: 'https://github.com/QCoQCo/Rogue01',
        screenshot: ['/images/rogue1.png', '/images/rogue2.png', '/images/rogue3.png'],
        overview: {
            ko: '던전 탐색과 JRPG 전투를 결합한 클래식 로그라이크 데스크톱 게임',
            ja: 'ダンジョン探索とJRPGスタイルのターン制戦闘を組み合わせたローグライクデスクトップゲーム',
        },
    },
    {
        id: 'kanji-searcher',
        name: { ko: '일본어 한자 검색', ja: '日本語漢字検索' },
        period: '2025.05',
        tech: ['React', 'Vite', 'TypeScript', 'Jisho API', 'Kanji API', 'Netlify Functions'],
        github: 'https://github.com/QCoQCo/Kanji-Searcher',
        deployUrl: 'https://kanji-jisyo.netlify.app/',
        screenshot: ['/images/kanji.png', '/images/kanji2.png'],
        overview: {
            ko: 'JLPT 학습 효율화를 위한 획순 GIF 및 필터링 제공 검색 툴. Netlify Functions로 CORS 우회 구현',
            ja: 'JLPT受験に向けた学習効率化を目的とした検索ツール。Netlify Functionsを用いたAPIプロキシでCORS回避',
        },
    },
    {
        id: 'todov2',
        name: { ko: 'Todo 풀스택', ja: 'Todo フルスタック' },
        period: '2025.03',
        tech: ['React', 'Node.js', 'Express', 'MySQL', 'AWS RDS', 'Google OAuth 2.0'],
        github: 'https://github.com/QCoQCo/TODOV2',
        screenshot: '/images/full-stack-todo.png',
        overview: {
            ko: '소셜 로그인, 활동 통계 기능을 갖춘 풀스택 웹 애플리케이션. AWS RDS 인프라 구축',
            ja: 'Google OAuth連携や統計機能を備えたフルスタックWebアプリ。AWS RDSを用いたDBインフラ構築',
        },
    },
    {
        id: 'ferrari',
        name: { ko: '페라리 리디자인', ja: 'フェラーリ リデザイン' },
        period: '2024.12',
        tech: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Netlify'],
        github: 'https://github.com/QCoQCo/figma_ferrari',
        deployUrl: 'https://figmaferrari.netlify.app/',
        screenshot: ['/images/ferrari1.png', '/images/ferrari2.png'],
        overview: {
            ko: '페라리 브랜드 사이트 리디자인',
            ja: 'フェラーリ ブランドサイト・リデザイン',
        },
    },
    {
        id: 'tauri-todo',
        name: { ko: 'Todo (Tauri)', ja: 'Todo (Tauri)' },
        period: '2024.08',
        tech: ['Rust', 'Tauri', 'JavaScript', 'Chart.js', 'AES-GCM'],
        github: 'https://github.com/QCoQCo/Rust-Tauri-Todo-Remake',
        screenshot: '/images/tauri-todo.png',
        overview: {
            ko: 'Rust와 Tauri를 사용한 데스크톱 앱, AES-256-GCM 암호화 시도',
            ja: 'RustとTauriを使用したデスクトップアプリ、AES-256-GCM暗号化試行',
        },
    },
    {
        id: 'calculator',
        name: { ko: '계산기 (GUI)', ja: '計算機 (GUI)' },
        period: '2024.06 ~ 2025.12',
        tech: ['Rust', 'Iced', 'C++', 'GCC', 'CMake'],
        github: 'https://github.com/QCoQCo/RUST-GUI-Calculator',
        screenshot: '/images/rust-gui-calc.png',
        overview: {
            ko: '재귀 하향 파서를 직접 구현한 CLI 버전을 Iced 프레임워크로 GUI 확장',
            ja: '再帰下降パーサーを実装したCLI版から、Icedフレームワークを用いたGUIへと拡張',
        },
    },
    {
        id: 'calculator-Rust-cli',
        name: { ko: '계산기 (CLI)', ja: '計算機 (CLI)' },
        period: '2024.06',
        tech: ['Rust'],
        github: 'https://github.com/QCoQCo/Rust-cli-calc',
        screenshot: '/images/default.jpg',
        overview: {
            ko: 'Rust로 구현한 CLI 계산기',
            ja: 'Rustで実装したCLI計算機',
        },
    },
    {
        id: 'calculator-C++-cli',
        name: { ko: 'C++ 계산기 (CLI)', ja: 'C++ 計算機 (CLI)' },
        period: '2024.06',
        tech: ['C++', 'Cmake'],
        github: 'https://github.com/QCoQCo/CPP_CLI_CALC_REMAKE',
        screenshot: '/images/default.jpg',
        overview: {
            ko: 'C++로 구현한 CLI 계산기',
            ja: 'C++で実装したCLI計算機',
        },
    },
    {
        id: 'stwch',
        name: { ko: '스톱워치 & To-Do', ja: 'ストップウォッチ＆To-Do' },
        period: '2024.06',
        tech: ['Python', 'tkinter', 'PyInstaller'],
        github: 'https://github.com/QCoQCo/stwch',
        screenshot: ['/images/stwatch-todo1.png', '/images/stwatch-todo2.png'],
        overview: {
            ko: 'macOS용 스톱워치 및 To-Do 리스트',
            ja: 'macOS用ストップウォッチおよびTo-Doリスト',
        },
    },
];
