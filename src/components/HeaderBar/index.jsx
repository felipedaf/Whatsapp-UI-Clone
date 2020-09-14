import React, { useState } from "react";
import ThemeContext, { THEME_MODE_COLORS } from "../../utils/theme";
import {
  Wrapper,
  Container,
  Button,
  ProfileDiv,
  ProfileImage
} from "./style.js";

import Image from "../../assets/profile.png"

import {
  Icon
} from "../../components";

const HeaderBar = props => {
  const [isDotsSelected, setIsDotsSelected] = useState(false);

  return (
    <ThemeContext.Consumer>
      {theme => {
        const wrapperColors = {
          backgroundColor: THEME_MODE_COLORS[theme].navHeader
        }

        const iconColor = {
          color: THEME_MODE_COLORS[theme].headerIconsColor
        }

        return (
          <Wrapper {...wrapperColors}>
            <Container>
              <ProfileDiv>
                <ProfileImage src={Image}/>
              </ProfileDiv>
            </Container>
            <Container justifyContent="end">
              <Button {...iconColor}>
                <Icon name="stories" height="24" />
              </Button>
              <Button
                {...iconColor}
                marginLeft="10px"
              >
                <Icon name="chat" height="24" />
              </Button>
              <Button
                onClick={() => setIsDotsSelected(!isDotsSelected)}
                {...iconColor}
                marginLeft="10px"
                backgroundColor={isDotsSelected && "rgba(0, 0, 0, .1)"}
              >
                <Icon name="dots" height="24" />
              </Button>
            </Container>
          </Wrapper>
        )
      }}
    </ThemeContext.Consumer>
  )
};

export default HeaderBar;