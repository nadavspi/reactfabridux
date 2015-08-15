import { GET_OPTIONS } from 'actions/options';

export default function options(state = {}, action) {
  switch (action.type) {
    case GET_OPTIONS:
      return action.payload;

    default:
      return state;
  }
}
