const generateProjectArray = () => {
  const project1 = {
    id: 1,
    title: "포켓허브 (PokeHub)",
    term: "2023. 10 ~ 진행중",
    skills: [
      "React",
      "ViteJS",
      "Typescript",
      "React Query",
      "Zustand",
      "Framer Motion",
      "SCSS",
      "Vercel",
    ],
    url: "",
    github: "https://github.com/side-project-pokehub/my-pokemon",
    desc: "인기 게임인 포켓몬스터의 포켓몬 정보를 보거나 공유하고, 좋아하는 포켓몬의 카드를 만들어 저장할 수 있는 웹사이트입니다. 팀원들이 모두 게임을 좋아하다보니 재미있는 주제로 프로젝트를 진행해 보면 어떨까 하는 생각에 개발하게 되었습니다.",
  };

  const project2 = {
    id: 2,
    title: "포트폴리오 (Dongmin's Portfolio)",
    term: "2024. 01",
    skills: [
      "React",
      "ViteJS",
      "Typescript",
      "styled-components",
      "Framer Motion",
      "Netlify",
    ],
    url: "",
    github: "https://github.com/cdm1263/Portfolio",
    desc: "개인 포트폴리오 웹사이트입니다. Framer Motion 라이브러리를 사용해 애니메이션을 적용해 높은 퀄리티의 사용자 경험을 제공할 수 있었습니다.",
  };

  const project3 = {
    id: 3,
    title: "우주 부동산 (Woojoo Land)",
    term: "2023. 06 ~ 2023. 07",
    skills: [
      "React",
      "Typescript",
      "styled-components",
      "Redux",
      "React Query",
    ],
    url: "https://woojoo-land.netlify.app/",
    github: "https://github.com/cdm1263/woojoo-land",
    desc: "우주의 땅을 사고 파는 쇼핑몰 웹사이트 입니다. 평범한 쇼핑몰 사이트를 만들기보다 참신하고 특이한 것을 사고 파는 쇼핑몰을 만들어 보면 어떨까 하는 팀원분의 아이디어를 반영하여 우주선, 행성 등을 사고 파는 쇼핑몰을 개발하기로 하였습니다. ",
  };

  const projectArray = [project1, project2, project3];

  return projectArray;
};

export default generateProjectArray;
