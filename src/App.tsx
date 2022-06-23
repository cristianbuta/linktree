import { Content } from "~components";
import GlobalStyle from "./global.style";
import React from "react";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Content />
    </>
  );
};

export default React.memo(App);
