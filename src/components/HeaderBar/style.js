import styled from "styled-components"

export const Wrapper = styled.header`
  height: 39px;
  padding: 10px 16px;
  background: ${props => props.backgroundColor || "#ededed"};
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Container = styled.div`
  align-items: center;
  justify-content: ${props => `${props.justifyContent || "start"}`};
  display: flex;
`

export const Button = styled.button`
  background-color: ${props => props.backgroundColor || "transparent"};
  padding: 8px;
  border-radius: 50%;
  height: min-content;
  border: none;
  display: flex;
  align-content: center;
  margin-left: ${props => props.marginLeft || "0px"};
  color: ${props => props.color || "black"};
  transition: background-color 0.1s ease-in;
  cursor: pointer;
  outline: none;
`

export const ProfileDiv = styled.div`
  height: ${props => props.size || "40px"};
  width: ${props => props.size || "40px"};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  height: 100%;
`
