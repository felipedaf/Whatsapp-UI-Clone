import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  max-height: ${props => props.show ? "300px" : "0"};
  transition: .5s ease-in;
`
  
export const Container = styled.div`
  overflow: hidden;
  background-color: ${props => props.backgroundColor};
  width: 100%;
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

export const MessageArea = styled.div`
  width: 100%;
  padding-left: 15px;
`

export const Title = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: rgba(48,48,48,0.96);
`

export const ActionCallContainer = styled.div`
  margin-top: 2px;
  font-size: 14px;
`

export const ActionCall = styled.span`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Arrow = styled.span`
  font-weight: bolder;
`

export const ActionCallParent = styled.span`
  
`
