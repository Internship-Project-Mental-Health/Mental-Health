// import React from 'react'
// import Header from '../Components/Common/Header/Header'
// import FirstPage from '../Components/ProductPage/ProductDescription/FirstPage/FirstPage'
// import OurPromises from '../Components/ProductPage//ProductDescription/OurPromises/OurPromises'
// import FooterNew from '../Components/Common/Footer/FooterNew'
// import AlsoLike from './../Components/ProductPage/ProductDescription/AlsoLike/AlsoLike';
// function ProductDescriptionPage() {
//     return (
//         <div>
//             <Header />
//             <FirstPage />
//             <OurPromises />
//             <AlsoLike />
//             <FooterNew />
//         </div>
//     )
// }

// export default ProductDescriptionPage


import React, { useEffect, useState } from 'react';
import FirstPage from '../Components/ProductPage/ProductDescription/FirstPage/FirstPage'
import OurPromises from '../Components/ProductPage//ProductDescription/OurPromises/OurPromises'
import AlsoLike from './../Components/ProductPage/ProductDescription/AlsoLike/AlsoLike';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Components/Common/Header/Header';
import FooterNew from '../Components/Common/Footer/FooterNew';

function ProductDescriptionPage() {
    let { id } = useParams(); // Get the product ID from the URL
    console.log(`id>>>>>prdt desc ${id}`)
    id = parseInt(id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/Products/id/${id}`)
            .then((response) => {
                setProduct(response.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Or a more sophisticated loading state
    }
    console.log(product)

    return (
        <>
            <Header />
            <h1>Product Details</h1>
            <FirstPage />
            <div className="product-details">
                <img src={product.productImg} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.new_price}</p>
                {/* Add other product details as needed */}
            </div>
            <FooterNew />
        </>
    );
}

export default ProductDescriptionPage;
