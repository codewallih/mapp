export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};