import { createGlobalStyle } from "styled-components";
import DigitalEot from "../../../fonts/63f874d192fb3892d88d5e26f942b5e2.eot";
import DigitalWoff2 from "../../../fonts/63f874d192fb3892d88d5e26f942b5e2.woff2";
import DigitalWoff from "../../../fonts/63f874d192fb3892d88d5e26f942b5e2.woff";
import DigitalTtf from "../../../fonts/63f874d192fb3892d88d5e26f942b5e2.ttf";
import DigitalSvg from "../../../fonts/63f874d192fb3892d88d5e26f942b5e2.svg";

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "DS-Digital";
  font-style: normal;
  font-weight: normal;
  src: url("${DigitalEot}");
  src: url("${DigitalEot}") format("embedded-opentype"),
      url("${DigitalWoff2}") format("woff2"),
      url("${DigitalWoff}") format("woff"),
      url("${DigitalTtf}") format("truetype"),
      url("${DigitalSvg}") format("svg");
  }

  body {
    background: #deb887;
    margin: 0;
    font-family: DS-Digital, monospace, serif;
  }
`;
