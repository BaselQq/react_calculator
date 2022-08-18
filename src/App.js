import "./App.css";
import Button from "./components/Button";
import Wrapper from "./Helpers/Wrapper";
import Screen from "./components/Screen";
import ButtonWrapper from "./components/ButtonWrapper";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const btnValues = [
    ["C", "%", "√", "MC"],
    ["MR", "M+", "M-", "÷"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ",", "="],
  ];

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    })
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
        ? 0
        : calc.num % 1 === 0
        ? Number(calc.num + value)
        : calc.num + value,
      res: !calc.sign ? 0 : calc.res
    })
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonWrapper>
        {btnValues.flat().map((btn, i) => {
        return (
          <Button
            key={i}
            className=""
            value={btn}
            onClick={
              btn === "C" ? resetClickHandler
              : numClickHandler
            }
          />
        );
        })}
        
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
