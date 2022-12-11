import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-context';
import classes from "./CartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext)

  const {items} = cartCtx;

const numberOfCartItems = items.reduce((curNumber, item) => {
  return curNumber + item.amount
}, 0);



const btnClasses =  `${classes.button} ${ btnIsHighlighted ? classes.bump : ''} `
 useEffect(() => {
  if (items.length === 0) {
    return;
  }
  setBtnIsHighlighted(true);

  const timer = setTimeout (() => {
    setBtnIsHighlighted(false);
  }, 300);


 return () => {
    clearTimeout(timer);
 };
 }, [items]);
  return (

    <div className={classes.btn}>
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaShoppingCart className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
    </div>
  );
};

export default CartButton;
