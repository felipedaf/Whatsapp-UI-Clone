import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Menu
} from "./styles"

const Dropdown = props => {
  const [isAppearing, setAppear] = useState(props.show);
  const [isMounted, setMount] = useState(props.show);

  useEffect(() => {
    if(props.show)
      setMount(true);
    else
      setAppear(false);
  }, [props.show]);

  useEffect(() => {
    if(isMounted)
      setTimeout(() => setAppear(true), 20);
  }, [isMounted]);

  const unmount = () => {
    if(!isAppearing)
      setMount(false);
  };

  return isMounted &&
        <Wrapper>
          <Menu show={isAppearing} onTransitionEnd={unmount}>

          </Menu>
        </Wrapper>
}

export default Dropdown;