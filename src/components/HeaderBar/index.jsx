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
  Icon,
  Dropdown
} from "../../components";

import { connect } from 'react-redux';
import { changeSection } from '../../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    changeSection: section => dispatch(changeSection(section))
  }
};


const HeaderBar = props => {
  const [isDotsSelected, setIsDotsSelected] = useState(false);

  const dropdownOptions = () => [
    {
      label: "New group",
      selected: () => {
        props.changeSection({ section: "newGroup" })
      }
    },
    {
      label: "Create a room",
      selected: () => {}
    },
    {
      label: "Profile",
      selected: () => {
        props.changeSection({ section: "profile" })
      }
    },
    {
      label: "Archived",
      selected: () => {
        props.changeSection({ section: "archived" })
      }
    },
    {
      label: "Starred",
      selected: () => {
        props.changeSection({ section: "starred" })
      }
    },
    {
      label: "Settings",
      selected: () => {
        props.changeSection({ section: "settings" })
      }
    },
    {
      label: "Log out",
      selected: () => {}
    }
  ];

  return (
    <ThemeContext.Consumer>
      {theme => {
        const wrapperColors = {
          backgroundColor: THEME_MODE_COLORS[theme].navHeader
        };

        const iconColor = {
          color: THEME_MODE_COLORS[theme].headerIconsColor
        };

        return (
          <Wrapper {...wrapperColors}>
            <Container>
              <ProfileDiv>
                <ProfileImage src={Image} onClick={() => {props.changeSection({ section: 'profile' })}}/>
              </ProfileDiv>
            </Container>
            <Container justifyContent="flex-end">
              <Button {...iconColor}>
                <Icon name="stories" height="24" />
              </Button>
              <Button
                {...iconColor}
                marginLeft="10px"
                onClick={() => {props.changeSection({ section: 'newChat' })}}
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
              <Dropdown closing={() => {setIsDotsSelected(false)}} options={dropdownOptions()} show={isDotsSelected}/>
            </Container>
          </Wrapper>
        )
      }}
    </ThemeContext.Consumer>
  )
};

const ReduxHeaderBar = connect(null, mapDispatchToProps)(HeaderBar);

export default ReduxHeaderBar;
