import "./App.css";
import Button from "./components/Button";
import Wrapper from "./Helpers/Wrapper";
import Screen from "./components/Screen";
import ButtonWrapper from "./components/ButtonWrapper";

function App() {
  // const btnValues = [
  //   ["C", "%", "√", "MC"],
  //   ["MR", "M+", "M-", "÷"],
  //   [7, 8, 9, "X"],
  //   [4, 5, 6, "-"],
  //   [1, 2, 3, "+"],
  //   [0, ",", "="],
  // ];

  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonWrapper>
        <Button 
          value="0"
          onClick={() => {
            console.log("Button Clicked")
          }}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
