import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))

        // ...
      } else {
        // User is signed out
       dispatch(logout())
      }
    });
    
  }, []);
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
