import styled from "styled-components";

export const Calculator = styled.div`
  position: relative;
  border: 2px solid #008080;
  border-radius: 5px;
  background-color: #ffe4b5;
  padding: 4px;
  width: 300px;

  @media (min-height: 720px) {
    border-width: 4px;
    border-radius: 10px;
    padding: 8px;
    width: 400px;
  }
`;
