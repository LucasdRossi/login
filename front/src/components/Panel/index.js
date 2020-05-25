import React from "react";

// STYLES
import { Wrapper } from "./panel.style";

const Panel = (props) => <Wrapper for={props.for}>{props.children}</Wrapper>;

export default Panel;
