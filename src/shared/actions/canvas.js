import fabric from 'fabric';

export const CREATE_CANVAS = 'CREATE_CANVAS';
export const CREATE_FABRIC_CLASS = 'CREATE_FABRIC_CLASS';
export const UPDATE_CANVAS = 'UPDATE_CANVAS';
export const ADD_TO_CANVAS = 'ADD_TO_CANVAS';

export function createCanvas(id) {
  return (dispatch) => {
    const fabricClass = new fabric.Canvas(id);

    dispatch(createFabricClass({
      id,
      fabricClass
    }));

    // TODO: Remove listener with a destroy action
    fabricClass.on('object:modified', function() {
      dispatch(updateCanvas({
        id,
        fabricClass: this
      }));
    });
  };
}

function createFabricClass(payload) {
  return {
    type: CREATE_FABRIC_CLASS,
    payload
  };
}

function updateCanvas(payload) {
  return {
    type: UPDATE_CANVAS,
    payload
  };
}

export function addToCanvas(payload) {
  return {
    type: ADD_TO_CANVAS,
    payload
  };
}
