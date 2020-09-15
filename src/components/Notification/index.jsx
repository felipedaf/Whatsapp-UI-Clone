import React, { useState } from "react";
import {
  Wrapper,
  Container,
  IconDiv,
  Title,
  MessageArea,
  ActionCallContainer,
  ActionCallParent,
  ActionCall,
  Arrow
} from "./styles"
import {
  Icon
} from "../../components"

const Notification = props => {
  const [type, setType] = useState("activate");


  const notificationsData = {
    activate: {
      iconName: "notification",
      title: "Get notified of new messages",
      actionCall: "Turn on desktop notifications"
    },
    notConnected: {
      iconName: "notConnected",
      title: "Phone not connected",
      actionCall: "Learn more"
    }
  }

  return (
    <Wrapper>
      <Container>
        <IconDiv>
          <Icon name={notificationsData[type].iconName} height="48"/>
        </IconDiv>
        <MessageArea>
          <Title>
            {notificationsData[type].title}
          </Title>
          <ActionCallContainer>
            <ActionCallParent>
              <ActionCall>
                {notificationsData[type].actionCall}
              </ActionCall>
              <Arrow>
                {" >"}
              </Arrow>
            </ActionCallParent>
          </ActionCallContainer>
        </MessageArea>
      </Container>
    </Wrapper>
  )
};

export default Notification;