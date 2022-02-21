import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
function Header() {
  const [{basket},action]=useStateValue()
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__location">
        <div className="header__location__icon">
          <LocationOnIcon className="header__location__icon__main" />
        </div>
        <div className="header__location__content">
          <span className="header__location__text">Deliver to Kunal</span>
          <span className="header__location__location">Kanker 494334</span>
        </div>
      </div>
      <div className="header__search">
        <input className="header__search__input" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__menu">
          <span className="header__menu__Line1">Hello Guest</span>
          <span className="header__menu__Line2">Sign in</span>
        </div>
        <div className="header__menu">
          <span className="header__menu__Line1">Returns</span>
          <span className="header__menu__Line2">& Orders</span>
        </div>
        <div className="header__menu">
          <span className="header__menu__Line1">Your</span>
          <span className="header__menu__Line2">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header__cart">
            <ShoppingBasketIcon />
            <span className="header__menu__Line2 header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
