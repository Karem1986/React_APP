import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        {/* this is a child component */}
        <Title content="My first prop in React" />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* this is a child component */}
        <Title content="The Sky is the limit" />
        {/* this is a child component */}
        <Pokemon text="this is what you can buil with React" />
        <p>
          <code>A new way of creating experiences</code> and make dreams come
          true: get started with React today!
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my first React App
        </a>
      </header>
    </div>
  );
}

export default App;
