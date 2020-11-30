import React, { useState, useEffect } from "react";
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
} from "./styles";
import {
  Icon
} from "../../components";

const Notification = props => {
  const [type, setType] = useState(null);
  const [show, setShow] = useState(true);

  const afterHide = () => {
    if(!show) {
      setType(props.type);
      setTimeout(() => setShow(true), 200);
    } 
  }

  useEffect(() => {
    setShow(false);
    if(type === null) {
      setType(props.type);
      setTimeout(() => setShow(true), 0);
    }
  }, [props.type]);

  const notificationsData = {
    activate: {
      iconName: "notification",
      title: "Get notified of new messages",
      actionCall: "Turn on desktop notifications",
      color: "#9de1fe",
    },
    notConnected: {
      iconName: "notConnected",
      title: "Phone not connected",
      actionCall: "Learn more",
      color: "#fed859",
    }
  }

  return (
    type ?
      <Wrapper onTransitionEnd={afterHide} show={show}>
        <Container backgroundColor={notificationsData[type].color}>
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
    :
      <></>
  )
};

export default Notification;
