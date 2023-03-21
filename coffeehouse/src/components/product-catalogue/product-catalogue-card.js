import React from "react";
import style from "./product-catalogue-card.css";

class ProductCatalogueCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.dataFromParentToChild}
    }
    render() {
        const {data} = this.state;
        return <p>{data}</p>
    }
}
export default ProductCatalogueCard;