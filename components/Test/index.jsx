import React from "react";
import { jsx, css } from "emotion";

const color = "white";

const btn = css({
  width: "300px",
  padding: "32px",
  background: "purple",
  fontSize: "24px",
  borderRadius: "4px",
  "&:hover": {
    color: color
  }
});

const Test = () => {
  return <div className={btn}>Hover to change color.</div>;
};

export default Test;
