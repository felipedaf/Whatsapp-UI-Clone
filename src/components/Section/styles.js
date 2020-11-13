import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #ededed;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform: ${props => props.appear ? 'translateX(0px)' : 'translateX(-100%)'}; 
  transition: transform .4s cubic-bezier(1,.02,.77,.56);
`

export const TitleContainer = styled.div`
  height: 110px;
  width: 100%;
  background: #00bfa5;
  padding: 0 23px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const TitleActions = styled.div`
  height: 60px;
  width: 100%;
`
