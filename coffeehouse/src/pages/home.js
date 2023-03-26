import React, { Component } from "react";
import HeroHome from "../components/hero-home/hero-home";
import ProductCatalogueCard, {} from "../components/product-catalogue/product-catalogue-card";
import listOfNewArrivals, { collectionOfProducts } from "../assets/data/data";
import _, { map } from 'underscore';
import style from "./home.css";
import { Heart } from "react-bootstrap-icons";
import Cart from "react-bootstrap-icons/dist/icons/cart";

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        function displayItems() {
            var newArrivals = listOfNewArrivals;   
            var listOfObjects = [];
            let i;
            for(i=0; i<newArrivals.length; i++) {
                var objectProduct = {
                    id: newArrivals[i].id,
                    category: newArrivals[i].category,
                    productName: newArrivals[i].productName,
                    preview: newArrivals[i].preview,
                    price: newArrivals[i].price,
                    imageName:  newArrivals[i].imageName,
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
        <div className="productCatalogueHome d-flex justify-content-between flex-column">
            <div>
                <div className="imageProduct"><img src={require(`../assets/img/${item.imageName}`)} ></img></div>
                <h6 className="text-center">{item.productName}</h6>
                <p className="text-center">{item.preview}</p>
            </div>
            <div>
                <h5 className="text-center">{item.price}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <Heart size={28} className="icon-secondary-color mx-2 button-icon"/>
                    <span className="button"><Cart size={28} className="icon-secondary-color mx-2" />ADD</span>
                </div>
            </div>
        
        </div>
        
    ))}
    </section>
    </div>)
        
        
    }}


export default Home;