import React, { createContext, useState, useEffect } from 'react';

// Create User Context
export const UserDetailsContext = createContext();

export const UserDetailsProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    // Retrieve users from localStorage if available
    const savedUsers = localStorage.getItem('Users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    // Store users in localStorage whenever it changes
    localStorage.setItem('Users', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const value = {
    users,
    addUser,
  };

  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
};
