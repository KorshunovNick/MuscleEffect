import styles from "./Header.module.css";
import biceps from "../styles/img/workout (1).png";
import brain from "../styles/img//brain.png";
import openMenu from "../styles/img/openMenu.png";
import closeMenu from "../styles/img/closeMenu.png";

import { useState,useRef,useEffect } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  const menuBar = useRef(null)
  const menuButton = useRef(null)

  useEffect(()=>{
   if (window.innerWidth<1050) setMenu(true) 
  },[])
  window.onresize = () => {
    if (window.innerWidth < 1050) {
      setMenu(true);
    } else {
      setIsOpenMenu(false);
      setMenu(false);
    }
  };

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>)=>{
    
    setIsOpenMenu(!isOpenMenu)
    console.log(menuBar.current)
   
    
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <div>
            <img src={biceps} />
            Train with Brain
            <img src={brain} />
          </div>
        </div>
        {menu && (
          <div
            className={styles.menu}
            onClick={clickHandler}
            ref={menuButton}
          >
            <img src={isOpenMenu ? openMenu : closeMenu}></img>
            {isOpenMenu && (
        <div className={styles.menuBar} ref={menuBar}>
          <p>Главная</p>
          <p>Упражнения</p>
          <p>Расчет калорий</p>
        </div>
      )}
          </div>
        )}

        {!menu && (
          <ul>
            <li>Главная</li>
            <li>Упражнения</li>
            <li>Расчет калорий</li>
          </ul>
        )}
      </header>
      
    </>
  );
};

export default Header;
