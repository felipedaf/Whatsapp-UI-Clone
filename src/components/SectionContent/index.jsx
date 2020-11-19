import React from 'react';
import Profile from './Profile';

const SectionContent = props => {

  const contentSelector = {
    profile: () => <Profile />
  };

  return props.section === null ? <></> : contentSelector[props.section]();

};

export default SectionContent;
