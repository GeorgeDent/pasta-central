import { Fragment } from "react";
import classes from "./Header.module.css";
import CartButton from "./UI/Cart/CartButton";
import { FiMail, FiPhone } from "react-icons/fi";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1 className={classes.banner}>Pasta Central</h1>
        <div>
          <h3 className={classes.phone}>
            <FiPhone />
            0927671412
          </h3>
          <h3 className={classes.phone}>
            <FiMail /> PastaCentral@gmail.com
          </h3>
          <div className={classes.btnone}>
            <CartButton onClick={props.onShowCart} />
          </div>
        </div>
      </header>

      <div>
        <img
          className={classes.img}
          src="https://t4.ftcdn.net/jpg/02/66/67/55/360_F_266675525_fmiFhkUPSNiWyud3f9EaGijBG8bwlFpH.jpg"
          alt="pasta dishes"
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
