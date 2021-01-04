import { useState } from "react";
import "./App.css";
import SignUpForm from "./SignUpForm";
import Dashboard from "./Dashboard";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  setLoggedIn,
  setPassword,
  setEmail,
  setName,
  setUserName,
} from "./userSlice";

function App() {
  const [error, setError] = useState(undefined);

  const { name, username, password, email, loggedIn } = useSelector(getUser);
  const dispatch = useDispatch();

  function validatePassword($password) {
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;

    if (!passwordRegex.test($password)) {
      return false;
    } else {
      return true;
    }
  }

  const signupHandler = (name, userName, email, password) => {
    if (
      userName.trim().length === 0 ||
      password.trim().length === 0 ||
      name.trim().length === 0 ||
      email.trim().length === 0
    ) {
      setError("Please fill out the required fields");
    } else {
      if (!validatePassword(password)) {
        setError(
          "Password must contain one lowercase letter, one uppercase letter, one special character and one number"
        );
      } else {
        dispatch(setLoggedIn(true));
      }
      console.log(name, userName, email, password);
    }
  };

  const logoutHandler = () => {
    setError(false);
    dispatch(setUserName(""));
    dispatch(setName(""));
    dispatch(setPassword(""));
    dispatch(setEmail(""));
    dispatch(setLoggedIn(false));
  };

  return (
    <div className="main-container">
      {loggedIn ? (
        <Dashboard
          logoutHandler={logoutHandler}
          username={username}
          name={name}
          email={email}
          password={password}
        />
      ) : (
        <SignUpForm signupHandler={signupHandler} error={error} />
      )}
    </div>
  );
}

export default App;
