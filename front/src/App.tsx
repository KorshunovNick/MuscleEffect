import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Calories from "./components/Calories";
import Exercises from "./components/ExercisesBlock/ExercisesBlock";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Calories />
      <Exercises />
    </>
  );
}

export default App;
