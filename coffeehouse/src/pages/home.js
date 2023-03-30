import React, { Component } from "react";
import AdvantagesHome from "../components/advantages-home/advantages-home";
import FooterComponent from "../components/footer-component";
import GalleryHome from "../components/gallery-home/gallery-home";
import HeroHome from "../components/hero-home/hero-home";
import ProductCatalogueCard, { } from "../components/product-catalogue/product-catalogue-card";
import ReviewsHome from "../components/reviews-home/reviews-home";
import style from "./home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<div><HeroHome />
            <section>
                <div class="container pt-4">
                    <h2 className="fw-bold">New arrivals</h2>
                </div>

                <ProductCatalogueCard />
            </section>
            <section>
                <div class="container text-center pt-5">
                    <h2 className="fw-bold">Advantages</h2>
                </div>
                <AdvantagesHome />
            </section>

            <section>
                <div class="container text-center pt-5">
                    <h2 className="fw-bold">Reviews</h2>
                </div>
                <ReviewsHome />
            </section>

            <section>
                <div class="container text-center pt-5">
                    <h2 className="fw-bold">#coffeehouse</h2>
                </div>
                <GalleryHome />
            </section>
            <FooterComponent />
        </div>)


    }
}


export default Home;