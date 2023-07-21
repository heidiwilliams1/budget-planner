import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<Props>> = ({
  type,
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #e6beae;
  color: #3b5249;
  font-size: 16px;
  font-weight: bold;
  max-width: 200px;
  padding: 5px 15px;
  margin: 15px;
  &:hover {
    background-color: #eee4e1;
    box-shadow: 10px 5px 5px grey;
    cursor: pointer;
  }
  &:disabled {
    background-color: #c8c8c8;
    cursor: not-allowed;
    &:hover {
      background-color: #c8c8c8;
      box-shadow: 0 0 0;
    }
  }
`;

export default Button;
