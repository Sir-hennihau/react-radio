import React, { useContext } from "react";
import styled from "styled-components";
import { RadioItem } from "./RadioItem";
import { RadioContext } from "./App";
import Scrollbars from "react-custom-scrollbars";

interface RadioListProps {}

export const RadioList = ({}: RadioListProps) => {
  const { radios } = useContext(RadioContext);

  return (
    <Scrollbars style={{ width: 250, height: 310 }}>
      <RadioListContainer>
        {radios.map((radio, index) => (
          <RadioItem key={index} radio={radio} />
        ))}
      </RadioListContainer>
    </Scrollbars>
  );
};

const RadioListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
