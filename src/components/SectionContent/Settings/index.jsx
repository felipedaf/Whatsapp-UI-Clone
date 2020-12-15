import React from "react";
import profile from "../../../assets/profile.png";
import {
  SettingsOption,
  Icon
} from "../../../components"
import {
  Wrapper,
  Background,
  Image,
  ImageContainer,
  ImageWrapper,
  ImageLabel,
  Label,
  LabelContainer,
  IconContainer,
  OptionWrapper
} from "./styles.js";

const Settings = props => {
  

  const buildOptions = () => {

    const iconColor = "#919191";

    const settingsOptions = [
      {
        iconName: "settingsNotification",
        label: "Notifications",
        action: () => {}
      },
      {
        iconName: "settingsTheme",
        label: "Theme",
        action: () => {}
      },
      {
        iconName: "settingsWallpaper",
        label: "Chat Wallpaper",
        action: () => {}
      },
      {
        iconName: "settingsBlocked",
        label: "Blocked",
        action: () => {}
      },
      {
        iconName: "settingsHelp",
        label: "Help",
        action: () => {}
      }
    ]

    return settingsOptions.map(option => (
      <SettingsOption onClick={option.action}>
        <OptionWrapper>
          <IconContainer>
            <Icon name={option.iconName} color={iconColor}/>
          </IconContainer>
          <LabelContainer>
            <Label>{option.label}</Label>
          </LabelContainer>
        </OptionWrapper>
      </SettingsOption>
    ))
  }
  
  return (
    <Background>
      <Wrapper>
        <SettingsOption onClick={() => console.log("Testing!")}>
          <OptionWrapper>
            <ImageWrapper>
              <ImageContainer>
                <Image src={profile}/>
              </ImageContainer>
            </ImageWrapper>
            <ImageLabel>Default</ImageLabel>
          </OptionWrapper>
        </SettingsOption>
        {buildOptions()}
      </Wrapper>
    </Background>
  )
};

export default Settings;
