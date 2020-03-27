import styled from "styled-components";

export const Screen = styled.div`
  font-family: DS-Digital, monospace, serif;
  line-height: 1.2;
  word-wrap: break-word;
  min-height: 1.5em;
  font-size: ${props => (props.equation ? "1.5rem" : "2rem")};
  color: ${props => (props.equation ? "#ff7f50" : "#4b0082")};
  text-align: ${props => (props.equation ? "left" : "right")};

  @media (min-height: 720px) {
    font-size: ${props => (props.equation ? "2.5rem" : "3rem")};
  }
`;
