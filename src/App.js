import React from "react";
import "./style.css";

import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title={"todo-l-app"}/>
        <p></p>
      </div>
    );
  }
}

export default App;
