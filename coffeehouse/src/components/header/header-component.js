import logo from '../../assets/img/coffee-house-logo.png';
import React from 'react';
import Cart from 'react-bootstrap-icons/dist/icons/cart';
import Search from 'react-bootstrap-icons/dist/icons/search';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/esm/Button';

function Header() {

  const [ open, setOpen ] = React.useState(false);
  const [ openCart, setOpenCart ] = React.useState(false);

  const openUserMenu = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    console.log('clicked one'); setOpen(false);
  };

  const handleMenuTwo = () => {
    console.log('clicked two'); setOpen(false);
  };

  const openUserMenuCart = () => {
    setOpenCart(!openCart);
  };

  const handleMenuOneCart = () => {
    console.log('clicked one'); setOpenCart(false);
  };

  const handleMenuTwoCart = () => {
    console.log('clicked two'); setOpenCart(false);
  };


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header d-flex justify-content-between">
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
            <Button onClick={ openUserMenu } className="menu-icon"><Search size={ 25 } className="mx-2" /></Button>
            <Button onClick={ openUserMenuCart } className="menu-icon"><Cart size={ 25 } className="mx-2" /></Button>
            { openCart ? (
              <div className="dropdownmenu">
                <div className='menu-cart'>
                  <div className="cart-item d-flex flex-row justify-content-between">
                    <div className='d-flex flex-column'>
                      <p>Titolo prodotto</p>
                      <p>prezzo prodotto</p>
                    </div>
                    <img className='cart-item-img' src={ logo } />
                  </div>
                  <div className='d-flex  justify-content-between'>
                    <Button>Vai al carrello</Button>
                    <Button>Vai alla cassa</Button>
                  </div>
                </div>
                {/* <ul className="menu">
                  <li className="menu-item">
                    <button onClick={ handleMenuOneCart }>Menu Cart 1</button>
                  </li>
                  <li className="menu-item">
                    <button onClick={ handleMenuTwoCart }>Menu Cart 2</button>
                  </li>
                </ul> */}
              </div>
            ) : null }


            <Button onClick={ openUserMenu } className="menu-icon"><Icon.Person size={ 25 } className="mx2" /></Button>
            { open ? (
              <div className="dropdownmenu">
                <ul className="menu">
                  <li className="menu-item">
                    <button onClick={ handleMenuOne }>Accedi</button>
                  </li>
                  <li className="menu-item">
                    <button onClick={ handleMenuTwo }>Profilo</button>
                  </li>
                  <li className="menu-item">
                    <button onClick={ handleMenuTwo }>Wishlist</button>
                  </li>
                  <li className="menu-item">
                    <button onClick={ handleMenuTwo }>Ordini</button>
                  </li>
                  <li className="menu-item">
                    <button onClick={ handleMenuTwo }>Logout</button>
                  </li>
                </ul></div>
            ) : null }
          </span>
        </div>
      </div>
    </nav>
  )

}
export default Header;