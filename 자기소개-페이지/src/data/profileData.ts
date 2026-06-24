export interface ProfileData {
  name: string;
  englishName: string;
  role: string;
  subRole: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  introduction: string;
  longBio: string;
  philosophies: {
    title: string;
    description: string;
    iconName: string;
  }[];
  skills: {
    category: string;
    items: {
      name: string;
      level: 'Advanced' | 'Intermediate' | 'Basic';
      icon?: string;
    }[];
  }[];
  projects: {
    id: string;
    title: string;
    period: string;
    role: string;
    summary: string;
    description: string;
    tags: string[];
    features: string[];
    githubUrl?: string;
    liveUrl?: string;
    category: 'Full-Stack' | 'Frontend' | 'Mobile';
  }[];
  experience: {
    id: string;
    period: string;
    company: string;
    role: string;
    description: string;
    achievements: string[];
  }[];
}

export const profileData: ProfileData = {
  name: "김도현",
  englishName: "Dohyun Kim",
  role: "Full-Stack Developer",
  subRole: "Crafting beautiful interfaces & robust architectures",
  location: "Seoul, South Korea",
  email: "dohyun.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  introduction: "단순히 작동하는 코드를 넘어, 사용자에게 즐거움을 주는 제품과 견고한 엔지니어링의 조화를 지향합니다.",
  longBio: "안녕하세요! 사용자 중심의 웹 애플리케이션을 만드는 풀스택 개발자 김도현입니다. 아름다운 UI/UX 디자인과 고성능 분산 시스템 설계 모두에 관심이 많으며, 항상 '왜 이 기술이 필요한가?'에 대해 끊임없이 자문하며 최적의 솔루션을 찾아냅니다. 다양한 협업 경험을 바탕으로 비즈니스 목표를 실현하는 지속 가능한 품질의 소프트웨어를 개발하고 있습니다.",
  philosophies: [
    {
      title: "사용자 중심의 경험 (UX First)",
      description: "단순히 동작하는 기능에 만족하지 않고, 레이턴시, 접근성, 반응형 레이아웃, 마이크로 인터랙션을 집요하게 다듬어 최상의 만족을 제공합니다.",
      iconName: "Compass"
    },
    {
      title: "아름답고 견고한 코드 설계",
      description: "변경에 유연하고 읽기 쉬운 선언적 코드를 지향합니다. 컴포넌트의 책임을 명확히 나누고, 적절한 추상화로 협업 효율을 극대화합니다.",
      iconName: "Code2"
    },
    {
      title: "도메인과 비즈니스의 깊은 이해",
      description: "기술은 문제를 해결하기 위한 도구일 뿐입니다. 비즈니스 문제를 명확히 정의하고, 도메인 지식을 심도 있게 탐구하여 기술적 성과를 비즈니스 성과로 연결합니다.",
      iconName: "Lightbulb"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React / Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Zustand / Recoil", level: "Intermediate" },
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "Vite / Webpack", level: "Intermediate" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js / Express", level: "Advanced" },
        { name: "NestJS", level: "Intermediate" },
        { name: "PostgreSQL / Prisma", level: "Intermediate" },
        { name: "Redis", level: "Basic" },
        { name: "RESTful API / GraphQL", level: "Advanced" }
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git & GitHub Actions", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Vercel / AWS", level: "Intermediate" },
        { name: "Figma", level: "Intermediate" },
        { name: "Slack / Jira", level: "Advanced" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "MindFlow - 개인화 명상 & 감정 기록 플랫폼",
      period: "2026.01 ~ 2026.04",
      role: "프론트엔드 리드 / UI 디자인",
      summary: "실시간 오디오 합성 및 감정 데이터 분석을 제공하는 모던 명상 웹 앱",
      description: "사용자가 기분에 맞는 명상 백그라운드 사운드를 믹스하고 매일의 감정을 차트로 트래킹할 수 있는 서비스입니다. 높은 몰입감을 주기 위해 부드러운 화면 전환과 미세한 인터랙션에 집중했습니다.",
      tags: ["React", "Zustand", "Tailwind CSS", "Web Audio API", "Recharts", "Framer Motion"],
      features: [
        "Web Audio API를 활용한 다중 음원 오디오 믹서 구현",
        "Recharts를 활용한 주간/월간 감정 변화 및 명상 달성 통계 대시보드",
        "Zustand 기반의 간결한 전역 오디오 플레이어 상태 관리",
        "사용자 집중을 돕기 위한 60fps 오프라인-퍼스트 애니메이션 효과"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Frontend"
    },
    {
      id: "proj-2",
      title: "CollabDoc - 실시간 공동 편집 문서 에디터",
      period: "2025.08 ~ 2025.12",
      role: "풀스택 엔지니어",
      summary: "CRDT 알고리즘 기반의 초경량 실시간 협업 화이트보드 & 텍스트 에디터",
      description: "여러 사용자가 동시에 접속하여 마크다운 문서 및 그림판을 공유 및 편집할 수 있는 분산 네트워크 플랫폼입니다. 동시성 제어 및 최적화에 심혈을 기울였습니다.",
      tags: ["Next.js", "TypeScript", "Node.js", "Socket.io", "Yjs (CRDT)", "Tailwind CSS"],
      features: [
        "Yjs와 WebSocket을 결합한 실시간 문서 동시 편집 및 충돌 방지",
        "Canvas API를 활용한 초경량 공동 화이트보드 기능 설계",
        "사용자별 실시간 커서 위치 및 색상 추적 기능 오버레이 구현",
        "Next.js Route Handlers 및 JWT 기반의 깔끔한 보안 인증 체계"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Full-Stack"
    },
    {
      id: "proj-3",
      title: "SwiftStore - 지능형 쇼핑 카트 및 추천 서비스",
      period: "2025.03 ~ 2025.06",
      role: "백엔드 엔지니어",
      summary: "대규모 트래픽 및 장바구니 데이터를 효율적으로 처리하는 가상 쇼핑몰 아키텍처",
      description: "사용자의 구매 이력과 클릭 로그를 실시간으로 분석하여 고도화된 연관 상품을 노출시키는 가상 커머스 서비스의 백엔드를 전담 구현했습니다.",
      tags: ["NestJS", "PostgreSQL", "Redis", "Docker", "REST API", "TypeScript"],
      features: [
        "Redis 캐싱 계층 구축으로 장바구니 조회 및 재고 업데이트 응답 속도 40% 개선",
        "PostgreSQL의 복합 인덱스 및 쿼리 튜닝을 통해 대용량 상품 검색 레이턴시 단축",
        "Docker Compose를 이용한 개발 환경 컨테이너화 및 인프라 명세 통일",
        "Swagger API 문서의 철저한 규격화를 통한 프론트엔드 팀과의 원활한 협업"
      ],
      githubUrl: "https://github.com",
      category: "Full-Stack"
    }
  ],
  experience: [
    {
      id: "exp-1",
      period: "2024.03 ~ 현재",
      company: "에이아이랩스 (AI Labs)",
      role: "Frontend Engineer",
      description: "생성형 AI 어시스턴트 협업 툴의 UI 및 실시간 스트리밍 프론트엔드 설계",
      achievements: [
        "대형 언어 모델(LLM) 스트리밍 토큰 렌더링 최적화로 화면 버벅임 현상 완전 해결",
        "인터랙티브 대화형 캔버스 UI를 자체 설계하여 사용자 이탈률 18% 감소",
        "React Query 도입을 통한 서버 상태 동기화 및 중복 API 호출 65% 절감",
        "사내 UI 컴포넌트 라이브러리(디자인 시스템) 구축 주도 및 개발 생산성 향상"
      ]
    },
    {
      id: "exp-2",
      period: "2022.01 ~ 2024.01",
      company: "코드크래프트 (CodeCraft)",
      role: "Full-Stack Developer",
      description: "스타트업 맞춤형 SaaS 비즈니스 솔루션 대시보드 구축 및 신규 서비스 런칭",
      achievements: [
        "다양한 차트와 실시간 지표 분석이 탑재된 관리자용 어드민 대시보드 기획 및 개발",
        "Express 백엔드 레거시 리팩토링 및 테스트 커버리지 70% 확보",
        "CI/CD 파이프라인 (GitHub Actions)을 연동한 무중단 자동 배포 정착"
      ]
    }
  ]
};
