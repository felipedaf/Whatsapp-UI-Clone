import React, { useState } from "react";
import {
  Section
} from "../../components";


const SectionManager = props => {

  const sections = {
    none: <></>,
    test: <Section show={props.show}/>

  };


  return sections[props.current];
}

export default SectionManager;
