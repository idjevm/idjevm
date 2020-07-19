import { createGlobalStyle } from "styled-components";
import { PRIMARY } from "./constants/colors";
import { mq } from "./constants/theme";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  @media screen and (min-width: ${mq.desktop.extra.minWidth}) {
    font-size: 150%;
  }
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
  font-family: "Poppins", "Roboto", "Oxygen", "Ubuntu";
}

a {
  text-decoration: underline;
  color: blue;
}

.nav-item {
  padding: .5rem 1rem;

  > a,
  > a.nav-link {
    color: #000 !important;
    display: inline;
    padding: 0;
  }

  .active {
    color: blue;
  }
}
`;

export default GlobalStyles;
