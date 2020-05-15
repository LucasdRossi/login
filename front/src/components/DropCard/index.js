import React from "react";

import { Wrapper } from "./dropCard.style";

const DropCard = (props) => {
  const { message } = props;

  return <Wrapper>{message}</Wrapper>;
};

export default DropCard;
