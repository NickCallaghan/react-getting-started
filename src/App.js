import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [user, setUser] = useState();

  const handleLogin = (user) => {
    // Set the logged in user
    setUser(user);
  };
  if (!user) {
    return (
      <div className="App">
        <LoginForm welcomeMessage="React Login" handleLogin={handleLogin} />
      </div>
    );
  }
  // Return the home page if the user is logged in
  return <Home user={user} />;
}

export default App;
