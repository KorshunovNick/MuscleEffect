import { useState } from "react";
import useCalories from "../hooks/calories";
import styles from "./Calories.module.css";

const Calories = () => {
  const {ccalCount,clickHendler} = useCalories()
  return (
    <div className={styles.calories}>
    <form
      className={styles.form}
      onSubmit={clickHendler}
    >
      <h1>Формула Миффлина — Джеора AMR</h1>
      <hr />
      <div className={styles["form_radio"]}>
        <input type="radio" name="gender" id="male" value={1} checked/>
        <label htmlFor="male">Мужчина</label>
      </div>
      <div className={styles["form_radio"]}>
        <input type="radio" name="gender" id="female" value={''}/>
        <label htmlFor="female">Женщина</label>
      </div>
      <div className={styles.inputs}>
        <label htmlFor="age">Возраст</label>
        <input type="number" id="age" required min={1} />
        <p>лет</p>
      
        <label htmlFor="weight">Вес</label>
        <input type="number" id="weight" required min={1} />
        <p>кг</p>
        <label htmlFor="height">Рост</label>
        <input type="number" id="height" required min={1} />
        <p>см</p>
      </div>
      <select name="activity" id="activity" required>
        <option value="1.2">
          Физическая активность отсутствует
        </option>
        <option value="1.38">Тренировки средней тяжести 3 раза в неделю</option>
        <option value="1.46">Тренировки средней тяжести 5 раз в неделю</option>
        <option value="1.55">Интенсивные тренировки 5 раз в неделю</option>
        <option value="1.64">Тренировки каждый день</option>
        <option value="1.73">
          Интенсивные тренировки каждый день или по 2 раза в день
        </option>
        <option value="1.9">
          Ежедневная физическая нагрузка + физическая работа
        </option>
      </select>
      <div>
        <button type="submit" className={styles.button}>
          Расчитать
        </button>
        <p>Cуточная норма: {ccalCount} ккал</p>
      </div>
    </form>
    </div>
  );
};

export default Calories;
