import styles from "./Header.module.css"
import biceps from "../styles/img/workout (1).png";
import brain from "../styles/img//brain.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div >
        <div>
          <img src={biceps} />
          Train with Brain
          <img src={brain} />
        </div>
      </div>
      <ul>
        <li>Главная</li>
        <li>Упражнения</li>
        <li>Расчет калорий</li>
      </ul>
    </header>
  );
};

export default Header;
