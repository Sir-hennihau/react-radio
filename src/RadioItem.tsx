import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { Color } from "./Utils";
import { Radio, RadioContext } from "./App";
import { CSS_COLOR_FILTER } from "./Utils";

interface RadioItemProps {
  radio: Radio;
}

export const RadioItem = ({ radio }: RadioItemProps) => {
  const { radios, currentRadio, setCurrentRadio } = useContext(RadioContext);

  const { frequency, name, image } = radio;

  const isExpanded = currentRadio?.name === radio.name;

  const onClick = () => {
    if (isExpanded) return setCurrentRadio(null);

    setCurrentRadio(radio);
  };

  const changeRadio = (changeAmount: number) => {
    if (!currentRadio || !radios) return null;

    const radioIndex = radios.findIndex(
      (radio) => radio.name === currentRadio.name
    );

    const changedRadioIndex = radioIndex + changeAmount;

    const newRadioIndex =
      changedRadioIndex === -1
        ? radios.length - 1
        : changedRadioIndex === radios.length
        ? 0
        : changedRadioIndex;

    setCurrentRadio({ ...radios[newRadioIndex] });
  };

  return (
    <RadioItemContainer>
      {isExpanded && (
        <RadioItemExpandedContainer>
          <RadioItemControlIcon
            alt="minus"
            onClick={() => changeRadio(-1)}
            src="https://img.icons8.com/pastel-glyph/344/minus--v1.png"
          />
          <RadioItemRadioLogo src={image} />
          <RadioItemControlIcon
            alt="plus"
            onClick={() => changeRadio(1)}
            src="https://img.icons8.com/pastel-glyph/344/plus--v1.png"
          />
        </RadioItemExpandedContainer>
      )}

      <RadioItemPreviewContainer>
        <RadioItemName onClick={onClick}>{name}</RadioItemName>

        <RadioItemFrequency>{frequency}</RadioItemFrequency>
      </RadioItemPreviewContainer>
    </RadioItemContainer>
  );
};
const RadioItemContainer = styled.div`
  border-bottom: 1px solid ${Color.GRAY_DARK};
  width: calc(100% - 30px);
`;

const RadioItemPreviewContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const RadioItemName = styled.p`
  color: ${Color.WHITE};
`;

const RadioItemFrequency = styled.p`
  color: ${Color.WHITE};
  font-weight: bold;
`;

const RadioItemExpandedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RadioItemControlIcon = styled.img`
  width: 35px;
  height: 35px;
  filter: ${CSS_COLOR_FILTER};
`;

const RadioItemRadioLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  margin: 20px 0;
`;
