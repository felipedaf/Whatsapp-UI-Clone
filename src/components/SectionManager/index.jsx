import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeSection } from "../../redux/actions";
import {
  Section,
  SectionContent
} from "../../components";

const mapStateToProps = state => {
  return {
    section: state.section
  };
};

const SectionManager = props => {
  const [canChange, setCanChange] = useState(true);
  const [current, setCurrent] = useState(null);
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    if(props.section === null){
      setShowSection(false);
    } else if(canChange) {
      setCurrent(props.section);
      setShowSection(true);
    }

  }, [props.section]);

  useEffect(() => {
    if(canChange) {
      setCurrent(null);
    }
  }, [canChange]);

  const sections = {
    profile: () => (
      <Section name="Profile" show={showSection} change={setCanChange}>
        <SectionContent section="profile"/>
      </Section>
    ),
    newChat: () => <Section name="New chat" show={showSection} change={setCanChange}/>,
    newGroup: () => <Section name="Add group participants" show={showSection} change={setCanChange}/>,
    archived: () => <Section name="Archived chats" show={showSection} change={setCanChange}/>,
    starred: () => <Section name="Starred messages" show={showSection} change={setCanChange}/>,
    settings: () => <Section name="Settings" show={showSection} change={setCanChange}/>,
  };


  return current !== null ? sections[current]() : <></>;
};

const ReduxSectionManager = connect(mapStateToProps)(SectionManager);

export default ReduxSectionManager;
