import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
  border-left: 1px solid rgba(0,0,0,0.08);
  box-sizing: border-box;
`
  
export const Image = styled.img`
  width: 50%;
  max-width: 350px;
  min-width: 280px;
  padding: 20px;
`
  
export const NoChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 6px solid #4adf83;
  box-sizing: border-box;
`

export const MainMessage = styled.h1`
  width: 60%;
  text-align: center;
  font-weight: 500;
  font-size: 36px
  color: #525252;
`

export const Description = styled.div`
  width: 66%;
  text-align: center;
  font-weight: 100;
  color: rgba(0,0,0,0.45);
  font-size: 14px;
  margin-bottom: 80px;
`