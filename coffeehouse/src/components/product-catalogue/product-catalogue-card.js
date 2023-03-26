import React from "react";
import listOfNewArrivals, { collectionOfProducts } from "../../assets/data/data";
import style from "./product-catalogue-card.css";
import { Heart } from "react-bootstrap-icons";
import Cart from "react-bootstrap-icons/dist/icons/cart";


class ProductCatalogueCard extends React.Component {
        render() {
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
    
    return (<div>
    <div className="container text-center">
  <div className="row align-items-center">
    <div className="col-lg-4">
    <div className="productCatalogueHome d-flex justify-content-between flex-column">
            <div>
                <div className="imageProduct"><img src={require(`../../assets/img/${displayItems()[0].imageName}`)} ></img></div>
                <h6 className="text-center">{displayItems()[0].productName}</h6>
                <p className="text-center">{displayItems()[0].preview}</p>
            </div>
            <div>
                <h5 className="text-center">{displayItems()[0].price}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <Heart size={28} className="icon-secondary-color mx-2 button-icon"/>
                    <span className="button"><Cart size={28} className="icon-secondary-color mx-2" />ADD</span>
                </div>
            </div>
        
        </div>
    </div>
    <div className="col-lg-4">
    <div className="productCatalogueHome d-flex justify-content-between flex-column">
            <div>
                <div className="imageProduct"><img src={require(`../../assets/img/${displayItems()[1].imageName}`)} ></img></div>
                <h6 className="text-center">{displayItems()[1].productName}</h6>
                <p className="text-center">{displayItems()[1].preview}</p>
            </div>
            <div>
                <h5 className="text-center">{displayItems()[1].price}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <Heart size={28} className="icon-secondary-color mx-2 button-icon"/>
                    <span className="button"><Cart size={28} className="icon-secondary-color mx-2" />ADD</span>
                </div>
            </div>
        
        </div>
    </div>
    <div className="col-lg-4">
    <div className="productCatalogueHome d-flex justify-content-between flex-column">
            <div>
                <div className="imageProduct"><img src={require(`../../assets/img/${displayItems()[2].imageName}`)} ></img></div>
                <h6 className="text-center">{displayItems()[2].productName}</h6>
                <p className="text-center">{displayItems()[2].preview}</p>
            </div>
            <div>
                <h5 className="text-center">{displayItems()[2].price}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <Heart size={28} className="icon-secondary-color mx-2 button-icon"/>
                    <span className="button"><Cart size={28} className="icon-secondary-color mx-2" />ADD</span>
                </div>
            </div>
        
        </div>
    </div>
  </div>

<div className="row align-items-center">
    <div className="col-lg-4">
    <div className="productCatalogueHome d-flex justify-content-between flex-column">
            <div>
                <div className="imageProduct"><img src={require(`../../assets/img/${displayItems()[3].imageName}`)} ></img></div>
                <h6 className="text-center">{displayItems()[3].productName}</h6>
                <p className="text-center">{displayItems()[3].preview}</p>
            </div>
            <div>
                <h5 className="text-center">{displayItems()[3].price}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <Heart size={28} className="icon-secondary-color mx-2 button-icon"/>
                    <span className="button"><Cart size={28} className="icon-secondary-color mx-2" />ADD</span>
                </div>
            </div>
        
        </div>
    </div>
    <div className="col-lg-4">
    <div className="productCatalogueHome d-flex justify-content-between flex-column">
            <div>
                <div className="imageProduct"><img src={require(`../../assets/img/${displayItems()[4].imageName}`)} ></img></div>
                <h6 className="text-center">{displayItems()[4].productName}</h6>
                <p className="text-center">{displayItems()[4].preview}</p>
            </div>
            <div>
                <h5 className="text-center">{displayItems()[4].price}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <Heart size={28} className="icon-secondary-color mx-2 button-icon"/>
                    <span className="button"><Cart size={28} className="icon-secondary-color mx-2" />ADD</span>
                </div>
            </div>
        
        </div>
    </div>
    <div className="col-lg-4">
    <div className="productCatalogueHome d-flex justify-content-between flex-column">
            <div>
                <div className="imageProduct"><img src={require(`../../assets/img/${displayItems()[5].imageName}`)} ></img></div>
                <h6 className="text-center">{displayItems()[5].productName}</h6>
                <p className="text-center">{displayItems()[5].preview}</p>
            </div>
            <div>
                <h5 className="text-center">{displayItems()[5].price}</h5>
                <div className="d-flex justify-content-between mb-2">
                    <Heart size={28} className="icon-secondary-color mx-2 button-icon"/>
                    <span className="button"><Cart size={28} className="icon-secondary-color mx-2" />ADD</span>
                </div>
            </div>
        
        </div>
    </div>
  </div>
    </div>
    </div>)
    
}
}
        
    

export default ProductCatalogueCard;