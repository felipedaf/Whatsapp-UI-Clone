import React from "react";
import {
  Wrapper,
  Container,
  IconDiv
} from "./styles"
import {
  Icon
} from "../../components"

const Notification = props => {


  return (
    <Wrapper>
      <Container>
        <IconDiv>
          <Icon name="notification" height="48"/>
        </IconDiv>
      </Container>
    </Wrapper>
  )
};

export default Notification;