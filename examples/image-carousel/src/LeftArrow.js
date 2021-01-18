import React from "react";
import styled from "styled-components";

const LeftArrowWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: inline-flex;
    z-index: 1;
    align-items: center;
`;

const LeftArrowButton = styled.button`
    background-color: ${({ disabled }) => disabled ? '#B2B2B2' : '#000000' };
    cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer" };
`;

export const LeftArrow = ({ onClick, disabled }) => {
    return (
      <LeftArrowWrapper>
        <LeftArrowButton onClick={onClick} disabled={disabled} >Left</LeftArrowButton>
      </LeftArrowWrapper>
    )
}
