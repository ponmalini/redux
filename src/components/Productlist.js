import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Store';

const ProductList = () => {
const products = [
    { id: 1,
       name: 'Product 1', 
       price: 500,
       url:"https://thumbs.dreamstime.com/z/toys-kids-child-collection-plastic-white-car-62551972.jpg"
     },

    { id: 2, 
    name: 'Product 2', 
    price: 650,
    url:"https://th.bing.com/th/id/R.ec6fa82692e2bc63a8ecde211524d1de?rik=n6VXPMtS4gxtAw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ACMVmbZa73A%2fURQAlumVVuI%2fAAAAAAAAAVs%2f_eUaD5w7EeM%2fs1600%2ftoys%2bcar%2b(2).jpg&ehk=cDoMhkb447SiCXMl%2byEU%2fXrWYmvyLAipoCinj1K1Ol8%3d&risl=&pid=ImgRaw&r=0"
},

    { id: 3, 
    name: 'Product 3',
    price: 250,
    url:"https://th.bing.com/th/id/OIP.ft7DpbZmU1WtZvSIsy0KUwHaMZ?w=828&h=1386&rs=1&pid=ImgDetMain"
},
];


    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        console.log(product)
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    <img src={product.url}></img>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button></li>
                    
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
