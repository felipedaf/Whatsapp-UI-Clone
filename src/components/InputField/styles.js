import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 14px 30px 10px;
  background-color: white;
  box-shadow: 0 1px 3px #00000014;
  box-sizing: border-box;
  margin-bottom: 10px;
`

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 14px;
`

export const Title = styled.span`
  color: #009688;
  font-size: 14px;
  line-height: normal;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 36px;
  border-bottom: 2px solid ${props => props.showBorder ? '#00bfa5' : 'white'};
  justify-content: space-between;
  transition: border-bottom linear .2s;
`

export const Input = styled.div`
  width: 100%;
  max-width: calc(100% - 90px);
  overflow-wrap: break-word;
  min-height: 20px;
  font-size: 17px;
  line-height: 20px;
  margin: 8px 0;
`

export const IconButton = styled.div`
  position: relative;
  height: ${props => props.size || '24px'};
  margin: 2px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  justify-content: end;

`

export const IconContainer = styled.div`
  ${props => props.absolute && 'position: absolute;'}
  ${props => props.absolute && 'right: 4px;'}
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity linear .2s;
  margin: 0 2px;
  width: 20px;
`

export const Remaining = styled.div`
  height: 100%;
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity linear .2s;
  align-items: center;
  justify-content: end;
  display: flex;
  margin: 0 4px 0 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
`
