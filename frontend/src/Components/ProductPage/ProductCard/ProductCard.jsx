import React from 'react'
import "./ProductCard.css"
import { Link } from "react-router-dom";

function ProductCard({id, name, productImg, DESCRIPTION }) {
    return (
        <div className="product_card">
            <div className="container">
                <img src={productImg} alt height="55%" width="100%" />
                <div className="product_name">
                    <Link to={`/Product/Product_Description/${id}`}>{name}</Link>
                    
                </div>
                <div className="desc_ProductCard">
                    {DESCRIPTION}
                </div>
                <div className="btn">
                    <button>BUY</button>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
