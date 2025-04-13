import React from "react";
import { useParams } from "react-router-dom";

const products = [
    { id: 1, name: "Laptop", price: "$999", description: "A high-performance laptop." },
    { id: 2, name: "Phone", price: "$499", description: "A smartphone with great features." },
    { id: 3, name: "Headphones", price: "$199", description: "Noise-canceling headphones." },
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    return (
        <div className="p-10">
            {product ? (
                <>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="mt-2 text-xl">{product.price}</p>
                    <p className="mt-4">{product.description}</p>
                </>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default ProductDetail;
