import styled, { css } from "styled-components";

export const Button = styled.button`
  position: relative;
  font-family: DS-Digital, monospace, serif;
  height: 75px;
  width: 75px;
  border: none;
  outline: 2px solid #8a2be2;
  background-color: #c0c0c0;
  font-size: 1.5rem;
  color: #8a2be2;
  &:hover {
    outline: 2px solid #fffafa;
    color: #fffafa;
    z-index: 1;
    cursor: crosshair;
  }

  ${(props) =>
    props.AC &&
    css`
      background-color: #00ff00;
    `}
  ${(props) =>
    props.DEL &&
    css`
      background-color: #6495ed;
      width: 150px;
    `}
  ${(props) =>
    props.operators &&
    css`
      background-color: #d2691e;
    `}
  ${(props) =>
    props.equal &&
    css`
      background-color: #00ffff;
    `}
  ${(props) =>
    props.zero &&
    css`
      background-color: #808080;
      width: 150px;
    `}

  @media (min-width: 720px) {
    height: 100px;
    width: 100px;
    font-size: 2.5rem;
    ${(props) =>
      (props.DEL || props.zero) &&
      css`
        width: 200px;
      `}
  }
`;
