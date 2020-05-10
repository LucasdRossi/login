import React from "react";

// STYLES
import { Wrapper } from "./panel.style";

const Panel = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Panel;
