import { ReactNode, useEffect } from "react";
import styles from "./Exercises.module.css";
import Exercise from "./Exercise";

const exercises = [
  {
    title: "Жим лежа",
    steps: [
      "Взять штангу",
      "Опустить к середине груди",
      "Поднять штангу",
      "Поставить на место",
    ],
  },
  { title: "Выпрыг вверх", steps: ["Встать", "Присесть", "Выпрыгнуть"] },
];

const Exercises = () => {
  // let response = fetch('http://localhost:8080/brench');

  return (
    <div className={styles.container}>
      <div className={styles.ExGroup}>
        {exercises.map((e, i) => (
          <Exercise title={e.title} steps={e.steps} key={i}/>
        ))}
      </div>
    </div>
  );
};
export default Exercises;
