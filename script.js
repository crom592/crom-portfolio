// Experience Data
const experiences = [
    {
        title: "서비스 개발본부장",
        company: "주스(Juice)",
        period: "2022.09 - 현재",
        description: [
            "AI악보서비스 리라(ReLa) 개발 리딩 및 오픈 (2022.09 - 2023.09)",
            "지니뮤직 DataMart 프론트개발 리딩",
            "지니BGM 서비스 개발 리딩"
        ]
    },
    {
        title: "개발팀장",
        company: "비브릭",
        period: "2021.08 - 2022.08",
        description: [
            "솔라나 기반 디파이 시스템 개발 및 운영",
            "발행본부 개발팀장 업무 수행",
            "MSA기반의 백엔드 시스템 개발",
            "비브릭앱의 백엔드 기능 개발 담당 및 오픈(설계,개발)"
        ]
    },
    {
        title: "개발팀",
        company: "피어테크",
        period: "2021.04 - 2021.08",
        description: [
            "유동성 공급봇(MM) 정상화",
            "거래소 유동성 공급봇의 거래 로직 장애 문제 해결",
            "코스모스허브4 업그레이드에 따른 스테이킹 서비스 재개",
            "end-point 분석 후 모듈 대응 개발하여 스테이킹 서비스 시작"
        ]
    },
    {
        title: "차장",
        company: "지티이노비젼",
        period: "2020.12 - 2021.04",
        description: [
            "우리은행 자산관리 고도화 프로젝트 프론트 개발",
            "비대면 전문가 상담 인터넷뱅킹, 스마트뱅킹 화면 개발",
            "현업 미인지 케이스 도출 및 개선 제안"
        ]
    },
    {
        title: "차장",
        company: "핀솔정보",
        period: "2018.04 - 2020.10",
        description: [
            "KB손해보험 영업지원 고도화 프로젝트 백엔드 서버 개발",
            "대한행정공제회 차세대 프로젝트 한아름 상품 분석/설계/기간계 개발",
            "DB, 프론트, 백엔드 전반에 대한 분석, 설계 진행",
            "신한생명 오렌지라이프 통합 프로젝트 심사 분석"
        ]
    },
    {
        title: "차장",
        company: "포스켄",
        period: "2012.09 - 2017.10",
        description: [
            "KB손해보험 장기청약 유지보수",
            "장기청약 태블릿 계약전 알릴의무사항 유지보수",
            "장기청약 전자서명 총괄 담당",
            "장기청약 전서식 유지보수"
        ]
    },
    {
        title: "과장",
        company: "텐비트",
        period: "2009.11 - 2012.09",
        description: [
            "교보문고 도서구매 시스템 개발",
            "영풍문고 인터넷서점 시스템 개발/보수",
            "SK브로드밴드 SKB-NITS 시스템 유지보수",
            "LIG시스템 태블릿 장기 청약 태블릿 개발"
        ]
    }
];

// Project Data
const projects = [
    {
        title: "AI악보서비스 리라(ReLa)",
        description: "AI 기반 악보 서비스 개발 및 운영. 서비스 개발본부장으로서 전반적인 개발 리딩",
        image: "https://placehold.co/600x400?text=ReLa+Service",
        tags: ["AI", "Spring Boot", "React", "MSA"],
        link: "https://rela.co.kr"
    },
    {
        title: "지니BGM 서비스",
        description: "기업용 BGM 서비스 개발 리딩. 지니뮤직 DataMart 프론트개발 포함",
        image: "https://placehold.co/600x400?text=GenieBGM",
        tags: ["Spring Boot", "React", "MSA"],
        link: "https://geniebgm.co.kr"
    },
    {
        title: "비브릭 디파이 시스템",
        description: "솔라나 기반 디파이 시스템 개발 및 운영. MSA 기반의 백엔드 시스템 설계 및 개발",
        image: "https://placehold.co/600x400?text=Bbrick+DeFi",
        tags: ["Solana", "Blockchain", "MSA"],
        link: "http://bbrick.com"
    },
    {
        title: "대한행정공제회 차세대 프로젝트",
        description: "한아름 상품(공제회 저축성 상품) 분석/설계/기간계 개발. 이자율과 계산 로직을 하나의 서비스로 통합하여 유지보수성 향상",
        image: "https://placehold.co/600x400?text=Finance+System",
        tags: ["Java", "Spring", "Oracle"],
        link: "#"
    }
];

// Populate Experience Timeline
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    experiences.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        experienceItem.innerHTML = `
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <p class="period">${exp.period}</p>
            <ul>
                ${exp.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        timeline.appendChild(experienceItem);
    });
}

// Populate Projects Grid
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateExperience();
    populateProjects();
});
