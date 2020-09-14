import React from "react";
import {
  Wrapper
} from "./styles"
import {
  HeaderBar,
  Notification
} from "../../components"


const NavWrapper = props => {
  return (
    <Wrapper>
      <HeaderBar />
      <Notification />
    </Wrapper>
  )
};

export default NavWrapper;