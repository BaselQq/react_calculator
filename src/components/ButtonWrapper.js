import classes from "./ButtonWrapper.module.css";

const ButtonWrapper = (props) => {
    return <div className={classes.buttonWrapper}>{props.children}</div>
};

export default ButtonWrapper;