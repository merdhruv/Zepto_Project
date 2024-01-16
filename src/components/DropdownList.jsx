import React from 'react';

const DropdownList = ({ items, inputValue, onItemClick }) => {
  return (
    <div className="dropdown-list">
      {items
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          user.email.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((user) => (
          <div key={user.email} className="dropdown-item" onClick={() => onItemClick(user)}>
            {user.name} - {user.email}
          </div>
        ))}
    </div>
  );
};

export default DropdownList;
