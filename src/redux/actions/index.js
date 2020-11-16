import { CHANGE_SECTION } from '../constants';

const createAction = (type, payload) => {
  return {
    type,
    payload
  };
};

export const changeSection = payload => {
  return createAction(CHANGE_SECTION, payload);
};
