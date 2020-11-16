import React, { useRef, useState, useEffect } from "react";
import {
  Wrapper,
  Menu
} from "./styles"
import DropdownOption from "../DropdownOption";
import { connect } from "react-redux";
import { changeSection } from "../../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    changeSection: section => dispatch(changeSection(section))
  }
}

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
    else
      props.closing();
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
          props.changeSection({ section: "newGroup" })
        }
      },
      {
        label: "Create a room",
        selected: () => {}
      },
      {
        label: "Profile",
        selected: () => {
          props.changeSection({ section: "profile" })
        }
      },
      {
        label: "Archived",
        selected: () => {
          props.changeSection({ section: "archived" })
        }
      },
      {
        label: "Starred",
        selected: () => {
          props.changeSection({ section: "starred" })
        }
      },
      {
        label: "Settings",
        selected: () => {
          props.changeSection({ section: "settings" })
        }
      },
      {
        label: "Log out",
        selected: () => {}
      }
    ];

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
    <Wrapper onBlur={() => { setAppear(false) }} tabIndex="-1" ref={dropdownRef}>
          <Menu show={isAppearing} onTransitionEnd={unmount}>
            { mountOptions() }
          </Menu>
        </Wrapper>
}

const ReduxDropdown = connect(null, mapDispatchToProps)(Dropdown);

export default ReduxDropdown;
