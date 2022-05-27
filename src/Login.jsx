import React, { useState } from "react";
import "./Login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  
  const register = () => {
    if (!name) {
      return alert("Please enter a name");
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img
        src="https://cdn-icons.flaticon.com/png/512/1310/premium/1310025.png?token=exp=1653669605~hmac=b35faa1677f4cb45c794c9a12a4cd6b1"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Имя"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e)}
          type="text"
          placeholder=" url аватара"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="Email"
          placeholder=" E-mail"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="Password"
          placeholder="Пароль"
        />
        <button type="submit" onClick={loginToApp}>
          Зарегистрироваться
        </button>
      </form>

      <p>
        не зарегистрирован?
        <span onClick={register} className="login__register">
          Зарегистрироваться
        </span>
      </p>
    </div>
  );
}

export default Login;
