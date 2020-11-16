import React, { useRef, useState, useEffect } from "react";
import ThemeContext, { THEME_MODE_COLORS } from "../../utils/theme";
import { Icon } from "../../components";
import {
  Wrapper,
  Container,
  Input,
  SearchIcon,
  TextField,
  PlaceHolder
} from "./styles";

const SearchBar = props => {

  const [isEditing, setEditing] = useState(false);
  const [placeholder, setPlaceholder] = useState(true);
  const [phVisibility, setPhVisibility] = useState(true);

  const inputRef = useRef(null);

  const togglePlaceholder = () => {
    setPlaceholder(!isEditing)
  };

  useEffect(() => {
    if (isEditing){
      inputRef.current.focus();
      setPhVisibility(false);
    } else {
      if (inputRef.current.innerHTML.length === 0
      || inputRef.current.innerHTML === "<br>") {

        //Mount.
        togglePlaceholder()

        //Trigger transition after mount.
        setTimeout(() => {
          setPhVisibility(true)
        }, 100)
      };
    };
  }, [isEditing]);

  return (
    <ThemeContext.Consumer>
      { theme => (
          <Wrapper boxShadow={!phVisibility}>
            <Container background={!phVisibility && 'white'}>
              <SearchIcon
                visible={phVisibility}
              >
                <Icon name="search"/>
              </SearchIcon>
              <SearchIcon
                style={{color: "#33b7f6"}}
                visible={!phVisibility}
                name="back"
              >
                <Icon name="back"/>
              </SearchIcon>

              { placeholder &&
                  <PlaceHolder 
                    onClick={() => setEditing(!isEditing)}
                    visible={phVisibility}
                    onTransitionEnd={() => { togglePlaceholder()}}
                  >
                      Search or start new chat
                  </PlaceHolder>
              }

              <Input>
                <TextField
                  ref={inputRef}
                  contentEditable
                  onFocus={() => setEditing(true)}
                  onBlur={() => setEditing(false)}
                />
              </Input>
            </Container>
          </Wrapper>
        )
      }
    </ThemeContext.Consumer>
  )
};

export default SearchBar;
