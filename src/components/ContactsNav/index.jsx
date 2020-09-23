import React from "react";
import {
  Wrapper,
  ChatContainer
} from "./styles"
import {
  SearchBar
} from "../../components"

const ContactsNav = props => {


  return (
    <Wrapper>
      <SearchBar />
      <ChatContainer />
    </Wrapper>
  )
}

export default ContactsNav;