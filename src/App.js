import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  const [user, setUser] = useState();

  const handleLogin = (user) => {
    // Set the logged in user
    setUser(user);
  };
  return (
    <div className="App">
      <LoginForm welcomeMessage="React Login" handleLogin={handleLogin} />
    </div>
  );
}

export default App;
