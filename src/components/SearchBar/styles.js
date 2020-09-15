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
`

export const Input = styled.label`
  background: ${props => props.background || "#fff"};
  height: 35px;
  width: 100%;
  display: inline-block;
  border-radius: 18px;
`