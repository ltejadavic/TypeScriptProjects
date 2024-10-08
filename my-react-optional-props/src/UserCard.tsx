import React from 'react';

// Define the interface for optional props
interface UserCardProps {
  name?: string; // Optional prop
  age?: number;  // Optional prop
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div className="user-card" style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <h2>User Information</h2>
      <p>Name: {name ? name : 'No name provided'}</p>
      <p>Age: {age ? age : 'No age provided'}</p>
    </div>
  );
};

export default UserCard;