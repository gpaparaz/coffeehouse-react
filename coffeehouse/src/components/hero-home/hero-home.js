import React from 'react';
import style from "./hero-home.css";

class HeroHome extends React.Component {
    render(){
    return <div class="p-5 bg-image hero-home">
        <div class="h-100 d-flex flex-column justify-content-center">
            <div>
            <p class="mb-3 col-md-8 px-3 fs-2 fw-bold">Give a twist to your season</p>
            <p class="px-3">Discover the new capsules dedicated to autumn.
                To give you a pleasant moment on cool days</p></div>
                <div class="promo-code float-end text-center d-flex flex-column justify-content-center align-items-center">
                    <p><span class="fw-bold fs-2">20% OFF</span></p>
                    <p>on Arabic blends</p>
                    <p>Promo code: <span class="fw-semibold">ARABIC20</span></p>
                </div>          
        </div>
    </div>;
    }
}

export default HeroHome;