import {combineReducers} from 'redux';
import trackingR from './trackingReducer';
import scormReducer from './scormReducer';
import userProfileReducer from './userProfileReducer';
import waitForUserProfileReducer from './waitForUserProfileReducer';
import gameReducer from './gameReducer';

const GlobalState = combineReducers({
  tracking:trackingR,
  scorm:scormReducer,
  user_profile:userProfileReducer,
  wait_for_user_profile:waitForUserProfileReducer,
  game:gameReducer,
});

export default GlobalState;