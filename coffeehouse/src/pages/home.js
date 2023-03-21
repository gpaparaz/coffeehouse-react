import React, { Component } from "react";
import HeroHome from "../components/hero-home/hero-home";
import ProductCatalogueCard from "../components/product-catalogue/product-catalogue-card";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: 'Data from parent to child'}
    }

    render() {
        const {data} = this.state;

        return (<div><HeroHome/>
        <section>
        <h2>New arrivals</h2>
        <ProductCatalogueCard dataFromParentToChild = {data}/>
        </section>
        </div>)
        
        
    }

}
export default Home;