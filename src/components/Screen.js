import classes from "./Screen.module.css";

const Screen = (props) => {
    return <div type="text" className={classes.label}>{props.value}</div>
};

export default Screen;