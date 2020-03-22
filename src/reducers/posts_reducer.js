import {SET_POSTS} from '../actions';
import {FETCH_POST} from '../actions';

export default function (state=[], action) {
  switch(action.type) {
    case SET_POSTS:
      return action.payload;
    case FETCH_POST:
      return [action.payload];
    default:
      return state;

  }

}
