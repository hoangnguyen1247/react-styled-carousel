import React from "react";
import styled from "styled-components";

const RightArrowWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: inline-flex;
    z-index: 1;
    align-items: center;
`;

const RightArrowButton = styled.button`
    background-color: ${({ disabled }) => disabled ? '#B2B2B2' : '#000000' };
    cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer" };
`;

export const RightArrow = ({ onClick, disabled }) => {
    return (
      <RightArrowWrapper>
        <RightArrowButton onClick={onClick} disabled={disabled}>Right</RightArrowButton>
      </RightArrowWrapper>
    )
}
