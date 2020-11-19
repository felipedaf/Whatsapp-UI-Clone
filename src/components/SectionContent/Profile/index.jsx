import React, { useState } from "react";
import {
  Wrapper,
  Picture,
  PictureContainer,
  PictureLimiter,
  PictureChanger,
  PictureChangerContainer,
  PictureChangerContent,
  PictureChangerMessage,
  Form,
  WarningContainer,
  Warning
} from "./styles.js";
import image from "../../../assets/profile.png";
import {
  Icon,
  InputField
} from "../../../components"

const Profile = props => {

  const [beforeAnimation, setBeforeAnimation] = useState(true);

  return (
    <Wrapper onTransitionEnd={event => event.stopPropagation()}>
      <PictureContainer>
        <PictureLimiter scale={beforeAnimation ? 0 : 1} onAnimationEnd={() => setBeforeAnimation(false)}>
          <PictureChangerContainer>
            <PictureChanger>
              <PictureChangerContent>
                <Icon name="camera" color="white"/>        
                <PictureChangerMessage>
                  Change profile photo
                </PictureChangerMessage>
              </PictureChangerContent>
            </PictureChanger>
          </PictureChangerContainer>
          <Picture src={image}/>
        </PictureLimiter>
      </PictureContainer>
      <Form opacity={beforeAnimation ? 0 : 1}>
        <InputField title="Your Name"/>
        <WarningContainer>
          <Warning>
            This is not your username or pin. This name will be visible to your WhatsApp contacts.
          </Warning>
        </WarningContainer>
        <InputField title="About"/>
      </Form>
    </Wrapper>
  )
}

export default Profile;
