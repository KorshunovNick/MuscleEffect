import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Calories from "./components/Calories/Calories";
import Exercises from "./components/ExercisesBlock/ExercisesBlock";
import { getExercises } from "./api/api";
import UpButton from "./components/UpButton/UpButton";


function App() {
  // const [upBtn,setUpBtn] = useState<boolean>(false)

  // if (window.pageXOffset>900){
  //   setUpBtn(true)
  // } else {
  //   setUpBtn(false)
  // }

  return (
    <>
      <Header />
      <Body/>
      <Calories />
      <Exercises />
      <UpButton />
    </>
  );
}

export default App;
