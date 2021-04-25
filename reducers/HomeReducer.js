import {SELECT_ELEMENT} from '../constants/strings';

const initialState = {
  data: [
    {title: 'Hiphop', color: '#E0BBE4', isSelected: true},
    {title: 'Ambient', color: '#957DAD', isSelected: false},
    {title: 'Relax', color: '#D291BC', isSelected: false},
    {title: 'Chill', color: '#FEC8D8', isSelected: false},
    {title: 'Flex', color: '#FFDFD3', isSelected: false},
  ],
};

const homeReducer = (state = initialState, action) => {
  const {type} = action;
  const {payload} = action;
  switch (type) {
    case SELECT_ELEMENT:
      const {data} = state;
      const newState = data.map((category, index) => {
        category.isSelected = category.title === payload.title;
        return category;
      });
      return {...state, data: newState};
    default:
      break;
  }
};

export default homeReducer;
