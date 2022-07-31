import React, { Component } from 'react'
import logo from "../../../commonResource/images/icons/logo-sm.png";
import search from "../../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../../commonResource/images/icons/cart-sm.png";
import Headerlinks from './Headerlinks';
import Imglinks from './Imglinks';
import { Link } from 'react-router-dom';

 class Header extends Component {
  render() {
      return (
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <Link to="/">
                <img src={logo} /></Link>
              

              <div className="navbar-collapse collapse uniform">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <Headerlinks url="/mac/" name="mac" />
                  <Headerlinks url="/iphone/" name="iphone" />
                  <Headerlinks url="/ipad/" name="ipad" />
                  <Headerlinks url="/watch/" name="watch" />
                  <Headerlinks url="/tv/" name="tv" />
                  <Headerlinks url="/Music/" name="Music" />
                  <Headerlinks url="/Support/" name="Support" />

                  <Imglinks link="/search/" img={search} />
                  <Imglinks link="/cart/" img={cart} />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      );
  }
}
export default Header;