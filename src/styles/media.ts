import { css, CSSProp } from "styled-components";

interface Sizes {
  [key: string]: number;
}

const sizes: Sizes = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

type Media = {
  [key in keyof Sizes]: (styles: TemplateStringsArray) => CSSProp;
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (styles) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${styles}
      }
    `;
  return acc;
}, {} as Media);

export default media;
