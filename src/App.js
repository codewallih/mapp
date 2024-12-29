// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="mb-4">User Management</h1>
        <UserForm selectedUser={selectedUser} clearSelection={() => setSelectedUser(null)} />
        <UserList selectUser={(user) => setSelectedUser(user)} />
      </div>
    </Provider>
  );
};

export default App;
