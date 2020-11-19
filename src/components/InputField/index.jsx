import React from "react";
import {
  Wrapper,
  TitleContainer,
  Title,
  InputContainer,
  Input
} from "./styles.js";
import { Icon } from "../../components/index.js";

const InputField = props => {

  return (
    <Wrapper>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <InputContainer>
        <Input>{props.input || "Default"}</Input>
        <Icon name="pen" color="#919191"/>
      </InputContainer>
    </Wrapper>
  )
};

export default InputField;
