import { ADD_FRIEND } from './types';

export const addFriend = friendsIndex => (
  {
    type: ADD_FRIEND,
    payload: friendsIndex,
  }
);
