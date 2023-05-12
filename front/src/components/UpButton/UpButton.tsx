import styles from "./UpButton.module.css";
import strongman from "../../styles/img/strongman.png";
import { useState, useEffect } from "react";

const UpButton = () => {
  
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {scroll > document.documentElement.clientHeight && (
        <div className={styles["up-btn"]}>
          <img src={strongman} alt="up" onClick={scrollUp} />
        </div>
      )}
    </>
  );
};

export default UpButton;
