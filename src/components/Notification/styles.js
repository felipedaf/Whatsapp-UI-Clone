import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: ${props => props.height || "90px"};
`
  
export const Container = styled.div`
  background-color: ${props => props.backgroundColor || "#9de1fe"};
  width: 100%;
  height: 100%;
  padding: 13px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

export const IconDiv = styled.div`
  width: 48px;
  display: flex;
  align-items: center;
  color: white;
`