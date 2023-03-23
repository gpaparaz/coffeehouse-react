import React, { Component } from "react";
import HeroHome from "../components/hero-home/hero-home";
import ProductCatalogueCard from "../components/product-catalogue/product-catalogue-card";
import listOfNewArrivals, { collectionOfProducts } from "../assets/data/data";
import _, { map } from 'underscore';

function Home(props){
    var newArrivals = listOfNewArrivals;
    console.log(listOfNewArrivals)

    const data = 'Data from parent to child';

    return (<div><HeroHome/>
    <section>
    <h2>New arrivals</h2>
    <ProductCatalogueCard dataFromParentToChild = {data}/>
    </section>
    </div>)
        
        
    }


export default Home;