import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  /* Method #1 
  state = {
    visible: true,
  };

  render() {
    const buttonText = this.state.visible ? "hide" : "show";
    return (
      <div className="App">
        {this.state.visible ? <ImageSlider /> : (<div><Counter /></div>)}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
   */

  state = {
    visible: true,
    whichComponentToShow: "ImageSlider",
  };

  render() {
    return (
      <div className="App">
        <div
          style={
            this.state.visible
              ? {}
              : {
                  display: "none",
                }
          }
        >
          <Counter />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          toggle visiblity
        </button>
      </div>
    );
  }
}

export default App;
