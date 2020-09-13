import React from "react"
import ThemeContext, { THEME_MODE_COLORS } from "../../utils/theme"
import { Bg } from "./styles"

const Background = (props) => {


  return (
    <ThemeContext.Consumer>
      {theme => {
        
        const colors = {
          backgroundColor: THEME_MODE_COLORS[theme].bgColor,
          backgroundImage: THEME_MODE_COLORS[theme].bgGradient
        }

        return (
          <Bg { ...colors }>
            { props.children }
          </Bg>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Background;