/**
 * 자기소개 및 지원동기 (resume.md 56~82)
 * cite 태그 제거, 한/일 병기
 */
export interface SelfIntroSection {
    icon: string;
    title: { ko: string; ja: string; en: string };
    body: { ko: string; ja: string; en: string };
}

export const selfIntroSections: SelfIntroSection[] = [
    {
        icon: '📌',
        title: { ko: '강점 및 어필 포인트', ja: 'アピールポイント', en: 'Strengths & Selling Points' },
        body: {
            ko: "저의 강점은 자율적인 학습 능력과 이를 통해 길러진 '목적 지향적 기술 선택 능력'입니다. 독학으로 여러 언어를 습득했으며, 단순히 문법을 이해하는 것에 그치지 않고 프로젝트의 성격에 맞춰 최적의 도구를 선택해 사용하고 있습니다. 알고리즘 검증에는 Python, 시스템 성능과 메모리 효율이 중요한 개발에는 C++나 Rust, 하드웨어 제어에는 C언어를 활용해 왔습니다. 웹 개발에서는 React를 기반으로 안정성을 고려해 JavaScript와 TypeScript를 유연하게 선택하고 있으며, '부산 여행지 추천 앱', 'Rust 기반 수학 그래프 시각화 앱' 등의 프로젝트를 완수하며 실무적인 문제 해결 능력을 길러왔습니다.",
            ja: '私の強みは、自律的な学習能力と、それによって培われた「目的志向の技術選択能力」です。独学で複数の言語を習得しましたが、単に文法を理解するだけでなく、プロジェクトの性質に合わせて最適なツールを使い分けています。アルゴリズムの検証には Python、システム性能やメモリ効率が重視される開発には C++ や Rust、ハードウェア制御には C言語 を活用してきました。ウェブ開発では React をベースに安定性を考慮して JavaScript と TypeScript を柔軟に選択しています。これらの技術を駆使し「釜山旅行地推薦アプリ」や「Rustベースの数学グラフ可視化アプリ」等のプロジェクトを完遂させ、実務的な問題解決能力を磨いてきました。',
            en: 'My strengths are self-directed learning ability and the resulting "purpose-driven technology selection." I have taught myself multiple programming languages and choose the optimal tools for each project—Python for algorithm validation, C++ or Rust for performance-critical development, C for hardware control, and React with JavaScript/TypeScript for web development. I have completed projects such as a Busan travel recommendation app and a Rust-based math graph visualization app.',
        },
    },
    {
        icon: '📚',
        title: { ko: '특기 및 좋아하는 과목', ja: '特技・好きな学科', en: 'Specialties & Favorite Subjects' },
        body: {
            ko: "학업에서는 '알고리즘과 자료구조'를 가장 열성적으로 배웠으며, 이는 효율적이고 최적화된 코드 작성의 기반이 되고 있습니다. 또한 TOEIC 880점과 JLPT N2를 보유하고 있어 최신 영문 기술 문서 독해와 다국어 환경에서의 원활한 커뮤니케이션에 자신이 있습니다.",
            ja: '学業では「アルゴリズムとデータ構造」を最も熱心に学び、それが効率的かつ最適化されたコード作成の基盤となっています。また、TOEIC 880点とJLPT N2を保有しており、最新の英語技術文書の読解や、多言語環境での円滑なコミュニケーションに自信があります。',
            en: 'I studied algorithms and data structures most enthusiastically; they form the foundation for efficient, optimized code. With TOEIC 880 and JLPT N2, I am confident in reading technical documentation in English and communicating in multilingual environments.',
        },
    },
    {
        icon: '🎯',
        title: { ko: '지원 동기', ja: '志望動機', en: 'Motivation' },
        body: {
            ko: '풀스택 개발자로서의 기술력과 어학 능력을 살린 글로벌 대응력을 발휘하여 귀사의 프로젝트에 기여하고 싶습니다. 자발적으로 최신 기술을 도입하는 자세를 유지하며, 변화가 빠른 IT 업계에서 지속적으로 가치를 창출하는 엔지니어가 되고자 귀사에 지원하였습니다.',
            ja: 'フルスタック開発者としての技術力と、語学力を活かしたグローバルな対応力を発揮し、貴社のプロジェクトに貢献したいと考えております。自発的に最新技術を取り入れる姿勢を貫き、変化の激しいIT業界において価値を創造し続けられるエンジニアを目指し、貴社を志望いたしました。',
            en: 'I want to contribute to your projects by leveraging my full-stack skills and language abilities in global contexts. I maintain a proactive stance toward adopting new technologies and aim to be an engineer who creates ongoing value in the fast-changing IT industry.',
        },
    },
    {
        icon: '🌏',
        title: { ko: '일본 취업 희망 사유', ja: '日本で仕事をしたいと思う理由', en: 'Why I Want to Work in Japan' },
        body: {
            ko: '어릴 적부터 일본에 거주하는 친척을 방문해 매년 장기간 체류했던 경험은 제게 더 넓은 세계를 바라보는 시야를 갖게 해주었습니다. 이 환경에서 기른 일본어 능력과 영어 실력(TOEIC 880점)은 더 큰 무대로 나아가기 위한 견고한 토대가 되었습니다. 독학 및 전문 연수 과정을 통해 React, AWS, Rust 등 다양한 기술 스택을 습득해 왔으며, 공학적 기초를 중요시하면서도 항상 새로운 기술 혁신을 추구하는 일본의 IT 산업이야말로 저의 기술적 역량을 증명하고 더욱 성장할 수 있는 최고의 무대라고 확신합니다.',
            ja: '幼少期から日本に住む親戚を訪ね、毎年長期間滞在した経験は、私に広い世界への視野を与えてくれました。この環境で培った日本語能力と英語力（TOEIC 880点）は、より大きな舞台へ踏み出すための強固な土台となっています。独学や専門的な研修課程を通じて、ReactやAWS、Rustなど多様な技術スタックを習得してきました。工学的な基礎を重んじつつも常に新しい技術革新を追求する日本のIT産業こそが、私の技術的スキルを証明し、さらに成長させるための最高の舞台であると確信しています。',
            en: 'Visiting relatives in Japan and staying for extended periods each year from childhood gave me a broader worldview. The Japanese and English skills (TOEIC 880) I developed in that environment are a solid foundation for advancing to larger stages. Through self-study and professional training, I have acquired technologies including React, AWS, and Rust. I am confident that Japan\'s IT industry—which values engineering fundamentals while constantly pursuing innovation—is the ideal stage to demonstrate and grow my technical capabilities.',
        },
    },
    {
        icon: '🔥',
        title: { ko: '학업 외 학창 시절 노력한 점', ja: '学業以外で学生時代に力を注いだこと', en: 'Efforts Outside Academics' },
        body: {
            ko: "학업을 잠시 중단해야 했던 시기, 저는 환경에 휘둘리지 않고 스스로 성장할 수 있는 '독학'의 매력에 깊이 빠졌습니다. 단순히 지식을 얻는 것에 그치지 않고 일상생활의 불편함을 기술로 해결하는 데 주안점을 두어, macOS용 스톱워치 앱을 직접 만들거나 수식 시각화 도구를 개발하기도 했습니다. 이 과정을 통해 미지의 과제를 스스로 조사하고 형태를 갖출 때까지의 인내력과 기술적 주도권을 기를 수 있었으며, 새로운 기술이 끊임없이 등장하는 IT 현장에서 어떠한 문제도 주도적으로 해결할 수 있는 강력한 무기가 되었습니다.",
            ja: '学業を一時中断せざるを得なかった時期、私は環境に左右されず自ら成長できる「独学」の魅力に深くのめり込みました。単に知識を得るだけでなく、日常生活の不便を技術で解決することに主眼を置き、macOS用のストップウォッチアプリを自作したり、数式可視化ツールの開発を行ったりしました。この過程で、未知の課題を自ら調査し、形にするまでの忍耐力と技術的な主導権を身につけました。このような自発的な挑戦精神は、新しい技術が次々と登場するIT現場において、いかなる問題も主体的に解決できる私の強力な武器となっています。',
            en: 'During a break from formal studies, I immersed myself in self-directed learning. I focused on solving everyday inconveniences with technology—building a macOS stopwatch app and a formula visualization tool. This process built perseverance and technical initiative to research and implement unknown challenges, which remains a strong asset for tackling any problem in the ever-evolving IT field.',
        },
    },
];
