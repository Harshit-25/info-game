import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
