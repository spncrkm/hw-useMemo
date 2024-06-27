import React from "react";

const UserSelector = ({ users, onUserSelect }) => {
  const handleUserSelect = (event) => {
    onUserSelect(Number(event.target.value));
  }
  return (
    <select onChange={handleUserSelect}>
      <option value="">Select a user</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelector;
