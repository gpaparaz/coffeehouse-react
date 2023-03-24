import React from "react";
import style from "./product-catalogue-card.css";
import listOfNewArrivals, { collectionOfProducts } from "../../assets/data/data";
import { renderMatches } from "react-router-dom";

// function displayItems() {
//     var newArrivals = listOfNewArrivals;   
//     var listOfObjects = [];
//     /// fare un ciclo for che itera su newArrivals, costruisce un oggetto, e restituisca product catalogue card con contenuto l'oggetto
//     let i;
//     for(i=0; i<newArrivals.length; i++) {
//         var objectProduct = {
//             id: newArrivals[i].id,
//             category: newArrivals[i].category,
//             productName: newArrivals[i].productName,
//             preview: newArrivals[i].preview,
//             price: newArrivals[i].price,
//             imageName: newArrivals[i].imageName,
//             productStars: newArrivals[i].productStars,
//             detailPreview: newArrivals[i].detailPreview,
//             details: newArrivals[i].details,
//             description: newArrivals[i].description,            
//         }
//         listOfObjects.push(objectProduct);
//         console.log(objectProduct)
//     } 
//     return listOfObjects;
// }

class ProductCatalogueCard extends React.Component {
        render() {
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
    
    return <div>
        <p>{objectProduct.productName}</p>
        <p>{objectProduct.preview}</p>
        <p>{objectProduct.price}</p>       
    </div>}
}
        
    
}
export default ProductCatalogueCard;