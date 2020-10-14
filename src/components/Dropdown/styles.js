import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  position: relative;
  z-index: 100;
  `
  
export const Menu = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0,.26),0 2px 10px 0 rgba(0, 0, 0,.16);
  position: absolute;
  height: 400px;
  width: 200px;
  background: white;
  right: 4px;
  top: 25px;
  border-radius: 3px;
  transform-origin: right top 0px;
  ${props => props.show ?
      "transform: scale(1); opacity: 1;" :
      "transform: scale(.01); opacity: 0;"
  }
  transition: transform .2s, opacity .15s;
`