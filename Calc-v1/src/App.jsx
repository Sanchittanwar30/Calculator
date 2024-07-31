import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (btnText) => {
    if (btnText === "C") {
      setCalVal("");
    } else if (btnText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisVal = calVal + btnText;
      setCalVal(newDisVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
