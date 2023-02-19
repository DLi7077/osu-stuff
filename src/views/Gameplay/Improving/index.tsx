import React from "react";
import Combo from "./Combo";
import Accuracy from "./Accuracy";

export default function Improving(props: { theme: ColorTheme }) {
  return (
    <>
      <Combo {...props} />
      <Accuracy {...props} />
    </>
  );
}
