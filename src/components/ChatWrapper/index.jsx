import React, { useState } from "react";
import {
  Wrapper,
  Image,
  NoChat,
  MainMessage,
  Description
} from "./styles"
import noChatImage from "../../assets/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"

const ChatWrapper = props => {

  return (
    <Wrapper>
      {props.selectedChat ?
        <div>

        </div> :
        <NoChat>
          <Image src={noChatImage} />
          <MainMessage>Keep your phone connected</MainMessage>
          <Description>WhatsApp connects to your phone to sync messages. To reduce data <br/>
            usage, connect your phone to Wi-Fi.
          </Description>
        </NoChat>  
      }
    </Wrapper>
  )
};

export default ChatWrapper;