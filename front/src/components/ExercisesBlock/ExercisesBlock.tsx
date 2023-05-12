import { ReactNode, useEffect, useState } from "react";
import styles from "./Exercises.module.css";
import Exercise from "./Exercise";
import { getExercises } from "../../api/api";
import { GetExercises } from "../../hooks/exercisesHook";

interface IExercise {
  title: string;
  steps: string[];
  muscleGoup: string;
  id: string;
}

const Exercises = ({ link }: string) => {
  const [exercises, setExercises] = useState<IExercise[] | null>(null);
  useEffect((): void => {
    async function fetchData() {
      setExercises(await getExercises(link));
    }
    fetchData();
  }, [link]);

  return (
    <div className={styles.container}>
      <div className={styles.ExGroup}>
        {exercises &&
          exercises.map((e, i) => (
            <Exercise title={e.title} steps={e.steps} key={i} />
          ))}
      </div>
    </div>
  );
};
export default Exercises;
