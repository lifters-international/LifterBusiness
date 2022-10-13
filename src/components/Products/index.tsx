import React from 'react';
import { Link } from "react-router-dom";

import "./index.css";

export type ProductProps = {
    name: string;
    description: string;
    image: string;
    to?: string;
}

const Product: React.FC<ProductProps> = ({ name, description, image, to }) => {
    return (
        <Link className="Product" to={ to || "" }>
            <div className="ProductImage">
                <img src={image} alt={`${name}-icon`}/>
            </div>
            <div className="ProductName">{name}</div>
            <div className="ProductDesc">{description}</div>
        </Link>
    )
}

export default Product;
