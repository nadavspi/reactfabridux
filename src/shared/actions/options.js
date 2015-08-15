export const GET_OPTIONS = 'GET_OPTIONS';

const API = {
  1: {
    images: [
      'http://placehold.it/250/ffffff/000000',
      'http://placehold.it/250/ff8000/000000',
      'http://placehold.it/250/00ffff/000000'
    ]
  },
  2: {
    images: [
      'http://placehold.it/150/ffffff/000000',
      'http://placehold.it/150/ff8000/000000',
      'http://placehold.it/150/00ffff/000000'
    ]
  }
};

export function getOptions(id) {
  return {
    type: GET_OPTIONS,
    payload: {
      id,
      [id]: API[id]
    }
  };
}
