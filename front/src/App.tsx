import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Calories from "./components/Calories/Calories";
import Exercises from "./components/ExercisesBlock/ExercisesBlock";
import { getExercises } from "./api/api";
import UpButton from "./components/UpButton/UpButton";

function App() {
  const [linkMG, setLinkMG] = useState("lats");

  return (
    <>
      <Header />
      <Body changeMG={setLinkMG} />
      <Calories />
      <Exercises link={linkMG} />
      <UpButton />
    </>
  );
}

export default App;
