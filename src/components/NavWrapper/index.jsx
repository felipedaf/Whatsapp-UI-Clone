import React, { useState, useEffect } from "react";
import {
  Wrapper
} from "./styles"
import {
  HeaderBar,
  Notification,
  ContactsNav
} from "../../components"


const NavWrapper = props => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNotification("notConnected");
      setTimeout(() => {
        setNotification("activate");
        setTimeout(() => {
          setNotification(null);
        }, 3000)
      }, 4000);
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <HeaderBar />
      <Notification type={notification}/>
      <ContactsNav />
    </Wrapper>
  )
};

export default NavWrapper;
