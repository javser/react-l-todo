import React,{Component} from "react";
import "./style.css";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header title={"todo-l-app"} />
      </div>
    );
  }
}

export default App;
