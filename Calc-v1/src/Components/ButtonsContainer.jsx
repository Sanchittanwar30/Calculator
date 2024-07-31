import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {btnNames.map((btnName) => (
        <button className={styles.btn}>{btnName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;