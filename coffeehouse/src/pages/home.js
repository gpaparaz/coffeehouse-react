import React, { Component } from "react";
import HeroHome from "../components/hero-home/hero-home";
import ProductCatalogueCard from "../components/product-catalogue/product-catalogue-card";
import { collectionOfProducts } from "../assets/data/data";
import _, { map } from 'underscore';

function Home(props){
    var listOfNewArrivals = [];
    var listToIterate = collectionOfProducts;
    
    listOfNewArrivals.push(collectionOfProducts.find(item => item.id=1))
    listToIterate = listToIterate.shift();
    
    let item = 5;
    let i=0;
    while(i!=5) {
        var random = Math.floor(Math.random() * collectionOfProducts.length);
        listOfNewArrivals.push(collectionOfProducts[random]);
        i++;
    }
    
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