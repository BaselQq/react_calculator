import classes from "./Screen.module.css";

const Screen = (props) => {
    return <label className={classes.label}>{props.value}</label>
};

export default Screen;