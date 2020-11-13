import { CHANGE_SECTION } from '../constants';

const initialState = {
  section: null
};

const rootReducer = (state = initialState, action) => {
  if(action === CHANGE_SECTION) {
    const newSection = action.payload.section;

    return { ...state, section: newSection };
  }
  
  return state;
}

export default rootReducer;
