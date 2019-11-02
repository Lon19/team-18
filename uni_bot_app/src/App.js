import React, { Component } from 'react';
import './App.css';
import { kommunicateAppId } from "./keys";

(function(d, m){
  let kommunicateSettings = {"appId":kommunicateAppId,"popupWidget":true,"automaticChatOpenOnNavigation":true};
  let s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  let h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});

class App extends Component {
  render() {
    return (
      <div className="App">
        <video autoPlay loop muted id="background-video" style={{ opacity: "0.4" }}>
          <source src="homer.mp4" type="video/mp4"/>
        </video>

        <header className="App-header">
          <img src="logo.png" className="App-logo" alt="logo"/>
          <p>
            Welcome to the PAB (Project Access Bot)
          </p>
        </header>
      </div>
    );
  }
}

export default App;
