import React from "react";
import Toogle from "./component/button";
import Input from "./component/input";
import Select from "./component/select";
import "./App.css";

function App() {
  // const name = "Yusri Yunus";
  const user = {
    firstName: "Yusri",
    lastName: "Yunus"
  };

  function formatName(user) {
    if (user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName} !`;
    }
    return `Stranger.`;
  }
  const element = <h1>Hello, {formatName(user)}</h1>;

  // Using React.createElement
  // Basiccaly its a function that return object with properties like this :
  // {
  // type : "h1"
  // props : {
  //      className : "",
  //      children : ""
  //      }
  // }
  const reactElement = React.createElement(
    "h1",
    { className: "greeting" },
    "HEllo World"
  );
  return (
    <React.Fragment>
      <div className="App">{element}</div>
      <div className="App">{reactElement}</div>
      <center>
        <Toogle />
        <Input />
        <Select />
      </center>
    </React.Fragment>
  );
}

export default App;
