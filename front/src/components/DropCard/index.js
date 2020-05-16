import React, { useEffect, useState } from "react";

import { Wrapper } from "./dropCard.style";

const duration = 4;

const DropCard = (props) => {
  const [fade, setFade] = useState("in");

  const { message, type, setDropCard } = props;

  useEffect(() => {
    setTimeout(() => {
      setFade("out");
      setTimeout(() => {
        setDropCard({ active: false });
      }, 700);
    }, duration * 1000);
  }, []);

  return (
    <Wrapper fade={fade} type={type}>
      {message}
    </Wrapper>
  );
};

export default DropCard;
