import { createContext, useContext, useReducer } from 'react';

const initialToGets = [{ id: Date.now(), text: 'apples', done: false }];

const toGetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOGET':
      return [ ...state, { id: Date.now(), text: action.payload.text, done: false }];
    case 'UPDATE_TOGET':
      return state.map((toget) => {
        if(toget.id === action.payload.toget.id) {
          const { done, text } = action.payload.toget;
          return { ...toget, text, done };
        }
        return toget;
      });
    case 'DELETE_TOGET':
      return state.filter((toget) => toget.id !== action.payload.id);
    default:
      throw new Error(`Action type ${action.type} is not supported.`);
  }
};