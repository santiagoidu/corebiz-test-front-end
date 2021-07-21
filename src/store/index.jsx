import { createStore } from 'redux';

const storage = JSON.parse(localStorage.getItem('itemCart'));

const initialState = !storage ? 0 : JSON.parse(localStorage.getItem('itemCart'))

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
