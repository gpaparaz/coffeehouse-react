import React from 'react';
import { Facebook, Instagram, Search, Youtube } from 'react-bootstrap-icons';
import Mastercard from '../assets/img/Mastercard-Logo.png'
import PayPal from '../assets/img/Paypal-logo.png'
import Visa from '../assets/img/visa-logo.png'

class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 'Search...' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Cliccato su form in footer ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid footer">
                <div className='container'>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-3 pb-sm-3">
                            <span className='footerTitle'>CoffeeHouse</span>
                            <p>Via Mazzini 5, Milano (MI) Italy <br /> 02 - 1234556 <br />
                                P.IVA 1234567891011</p>

                        </div>
                        <div className="col-md-3 d-flex justify-content-center d-none d-lg-block">
                            <ul>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 d-flex flex-row pb-sm-3">
                            <img className='footerPayment px-2' src={ Visa } />
                            <img className='footerPayment px-2' src={ Mastercard } />
                            <img className='footerPayment px-2' src={ PayPal } />
                        </div>
                        <div className="col-md-3 d-flex flex-column footerSearch">
                            <form onSubmit={ this.handleSubmit } className="d-none d-lg-block">
                                <div class="input-group col-md-4">
                                    <input class="form-control py-2" type="search" value={ this.state.value } onChange={ this.handleChange } id="example-search-input" />
                                    <span class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">
                                            <Search size={ 24 } />
                                        </button>
                                    </span>
                                </div>
                            </form>
                            <div className='d-flex flex-row pt-4'><Youtube size={ 30 } className="mx-2" />
                                <Instagram size={ 30 } className="mx-2" />
                                <Facebook size={ 30 } className="mx-2" /></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FooterComponent;