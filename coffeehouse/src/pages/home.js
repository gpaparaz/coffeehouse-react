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
        function displayItems() {
            var newArrivals = listOfNewArrivals;   
            var listOfObjects = [];
            /// fare un ciclo for che itera su newArrivals, costruisce un oggetto, e restituisca product catalogue card con contenuto l'oggetto
            let i;
            for(i=0; i<newArrivals.length; i++) {
                var objectProduct = {
                    id: newArrivals[i].id,
                    category: newArrivals[i].category,
                    productName: newArrivals[i].productName,
                    preview: newArrivals[i].preview,
                    price: newArrivals[i].price,
                    imageName: newArrivals[i].imageName,
                    productStars: newArrivals[i].productStars,
                    detailPreview: newArrivals[i].detailPreview,
                    details: newArrivals[i].details,
                    description: newArrivals[i].description,            
                }
                listOfObjects.push(objectProduct);
                console.log(objectProduct)
            } 
            return listOfObjects;
        }


    return (<div><HeroHome/>
    <section>
    <h2>New arrivals</h2>
    {displayItems().map((item) => (
        <p>{item.id}</p>
    ))}
    </section>
    </div>)
        
        
    }}


export default Home;