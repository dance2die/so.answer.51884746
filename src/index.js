import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const withMyComponent = WrapperComponent => {
  class HOC extends Component {
    state = {
      value: ""
    };

    changedHandler = event => {
      this.setState({ value: event.target.value });
    };

    render() {
      return (
        <WrapperComponent
          {...this.props}
          changed={this.changedHandler}
          value={this.state.value}
        />
      );
    }
  }

  return HOC;
};

class myChildComponent extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={event => this.props.changed(event)}
        value={this.props.value || ""}
      />
    );
  }
}

const Child = withMyComponent(myChildComponent);

function App() {
  return (
    <div className="App">
      <Child />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
