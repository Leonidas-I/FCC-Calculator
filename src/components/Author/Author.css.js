import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  font-size: 1.5rem;
  color: #ff4500;
  margin-top: 1em;
  &:hover {
    color: #fff;
    transition: color 2s ease 0.5s;
    cursor: not-allowed;
  }
  a {
    text-decoration: none;
  }

  @media (min-height: 720px) {
    font-size: 2.5rem;
  }
`;
