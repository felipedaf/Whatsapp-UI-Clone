import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div`
  background: ${props => props.background || "#f6f6f6"};
  height: 50px;
  width: 100%;
  padding: 0 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transition: background 0.2s;
`

export const Input = styled.label`
  background: ${props => props.background || "#fff"};
  height: 35px;
  width: 100%;
  padding-left: 65px;
  padding-right: 32px; 
  border-radius: 18px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  user-select: text;
  overflow: hidden;
`

export const SearchIcon = styled.div`
  height: 24px;
  width: max-content;
  position: absolute;
  left: 24px;
  color: #919191;
  opacity: ${props => props.visible ? '100%' : '0'};
  transform: ${props => props.visible ?
                          'rotate(0)' :
                          (props.name === "back" ?
                                'rotate(-180deg)':
                                'rotate(180deg)'
                          )
              };

  transition: opacity 0.25s, transform 0.25s;
`

export const TextField = styled.div`
  width: min-content;
  min-width: 100%;
  min-height: 24px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 24px;
  cursor: text;
  word-break: break-all;
`

export const PlaceHolder = styled.div`
  font-size: 14px;
  position absolute;
  cursor: text;
  left: 77px;
  color: #999;
  height: 24px;
  line-height: 24px;
  opacity: ${props => props.visible ? '100%' : '0'};
  transition: opacity 0.2s;
`