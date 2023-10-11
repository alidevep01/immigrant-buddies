import "./App.css";
import HomePage from "./components/HomePage";
import Buddies from "./components/Buddies";
import SearchBuddies from "./components/SearchBuddies";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <header>
        <h1>Logo</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Buddies</a>
          <a href="#">Resources</a>
          {isLoggedIn ? <a href="#">Logout</a> : <a href="#">Login</a>}
        </nav>
      </header>
      <main>{isLoggedIn ? <HomePage /> : <Login />}</main>
    </div>
  );
}

export default App;
