import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  TitleContainer,
  ContentContainer,
  TitleActions
} from './styles';

const Section = props => {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    if(props.show) {
      setMounted(true);
    }
    else {
      setShow(false);
    }
  }, [props.show])

  useEffect(() => {
    if(mounted) {
      setTimeout(() => {setShow(true)}, 20);

    }
  }, [mounted])

  const unmount = () => {
    if(!show)
      setMounted(false);
  }

  return mounted && (
    <Wrapper appear={show} onTransitionEnd={unmount}>
      <TitleContainer>
        <TitleActions >
        </TitleActions>
      </TitleContainer>
      <ContentContainer>
      </ContentContainer>
    </Wrapper>
  )

};

export default Section;
