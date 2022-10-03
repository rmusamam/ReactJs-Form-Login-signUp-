import React from "react";
import Input from "./input";
function Form(props) {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.isRegistered && (
          <Input type="text" placeholder="Confirm Password" />
        )}
        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Form;
