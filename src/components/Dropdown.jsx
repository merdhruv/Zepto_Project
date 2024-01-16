import React, { useState } from 'react';
import DropdownList from './DropdownList';
import './main.css'; // Add your own styling

const Dropdown = () => {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([
    {
        name: "Dhruv Pratap Singh",
        email: "dhruv@gmail.com"
    },
    {
        name: "Aryan Gupta",
        email: "aryan@gmail.com"
    },
    {
        name: "Bhushan Patil",
        email: "bhushan@gmail.com"
    },
    {
        name: "Akash Yadav",
        email: "akash@gmail.com"
    },
    
    {
        name: "Ram Mishra",
        email: "ram@gmail.com"
    },

    {
        name: "Ankita",
        email: "ankita@gmail.com"
    },
    {
        name: "Neha",
        email: "neha@gmail.com"
    },

  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(value.length > 0);
  };

  const handleUserClick = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
    setSelectedUsers([...selectedUsers, user]);
    setInputValue('');
    setShowDropdown(false);
  };

  const handleChipRemove = (user) => {
    const updatedSelectedUsers = selectedUsers.filter((u) => u !== user);
    setSelectedUsers(updatedSelectedUsers);
    setUsers([...users, user]);
  };

  return (
    <div className="dropdown-container">
      <div className="input-container">
        <div className="chip-container">
            {selectedUsers.map((user) => (
            <div key={user.email} className="chip">
                {user.name}
                <button onClick={() => handleChipRemove(user)}>X</button>
            </div>
            ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={()=>{setShowDropdown(true)}}
          placeholder="Type to filter users"
        />
      </div>
      {showDropdown && (
        <DropdownList
          items={users}
          inputValue={inputValue}
          onItemClick={handleUserClick}
        />
      )}
    </div>
  );
};

export default Dropdown;
