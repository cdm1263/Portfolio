import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
  font-family: 'Flipahaus-V2';
  src: url('../fonts/Flipahaus-V2.otf') format('opentype');
}

   html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// 추가
html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
	font-family: Pretendard-Regular;
	background: linear-gradient(
      ${({ theme }) => theme.bg[100]},
      ${({ theme }) => theme.bg[200]}
    );
  color: ${({ theme }) => theme.text[100]};
  transition: background 0.5s, color 0.5s;
}

section {
	height: calc(100vh - 150px);
	padding-top: 150px;
	width: 100%;
	max-width: 1200px;
  margin: auto;
  scroll-snap-align: center;
  overflow: hidden;
}

textarea {
	font-family: 'Pretendard-Regular'
}
`;

export default GlobalStyles;
