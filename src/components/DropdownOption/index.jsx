import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Menu
} from "./styles"

const DropdownOption = props => {
  
  return (
    <Wrapper onClick={props.action}>
      {props.label}
    </Wrapper>
  )

}

export default DropdownOption;
