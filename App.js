import "./styles.css";

import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    //console.log('before');
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };

  return (
    <div className="App">
      <h1>Hello all</h1>
      <button onClick={loadUsers}>Get Data</button>

      <ul>
        {users.map(({ id, login, avatar_url }) => (
          <li key={id}>
            Name: {login}
            Avator: {avatar_url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;