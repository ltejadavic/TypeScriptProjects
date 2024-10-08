// src/App.tsx

import React from 'react';
import UserCard from './UserCard'; // Import the UserCard component

function App() {
  return (
    <div className="App">
      <h1>User Card with Optional Props</h1>
      <UserCard name="Alice" age={25} />  {/* Props provided */}
      <UserCard />                        {/* No props provided */}
    </div>
  );
}

export default App;