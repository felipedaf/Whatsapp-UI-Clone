import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`
  
export const Menu = styled.div`
  z-index: ${props => props.zIndex || '100'};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0,.26),0 2px 10px 0 rgba(0, 0, 0,.16);
  position: absolute;
  width: 170px;
  padding: 10px 0;
  background: white;
  ${props => props.free ? 'left: ' + props.left : 'right: 4px'};
  ${props => props.free ? 'top: ' + props.top : 'top: 25px'};
  border-radius: 3px;
  transform-origin: ${props => props.free ? 'left' : 'right'} top 0px;
  ${props => props.show ?
      "transform: scale(1); opacity: 1;" :
      "transform: scale(.01); opacity: 0;"
  }
  transition: transform .2s, opacity .15s;
`
