import logo from '../assets/img/coffee-house-logo.png';
import React from 'react';
import Cart from 'react-bootstrap-icons/dist/icons/cart';
import Search from 'react-bootstrap-icons/dist/icons/search';
import * as Icon from 'react-bootstrap-icons';

class Header extends React.Component {
  render() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary header d-flex justify-content-between">
      <div className="container">
        <div>
          <img src={ logo } className="header-logo" />
          <a className="navbar-brand header-title" href="#">CoffeeHouse</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end">

          <span className="navbar-text d-flex ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-4">
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Recipe</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
            </ul>
            <Search size={ 25 } className="icon-secondary-color mx-2" /><Cart size={ 25 } className="icon-secondary-color mx-2" /><Icon.Person size={ 25 } className="icon-secondary-color mx2" />
          </span>
        </div>
      </div>
    </nav>
  }

}
export default Header;