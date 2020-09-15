import React from "react";
import ThemeContext, { THEME_MODE_COLORS } from "../../utils/theme"
import {
  Wrapper,
  Container,
  Input
} from "./styles"

const SearchBar = props => {


  return (
    <ThemeContext.Consumer>
      { theme => (
          <Wrapper>
            <Container>
              <Input />
            </Container>
          </Wrapper>
        )
      }
    </ThemeContext.Consumer>
  )
};

export default SearchBar;