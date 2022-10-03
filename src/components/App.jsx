import React from "react";
import Form from "./Form";

const isUserRegistered=true

// we can write the same thing by Ternary Operator

// function renderConditionally(){
//   if((isLoggedIn === true)){
//     return <h1>Hello</h1>
//   }else{
//     return(<Login />)
//   }
// }
function App() {
  return(<div className="container">
  <Form
  isRegistered={isUserRegistered}
  />
  
  </div>) 
}
export default App;
