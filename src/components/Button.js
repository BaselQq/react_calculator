import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${
        props.value == "÷" ||
        props.value == "x" ||
        props.value == "-" ||
        props.value == "+" ||
        props.value == "="
          ? classes.redButton
          : classes.button
      }
      ${
        props.value == "C"
          ? classes.cButton
          : classes.button
      }
      ${
        props.value == "0"
          ? classes.zeroButton
          : classes.button
      }`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
