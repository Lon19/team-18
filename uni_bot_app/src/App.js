import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <video autoPlay loop id="background-video">
          <source src="background_video.mp4" type="video/mp4"/>
        </video>

        <header className="App-header">
          <img src="logo.png" className="App-logo" alt="logo"/>
          <p>
            Welcome to the PAB (Project Access Bot)
          </p>
        </header>

        <iframe
          id="chat"
          allow="microphone;"
          height="90%"
          width="850"
          src="https://console.dialogflow.com/api-client/demo/embedded/6d656c23-974f-46e6-b08c-96626ab9ea91"
          title="dialogflow_chat"
        />
      </div>
    );
  }
}

export default App;
