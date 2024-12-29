// src/components/UserForm.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/action";

const UserForm = ({ selectedUser, clearSelection }) => {
  const [formData, setFormData] = useState({ id: "", name: "", email: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now() }));
    }
    clearForm();
  };

  const clearForm = () => {
    setFormData({ id: "", name: "", email: "" });
    if (clearSelection) clearSelection();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {formData.id ? "Update User" : "Add User"}
      </button>
      {formData.id && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={clearForm}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;
