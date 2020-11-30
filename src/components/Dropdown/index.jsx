import React, { useRef, useState, useEffect } from "react";
import {
  Wrapper,
  Menu
} from "./styles"
import DropdownOption from "../DropdownOption";

const Dropdown = props => {
  const [isAppearing, setAppear] = useState(props.show);
  const [isMounted, setMount] = useState(props.show);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if(props.show) {
      setMount(true);
      setTimeout(() => {
        dropdownRef.current.focus();
      }, 0);
    }
    else
      setAppear(false);
  }, [props.show]);

  useEffect(() => {
    if(isMounted)
      setTimeout(() => setAppear(true), 0);
    else
      props.closing();
  }, [isMounted]);

  const unmount = () => {
    if(!isAppearing)
      setMount(false);
  };

  const mountOptions = () => {
    const options = props.options

    return options.map(option => {
      return <DropdownOption 
        key={option.label}
        action={() => {
          option.selected();
          props.closing();
        }}
        label={option.label}
      />
    });
  }

  return isMounted &&
    <>
    {
      props.free ?
        <Menu
          free={true}
          show={isAppearing}
          onTransitionEnd={unmount}
          tabIndex="-1"
          ref={dropdownRef}
          zIndex={props.z}
          onBlur={() => { setAppear(false) }}
          top={props.top || '0'}
          left={props.left || '0'}
        >
          { mountOptions() }
        </Menu>
      :
        <Wrapper
          onBlur={() => { setAppear(false) }}
          tabIndex="-1"
          ref={dropdownRef}
        >
          <Menu show={isAppearing} onTransitionEnd={unmount}>
            { mountOptions() }
          </Menu>
        </Wrapper>
    }
    </>
}


export default Dropdown;
