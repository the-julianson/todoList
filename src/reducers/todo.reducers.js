import uuid from "uuid/dist/v4";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/actions";

const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      state = action.payload ? [...state, { id: uuid(), task: action.payload, complete: false }] : state;
      return  state;
    case REMOVE_TODO:
      state = state.filter(todo => todo.id !== action.payload);
      return state;
    case TOGGLE_TODO:
      console.log(action.payload);
      state = state.map(todo =>
        todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
      );
      return state;
    default:
      return state;
  }
};
export default todosReducer;

