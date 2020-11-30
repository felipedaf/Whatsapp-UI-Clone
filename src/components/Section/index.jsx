import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  TitleContainer,
  ContentContainer,
  TitleActions,
  TitleContent,
  Title,
  BackButton
} from './styles';
import { Icon } from './..';
import { connect } from 'react-redux';
import { changeSection } from '../../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    changeSection: section => dispatch(changeSection(section))
  }
}

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
      props.change(false);
    }
  }, [mounted])

  const unmount = event => {
    if(!show) {
      setMounted(false);
      props.change(true);
    }
  }

  return mounted && (
    <Wrapper appear={show} onTransitionEnd={unmount}>
      <TitleContainer>
        <TitleActions >
          <TitleContent>
            <BackButton onClick={() => {
                props.changeSection({ section: null })
              }}>
              <Icon name="back" color="white"/>
            </BackButton>
            <Title>{props.name}</Title>
          </TitleContent>
        </TitleActions>
      </TitleContainer>
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </Wrapper>
  )

};

const ReduxSection = connect(null, mapDispatchToProps)(Section);

export default ReduxSection;
