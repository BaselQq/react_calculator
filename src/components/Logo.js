import efLogo from '../logo.png';
import classes from './Logo.module.css';

const Logo = () => {
    return <img className={classes.logo} src={efLogo}/>
};

export default Logo;