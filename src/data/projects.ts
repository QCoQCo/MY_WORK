/**
 * 프로젝트 경력 (my_work.md)
 */
export interface Project {
    id: string;
    name: { ko: string; ja: string; en: string };
    period: string;
    tech: string[];
    github: string;
    deployUrl?: string;
    /** 단일 경로 또는 다중 경로(스와이퍼) */
    screenshot?: string | string[];
    overview: { ko: string; ja: string; en: string };
    team?: { ko: string; ja: string; en: string };
    achievements?: { ko: string; ja: string; en: string }[];
}

export const projects: Project[] = [
    {
        id: 'netcode-lab',
        name: { ko: 'Netcode Lab', ja: 'Netcode Lab', en: 'Netcode Lab' },
        period: '2025.11 ~ 2026.01',
        tech: ['Node.js', 'WebSocket', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/QCoQCo/Net-delay-parry-hit-simulator',
        screenshot: ['/images/netcode1.png', '/images/netcode2.png'],
        team: { ko: '개인', ja: '個人', en: 'Solo' },
        overview: {
            ko: '딜레이와 롤백 넷코드의 동작 차이를 직접 확인하는 1D 패링/타격 시뮬레이터',
            ja: 'ディレイとロールバックのネットコードの違いを視覚的に確認できる1Dパリング・打撃シミュレーター',
            en: '1D parry/hit simulator for visualizing the difference between delay and rollback netcode',
        },
        achievements: [
            {
                ko: '딜레이 기반·롤백 넷코드를 직접 구현하고, 동일 시뮬레이터 위에서 실시간 전환·비교',
                ja: 'ディレイ方式とロールバック方式のネットコードを自前で実装し、同一シミュレーター上でリアルタイム切り替え・比較',
                en: 'Implemented both delay-based and rollback netcode from scratch; real-time switching and comparison on the same simulator',
            },
            {
                ko: '레이턴시·지터·패킷 손실을 인위적으로 주입하는 가상 네트워크 레이어 구현 (8프레임 중복 전송으로 손실 복구)',
                ja: 'レイテンシ・ジッター・パケットロスを任意に注入できる仮想ネットワークレイヤーを実装（直近8フレーム重複送信で損失を補完）',
                en: 'Built a virtual network layer that injects configurable latency, jitter, and packet loss; redundant 8-frame history transmission for loss recovery',
            },
            {
                ko: '결정론적 정수 연산 기반 게임 상태 설계 및 FNV-1a 체크섬을 활용한 롤백 모드 디싱크 자동 감지',
                ja: '整数演算による決定論的ゲーム状態設計と、FNV-1aチェックサムを用いたロールバックモードのデシンク自動検出',
                en: 'Deterministic integer-math game state with FNV-1a checksum-based automatic desync detection in rollback mode',
            },
            {
                ko: 'transport 인터페이스 추상화로 루프백(단일 탭)·실제 WebSocket(두 탭) 모드를 넷코드 코드 수정 없이 전환',
                ja: 'transportインターフェース抽象化により、ループバック（単一タブ）と実WebSocket（2タブ）モードをネットコードコード無修正で切り替え',
                en: 'Transport interface abstraction enabling zero-code-change switching between loopback (single tab) and real WebSocket (two-tab) modes',
            },
        ],
    },
    {
        id: 'logbook',
        name: { ko: 'LogBook', ja: 'LogBook', en: 'LogBook' },
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
        deployUrl: 'https://logbooks.cc/',
        screenshot: [
            '/images/log-book1.png',
            '/images/log-book2.png',
            '/images/log-book3.png',
            '/images/log-book4.png',
        ],
        team: { ko: '3인 팀 (팀장)', ja: '全3名 (チームリーダー)', en: 'Team of 3 (Leader)' },
        overview: {
            ko: "'해적의 항해 일지'를 콘셉트로 한 블로그, 실시간 채팅, 음악 공유 기능 통합 차세대 소셜 플랫폼",
            ja: '「海賊の航海日誌」をコンセプトに、ブログ、リアルタイムチャット、音楽共有機能を統合した次世代ソーシャルプラットフォーム',
            en: 'Next-gen social platform integrating blog, real-time chat, and music sharing with a "pirate\'s log" concept',
        },
        achievements: [
            {
                ko: 'WebSocket 기반 실시간 알림 및 Firebase 다중 채팅방 구현',
                ja: 'WebSocketベースのリアルタイム通知およびFirebase複数チャットルーム実装',
                en: 'WebSocket-based real-time notifications and Firebase multi-chat room implementation',
            },
            {
                ko: 'React Grid Layout·메모이제이션 기반 렌더링 최적화',
                ja: 'React Grid Layoutおよびメモイゼーションによるレンダリング最適化',
                en: 'Rendering optimization with React Grid Layout and memoization',
            },
            {
                ko: 'GHCR 및 Aiven Cloud DB를 활용한 클라우드 인프라 구축과 멀티 아키텍처 도커 빌드 최적화',
                ja: 'GHCRおよびAiven Cloud DBを活用したクラウドインフラ構築とマルチアーキテクチャDockerビルド最適化',
                en: 'Cloud infrastructure setup and multi-architecture Docker build optimization using GHCR and Aiven Cloud DB',
            },
            {
                ko: '오라클 클라우드 서버 내 .env 단독 보관을 통한 배포 환경 변수 보안 강화',
                ja: 'Oracle Cloudサーバー内での.env単独保管によるデプロイ環境変数セキュリティの強化',
                en: 'Enhanced deployment environment variable security through isolated .env storage in Oracle Cloud server',
            },
        ],
    },
    {
        id: 'arata-busan',
        name: { ko: 'ARATA BUSAN', ja: 'あらた釜山', en: 'ARATA BUSAN' },
        period: '2025.07 ~ 2026.01',
        tech: ['Java', 'Spring Boot', 'MyBatis', 'OAuth2', 'Kakao Map API', 'Thymeleaf', 'MySQL'],
        github: 'https://github.com/QCoQCo/ORORAproject',
        deployUrl: 'https://www.arata-busan.com/',
        screenshot: ['/images/arata1.png', '/images/arata2.png', '/images/arata3.png'],
        team: { ko: '5인 팀 (팀장)', ja: '全5名 (チームリーダー)', en: 'Team of 5 (Leader)' },
        overview: {
            ko: '방한 일본인 및 영어권 관광객 타겟 부산 명소 소개 종합 웹 플랫폼(데모버전 배포중)',
            ja: '訪韓日本人および英語圏の観光客をターゲットにした釜山の隠れた名所を紹介する総合ウェブプラットフォーム(デモバージョン公開中)',
            en: 'Comprehensive web platform introducing Busan attractions for Japanese and English-speaking visitors(Demo version available)',
        },
        achievements: [
            {
                ko: 'Node.js 기반 백엔드 환경 및 Docker Hub를 활용한 컨테이너 기반 배포 파이프라인 구축',
                ja: 'Node.jsベースのバックエンド環境およびDocker Hubを活用したコンテナデプロイパイプライン構築',
                en: 'Node.js-based backend environment and container deployment pipeline setup using Docker Hub',
            },
            {
                ko: '도커 로컬 MySQL 연동 및 GitHub Secrets를 활용한 환경 변수 보안 관리',
                ja: 'DockerローカルMySQL連携およびGitHub Secretsを活用した環境変数セキュリティ管理',
                en: 'Docker local MySQL integration and environment variable security management using GitHub Secrets',
            },
        ],
    },
    {
        id: 'r-r-gebra',
        name: { ko: 'R_R_Gebra', ja: 'R_R_Gebra', en: 'R_R_Gebra' },
        period: '2025.12 ~ 2026.02',
        tech: ['Rust', 'Tauri', 'React', 'TypeScript', 'Mafs', 'MathLive'],
        github: 'https://github.com/QCoQCo/R_R_Gebra',
        screenshot: ['/images/r-r-gebra1.png', '/images/r-r-gebra2.png'],
        overview: {
            ko: '수학 학습용 복잡한 함수 그래프를 고속 렌더링하는 GeoGebra 스타일 데스크톱 앱',
            ja: '複雑な関数のグラフを高速かつ滑らかに可視化するGeoGebra風デスクトップアプリケーション',
            en: 'GeoGebra-style desktop app for high-speed rendering of complex function graphs for math learning',
        },
    },
    {
        id: 'ws-chat',
        name: { ko: 'WS Chat', ja: 'WS Chat', en: 'WS Chat' },
        period: '2025.07',
        tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'WebSocket'],
        github: 'https://github.com/QCoQCo/WS-Chat',
        screenshot: '/images/ws-chat.png',
        overview: {
            ko: 'WebSocket 기반 클라이언트 간 실시간 메시지 통신 채팅 데모 앱',
            ja: 'クライアント間のリアルタイムメッセージ通信が可能なチャットデモアプリ',
            en: 'Chat demo app with WebSocket-based real-time client-to-client messaging',
        },
    },
    {
        id: 'rogue01',
        name: { ko: 'Rogue01', ja: 'Rogue01', en: 'Rogue01' },
        period: '2025.07',
        tech: ['Java 21', 'Swing', 'Maven'],
        github: 'https://github.com/QCoQCo/Rogue01',
        screenshot: ['/images/rogue1.png', '/images/rogue2.png', '/images/rogue3.png'],
        overview: {
            ko: '던전 탐색과 JRPG 전투를 결합한 클래식 로그라이크 데스크톱 게임',
            ja: 'ダンジョン探索とJRPGスタイルのターン制戦闘を組み合わせたローグライクデスクトップゲーム',
            en: 'Classic roguelike desktop game combining dungeon exploration with JRPG-style turn-based combat',
        },
    },
    {
        id: 'kanji-searcher',
        name: { ko: '일본어 한자 검색', ja: '日本語漢字検索', en: 'Japanese Kanji Search' },
        period: '2025.05',
        tech: ['React', 'Vite', 'TypeScript', 'Jisho API', 'Kanji API', 'Netlify Functions'],
        github: 'https://github.com/QCoQCo/Kanji-Searcher',
        deployUrl: 'https://kanji-jisyo.netlify.app/',
        screenshot: ['/images/kanji.png', '/images/kanji2.png'],
        overview: {
            ko: 'JLPT 학습 효율화를 위한 획순 GIF 및 필터링 제공 검색 툴. Netlify Functions로 CORS 우회 구현',
            ja: 'JLPT受験に向けた学習効率化を目的とした検索ツール。Netlify Functionsを用いたAPIプロキシでCORS回避',
            en: 'JLPT study tool with stroke-order GIFs and filtering. CORS workaround via Netlify Functions',
        },
    },
    {
        id: 'todov2',
        name: { ko: 'Todo 풀스택', ja: 'Todo フルスタック', en: 'Todo Full-stack' },
        period: '2025.03',
        tech: ['React', 'Node.js', 'Express', 'MySQL', 'AWS RDS', 'Google OAuth 2.0'],
        github: 'https://github.com/QCoQCo/TODOV2',
        screenshot: '/images/full-stack-todo.png',
        overview: {
            ko: '소셜 로그인, 활동 통계 기능을 갖춘 풀스택 웹 애플리케이션. AWS RDS 인프라 구축',
            ja: 'Google OAuth連携や統計機能を備えたフルスタックWebアプリ。AWS RDSを用いたDBインフラ構築',
            en: 'Full-stack web app with social login and activity stats. AWS RDS infrastructure',
        },
    },
    {
        id: 'ferrari',
        name: { ko: '페라리 리디자인', ja: 'フェラーリ リデザイン', en: 'Ferrari Redesign' },
        period: '2024.12',
        tech: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Netlify'],
        github: 'https://github.com/QCoQCo/figma_ferrari',
        deployUrl: 'https://figmaferrari.netlify.app/',
        screenshot: ['/images/ferrari1.png', '/images/ferrari2.png'],
        overview: {
            ko: '페라리 브랜드 사이트 리디자인',
            ja: 'フェラーリ ブランドサイト・リデザイン',
            en: 'Ferrari brand site redesign',
        },
    },
    {
        id: 'tauri-todo',
        name: { ko: 'Todo (Tauri)', ja: 'Todo (Tauri)', en: 'Todo (Tauri)' },
        period: '2024.08',
        tech: ['Rust', 'Tauri', 'JavaScript', 'Chart.js', 'AES-GCM'],
        github: 'https://github.com/QCoQCo/Rust-Tauri-Todo-Remake',
        screenshot: '/images/tauri-todo.png',
        overview: {
            ko: 'Rust와 Tauri를 사용한 데스크톱 앱, AES-256-GCM 암호화 시도',
            ja: 'RustとTauriを使用したデスクトップアプリ、AES-256-GCM暗号化試行',
            en: 'Desktop app with Rust and Tauri; AES-256-GCM encryption attempt',
        },
    },
    {
        id: 'calculator',
        name: { ko: '계산기 (GUI)', ja: '計算機 (GUI)', en: 'Calculator (GUI)' },
        period: '2024.06 ~ 2025.12',
        tech: ['Rust', 'Iced', 'C++', 'GCC', 'CMake'],
        github: 'https://github.com/QCoQCo/RUST-GUI-Calculator',
        screenshot: '/images/rust-gui-calc.png',
        overview: {
            ko: '재귀 하향 파서를 직접 구현한 CLI 버전을 Iced 프레임워크로 GUI 확장',
            ja: '再帰下降パーサーを実装したCLI版から、Icedフレームワークを用いたGUIへと拡張',
            en: 'GUI extension of CLI calculator with recursive descent parser using Iced framework',
        },
    },
    {
        id: 'calculator-Rust-cli',
        name: { ko: '계산기 (CLI)', ja: '計算機 (CLI)', en: 'Calculator (CLI)' },
        period: '2024.06',
        tech: ['Rust'],
        github: 'https://github.com/QCoQCo/Rust-cli-calc',
        screenshot: '/images/default.jpg',
        overview: {
            ko: 'Rust로 구현한 CLI 계산기',
            ja: 'Rustで実装したCLI計算機',
            en: 'CLI calculator implemented in Rust',
        },
    },
    {
        id: 'calculator-C++-cli',
        name: { ko: 'C++ 계산기 (CLI)', ja: 'C++ 計算機 (CLI)', en: 'C++ Calculator (CLI)' },
        period: '2024.06',
        tech: ['C++', 'Cmake'],
        github: 'https://github.com/QCoQCo/CPP_CLI_CALC_REMAKE',
        screenshot: '/images/default.jpg',
        overview: {
            ko: 'C++로 구현한 CLI 계산기',
            ja: 'C++で実装したCLI計算機',
            en: 'CLI calculator implemented in C++',
        },
    },
    {
        id: 'stwch',
        name: { ko: '스톱워치 & To-Do', ja: 'ストップウォッチ＆To-Do', en: 'Stopwatch & To-Do' },
        period: '2024.06',
        tech: ['Python', 'tkinter', 'PyInstaller'],
        github: 'https://github.com/QCoQCo/stwch',
        screenshot: ['/images/stwatch-todo1.png', '/images/stwatch-todo2.png'],
        overview: {
            ko: 'macOS용 스톱워치 및 To-Do 리스트',
            ja: 'macOS用ストップウォッチおよびTo-Doリスト',
            en: 'macOS stopwatch and To-Do list app',
        },
    },
];
