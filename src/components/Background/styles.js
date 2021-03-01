import styled from "styled-components";

export const Bg = styled.div`
  background-color: ${props => props.backgroundColor || "#dddbd1"};
  background-image: ${props => props.backgroundImage || "none"};
  min-height: 100vh;
  width: 100%;
  min-width: max-content;
  height: 100%;
  display: flex;
  flex-direction: row;
`
