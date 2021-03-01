import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  TitleContainer,
  Title,
  InputContainer,
  Input,
  IconButton,
  IconContainer,
  Remaining
} from "./styles.js";
import { Icon } from "../../components/index.js";

const InputField = props => {

  const [editable, setEditable] = useState(false);
  const [input, setInput] = useState(props.current || "Default");
  const [remaining, setRemaining] = useState(props.maxLength - input.length || props.maxLength || null);
  const inputRef = useRef(null);

  const toggleEditable = () => {
    const element = inputRef.current;
    const elementLen = input.length;
    setTimeout(() => {
      element.focus();
      const range = window.document.createRange()

    }, 0);

    setEditable(!editable);
  }

  const handleValueSize = (value) => value === "\n" ? 0 : value.length;

  const handleChange = event => {
    const value = event.target.innerText;

    if(value.length > props.maxLength) {
      event.target.innerText = input;
      return;
    }

    setRemaining(props.maxLength - handleValueSize(value));
    setInput(value);
  }

  useEffect(() => {
    inputRef.current.textContent = input;
  }, []);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <InputContainer showBorder={editable}>
        <Input
          ref={inputRef}
          contentEditable={editable}
          onInput={handleChange}
          suppressContentEditableWarning="true"
          tabIndex="-1"
        >
        </Input>
        <IconButton >
          <Remaining show={editable}>{remaining}</Remaining>
          <IconContainer size='20px' show={editable}>
            <Icon
              name="emote"
              color="#919191"
              height="20px"
            />
          </IconContainer>
          <IconContainer absolute show={editable} onClick={toggleEditable}>
            <Icon
              name="confirm"
              color="#919191"
            />
          </IconContainer>
          <IconContainer show={!editable} onClick={toggleEditable}>
            <Icon
              name="pen"
              color="#919191"
            />
          </IconContainer>
        </IconButton>
      </InputContainer>
    </Wrapper>
  );
};

export default InputField;
