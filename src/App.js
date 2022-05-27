import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser);
console.log(user)
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="App__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
