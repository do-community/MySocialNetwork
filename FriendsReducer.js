import { combineReducers } from 'redux';
import { ADD_FRIEND } from './types';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Alice',
    'Bob',
    'Sammy',
  ],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
        possible,
      } = state;

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      const addedFriend = possible.splice(action.payload, 1);

      // And put friend in friends.current
      current.push(addedFriend);

      // Finally, update the redux state
      const newState = { current, possible };

      return newState;

    default:
      return state
  }
};

export default combineReducers({
  friends: friendsReducer,
});
