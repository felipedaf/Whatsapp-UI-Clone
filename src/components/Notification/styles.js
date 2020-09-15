import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
`
  
export const Container = styled.div`
  background-color: ${props => props.backgroundColor || "#9de1fe"};
  width: 100%;
  height: 100%;
  min-height: 88px;
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