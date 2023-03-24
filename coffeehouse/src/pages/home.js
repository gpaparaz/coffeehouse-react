import React, { Component } from "react";
import HeroHome from "../components/hero-home/hero-home";
import ProductCatalogueCard, {} from "../components/product-catalogue/product-catalogue-card";
import listOfNewArrivals, { collectionOfProducts } from "../assets/data/data";
import _, { map } from 'underscore';

class Home extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
    return (<div><HeroHome/>
    <section>
    <h2>New arrivals</h2>
    {<ProductCatalogueCard/>}
    </section>
    </div>)
        
        
    }}


export default Home;