import React from "react";
import "./style.css";

function Header ({title}) {
  return (
    <h1 style={{textAlign:"center"}}>{title}</h1>
  )
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title={"todo-l"}/>
        <p></p>
      </div>
    );
  }
}
export default App;
