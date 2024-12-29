import { ADD_USER, DELETE_USER, UPDATE_USER, FETCH_USERS_SUCCESS } from './action';

const initialState = {
  userList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, userList: action.payload };
    case ADD_USER:
      return { ...state, userList: [...state.userList, action.payload] };
    case DELETE_USER:
      return { ...state, userList: state.userList.filter(user => user.id !== action.payload) };
    case UPDATE_USER:
      return {
        ...state,
        userList: state.userList.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};