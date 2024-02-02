const generateProjectArray = () => {
  const project1 = {
    id: 1,
    title: "포켓허브 (PokeHub)",
    term: "2023. 10 ~ 진행중",
    skills: ["React", "Typescript", "SCSS"],
    url: "",
    github: "https://github.com/side-project-pokehub/my-pokemon",
    desc: "설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다. ",
  };

  const project2 = {
    id: 2,
    title: "포트폴리오 (Dongmin's Portfolio)",
    term: "2024. 01",
    skills: [
      "React",
      "Typescript",
      "styled-components",
      "Framer Motion",
      "Netlify",
    ],
    url: "",
    github: "https://github.com/cdm1263/Portfolio",
    desc: "포트폴리오 웹사이트입니다. Framer Motion 라이브러리를 사용해 애니메이션을 적용해 높은 퀄리티의 사용자 경험을 제공할 수 있었습니다.",
  };

  const project3 = {
    id: 3,
    title: "우주 부동산 (Woojoo Land)",
    term: "2023. 06 ~ 2023. 07",
    skills: ["React", "Typescript", "styled-components"],
    url: "https://woojoo-land.netlify.app/",
    github: "https://github.com/cdm1263/woojoo-land",
    desc: "설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.설명을 적는 칸입니다.",
  };

  const projectArray = [project1, project2, project3];

  return projectArray;
};

export default generateProjectArray;
