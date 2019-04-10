import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    window.location.href = "http://localhost:9000/.netlify/functions/server";
  }
  render() {
    return <div />;
  }
}

export default App;
