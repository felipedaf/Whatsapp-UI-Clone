import React from 'react';
import Profile from './Profile';
import Settings from './Settings';

const SectionContent = props => {

  const contentSelector = {
    profile: () => <Profile />,
    settings: () => <Settings />
  };

  return props.section === null ? <></> : contentSelector[props.section]();

};

export default SectionContent;
