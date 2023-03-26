import React, { Component } from "react";
import HeroHome from "../components/hero-home/hero-home";
import ProductCatalogueCard, {} from "../components/product-catalogue/product-catalogue-card";
import style from "./home.css";

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
     
    return (<div><HeroHome/>
    <section>
    <h2>New arrivals</h2>

    <ProductCatalogueCard />
    </section>
    </div>)
        
        
    }}


export default Home;