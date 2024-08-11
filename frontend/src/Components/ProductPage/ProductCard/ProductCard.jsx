import React from 'react'
import "./ProductCard.css"

function ProductCard({ name, productImg, DESCRIPTION }) {
    return (
        <div className="product_card">
            <div className="container">
                <img src={productImg} alt height="55%" width="100%" />
                <div className="product_name">
                    {name}
                </div>
                <div className="desc">
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
