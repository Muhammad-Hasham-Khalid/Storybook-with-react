import React from "react";
import { render } from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => {
  return (
    <div>
      <PrimaryButton modifiers="small">Hello World</PrimaryButton>
      <br />
      <br />
      <SecondaryButton modifiers={["large"]}>Hello World</SecondaryButton>
      <br />
      <br />
      <TertiaryButton>Hello World</TertiaryButton>
      <GlobalStyle />
    </div>
  );
};

render(<App />, document.getElementById("root"));
