import React from "react";
import {
  Wrapper
} from "./styles"
import {
  HeaderBar,
  Notification,
  ContactsNav
} from "../../components"


const NavWrapper = props => {
  return (
    <Wrapper>
      <HeaderBar />
      <Notification />
      <ContactsNav />
    </Wrapper>
  )
};

export default NavWrapper;