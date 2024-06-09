import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import GridData from "./component/GridData";
import text from "./assets/text.png";
import Plancomparsion from "./component/Chart";
function App() {
  return (
    <>
      <Header/>
      <GridData/>
      <img src={text}/>
      <Plancomparsion/>
    </>
  );
}

export default App;
