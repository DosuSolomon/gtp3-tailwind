import { useState } from "react";
import "./App.css";
import "./index.css";
import { Navbar, Header, Features, Wgpt3, Companies, Possibility, Blog } from "./containers/index";

function App() {
  return (
    <div className="flex flex-col ">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Companies />

      <Wgpt3 className="gradient-bg" />
      <Features />
      <Possibility />
      <Blog />
    </div>
  );
}

export default App;
