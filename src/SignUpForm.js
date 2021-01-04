import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  setName,
  setUserName,
  setEmail,
  setPassword,
} from "./userSlice";

export default function SignUpForm({ signupHandler, error }) {
  const { name, username, email, password } = useSelector(getUser);

  const dispatch = useDispatch();
  return (
    <div className="form-container">
      <form className="form">
        <h1>Sign Up</h1>
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            autoFocus
            required
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            required
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => dispatch(setUserName(e.target.value))}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            required
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            required
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        {error ? (
          <p className="error" style={{ width: "80%" }}>
            {error}
          </p>
        ) : null}
        <div className="login-form-buttons">
          <button
            className="form-input-btn"
            type="button"
            onClick={() => signupHandler(name, username, email, password)}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
