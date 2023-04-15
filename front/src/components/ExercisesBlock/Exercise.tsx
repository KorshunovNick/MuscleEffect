import { ReactNode } from "react";
import styles from "./Ex.module.css"


interface ExProps {
  title: string;
  steps: string[];
}

const Exercise: React.FC<ExProps> = ( props ) => {
  return (
    <div className={styles.ex}>
      <h1>{props.title}</h1>
      <hr />
      <div className={styles.steps}>
        {props.steps.map<any>((e, i) => (
          <>
            <b>{i + 1}</b> <p>{e}</p>
          </>
        ))}
      </div>
    </div>
  );
};
export default Exercise;
