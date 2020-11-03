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
      }, 50);
    }
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

  const mountOptions = () => {
    const options = [
      {
        label: "New group",
        selected: () => {
          console.log("You selected the first option!")
        }
      },
      {
        label: "Create a room",
        selected: () => {}
      },
      {
        label: "Profile",
        selected: () => {}
      },
      {
        label: "Archived",
        selected: () => {}
      },
      {
        label: "Starred",
        selected: () => {}
      },
      {
        label: "Settings",
        selected: () => {}
      },
      {
        label: "Log out",
        selected: () => {}
      }
    ];

    return options.map(option => {
      return <DropdownOption key={option.label} action={option.selected} label={option.label}></DropdownOption>
    });
  }

  return isMounted &&
    <Wrapper onBlur={() => { setAppear(false) }} tabIndex="0" ref={dropdownRef}>
          <Menu show={isAppearing} onTransitionEnd={unmount}>
            { mountOptions() }
          </Menu>
        </Wrapper>
}

export default Dropdown;
