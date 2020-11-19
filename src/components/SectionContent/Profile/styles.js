import styled, { keyframes } from "styled-components";

const picturePresentation = keyframes`
  0% { 
    transform: scale(0, 0);
    opacity: 0%;
  }
  100% {
    transform: scale(1, 1);
    opacity: 100%;
  }
`

const formPresentation = keyframes`
  0% { 
    transform: translateY(-60px);
    opacity: 0%;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PictureContainer = styled.div`
  margin: 28px;
  height: 200px;
  display: flex;
  justify-content: center;
`

export const PictureLimiter = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 100%;
  width: 200px;
  transform: ${({ scale }) => `scale(${scale}, ${scale})`};
  animation-name: ${picturePresentation};
  animation-duration: .45s;
  animation-delay: .2s;
  animation-timing-function: cubic-bezier(0,1.01,.98,.99);
`

export const PictureChangerContainer = styled.span`
  position: relative;
`

export const PictureChanger = styled.div`
  position: absolute;
  z-index: 2;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #666c;
  opacity: 0;
  transition: opacity .2s;
  padding-top: 20px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export const PictureChangerMessage = styled.div`
  color: white;
  width: 80px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  font-weight: 100;
  font-size: 12px;
`

export const PictureChangerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Picture = styled.img`
  height: 100%;
  width: 100%;
`

export const Form = styled.form`
  height: 100%; 
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: ${({ opacity }) => opacity};
  animation-name: ${formPresentation};
  animation-duration: .5s;
  animation-delay: .37s;
  animation-timing-function: cubic-bezier(0,1.01,.98,.99);
`

export const WarningContainer = styled.div`
  margin: 4px 20px 28px 30px;
`

export const Warning = styled.span`
  color: #00000073;
  font-size: 14px;
  line-height: 20px;
`
