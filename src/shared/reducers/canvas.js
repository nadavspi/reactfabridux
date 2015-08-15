import {
  CREATE_FABRIC_CLASS,
  UPDATE_CANVAS,
  ADD_TO_CANVAS
} from 'actions/canvas';

export default function canvas(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case CREATE_FABRIC_CLASS:
    case UPDATE_CANVAS:
      return {
        ...state,
        [payload.id]: {
          fabricClass: payload.fabricClass,
	  state: payload.fabricClass.toObject()
        }
      };
    case ADD_TO_CANVAS:
      const newClass = state[payload.id].fabricClass.add(payload.newObject);
      return {
        ...state,
        [payload.id]: {
          fabricClass: newClass,
	  state: newClass.toObject()
        }
      };
    default:
      return state;
  }
}
