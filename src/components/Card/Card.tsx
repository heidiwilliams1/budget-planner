import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  background: #91a8a4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #f0f7ee;
  padding: 15px;
  margin: 20px;
`;

export default Card;
