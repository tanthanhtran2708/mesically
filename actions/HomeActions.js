import {SELECT_ELEMENT} from '../constants/strings';

export function selectElement({title}) {
  return {
    type: SELECT_ELEMENT,
    payload: {title},
  };
}
