import React from "react";
import {
  Wrapper,
  Content
} from "./styles.js";

const SettingsOption = props => {

  return (
    <Wrapper onClick={props.onClick}>
      {props.children}
    </Wrapper>
  )
};


export default SettingsOption;
