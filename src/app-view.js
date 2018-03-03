import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactTunesPlayerContainer } from "react-tunes-player";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          <h2>Redux - action creators</h2>
          <ul>
            <li><button title="playCurrentTune()" value="playCurrentTune()" onClick={() => (this.props.playCurrentTune())}>Play :: playCurrentTune()</button> - This action creator will dispatched an action to play current tune being played.</li>
            <li><button title="pauseCurrentTune()" value="pauseCurrentTune()" onClick={() => (this.props.pauseCurrentTune())}>Pause :: pauseCurrentTune()</button> - This action creator will dispatched an action to pause current tune being played.</li>
            <li><button title="setNextTune()" value="setNextTune()" onClick={() => (this.props.setNextTune())}>Next :: setNextTune()</button> - This action creator will dispatched an action to go to the next tune in the tunes list.</li>
            <li><button title="setPreviousTune()" value="setPreviousTune()" onClick={() => (this.props.setPreviousTune())}>Previous :: setPreviousTune()</button> - This action creator will dispatched an action to go to the previous tune in the tunes list.</li>
          </ul>
        </p>
        <div>
          <ReactTunesPlayerContainer
            tunes={[
              {
                tune: "/assets/audio/the_lego_tune.ogg",
                name: "The lego tune",
                album: "/assets/images/dune.jpg"
              },
              {
                tune: "/assets/audio/bensound-funkysuspense.mp3",
                name: "Funky Suspense",
                album: "/assets/images/funkysuspense.jpg"
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
