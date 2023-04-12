import { useState } from "react";
import styles from "./Calories.module.css";

const Calories = () => {
  const [ccalCount, setCcalCount] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [activity, setActivity] = useState<number>(0);
  const [gender, setGender] = useState<boolean>(true);

  const changeHendler = (e: React.ChangeEventHandler<HTMLElement>) => {
    switch (e.target.id) {
      case "age":
        setAge(e.target.value);
        return;
      case "height":
        setHeight(e.target.value);
        return;
      case "activity":
        setActivity(e.target.value);
        return;
      case "weight":
        setWeight(e.target.value);
        return;
      case "female":
        setGender(false);
    }
  };
  const clickHendler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `age : ${age} \n height : ${height}\n gender : ${gender} \n weight : ${weight} \n activity: ${activity}`
    );
    let currentResult =
      weight * 10 + height * 6.25 - age * 5 + (gender ? 5 : -161);
    console.log(currentResult);
    let finalResult = currentResult * activity;
    setCcalCount(Math.trunc(finalResult));
  };

  return (
    <form
      className={styles.form}
      onChange={changeHendler}
      onSubmit={clickHendler}
    >
      <div className={styles["form_radio"]}>
        <input type="radio" name="gender" id="male" checked />
        <label htmlFor="male">Мужчина</label>
      </div>
      <div className={styles["form_radio"]}>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="female">Женщина</label>
      </div>
      <div>
        <label htmlFor="age">Возраст</label>
        <input type="number" id="age" required min={1} />
      </div>
      <div>
        <label htmlFor="weight">Вес</label>
        <input type="number" id="weight" required min={1} />
      </div>
      <div>
        <label htmlFor="height">Рост</label>
        <input type="number" id="height" required min={1} />
      </div>
      <select name="activity" id="activity" required>
        <option value="0">Выберите активность</option>
        <option value="1.2">
          Физическая активность отсутствует или минимальна
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
  );
};

export default Calories;
