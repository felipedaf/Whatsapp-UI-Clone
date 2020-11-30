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
  InputField,
  Dropdown
} from "../../../components"

const Profile = props => {

  const [beforeAnimation, setBeforeAnimation] = useState(true);
  const [showPDropdown, setShowPDropdown] = useState(false);
  const [dropdownTop, setDropdownTop] = useState('0');
  const [dropdownLeft, setDropdownLeft] = useState('0');

  const dropdownOption = () => [
    {
      label: "View photo",
      selected: () => {
      }
    },
    {
      label: "Take photo",
      selected: () => {}
    },
    {
      label: "Upload photo",
      selected: () => {
      }
    },
    {
      label: "Remove photo",
      selected: () => {
      }
    }
  ];

  const openDropdown = event => {
    if(!showPDropdown) {
      setDropdownTop(String(event.pageY) + 'px')
      setDropdownLeft(String(event.pageX) + 'px')
      setShowPDropdown(true);
    }
  };

  return (
    <Wrapper onTransitionEnd={event => event.stopPropagation()}>
      <PictureContainer>
          <Dropdown
            free={true}
            closing={() => setShowPDropdown(false)}
            show={showPDropdown}
            options={dropdownOption()}
            left={dropdownLeft}
            top={dropdownTop}
          />
        <PictureLimiter
          onClick={openDropdown}
          scale={beforeAnimation ? 0 : 1}
          onAnimationEnd={() => setBeforeAnimation(false)}
        >
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
        <InputField title="Your Name" maxLength={30}/>
        <WarningContainer>
          <Warning>
            This is not your username or pin. This name will be visible to your WhatsApp contacts.
          </Warning>
        </WarningContainer>
        <InputField title="About" maxLength={300}/>
      </Form>
    </Wrapper>
  )
}

export default Profile;
