import React from "react"

const Background = (props) => {


  return (
    <div style={{
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      background: "red"
    }}>
      { props.children }
    </div>
  )
}

export default Background;