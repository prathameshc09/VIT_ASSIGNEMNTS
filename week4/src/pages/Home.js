import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products") // Check if this route exists
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    if (!products.length) return <h2>Loading...</h2>;

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-5">Products</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-5">
                        <h2 className="text-xl">{product.name}</h2>
                        <p>{product.price}</p>
                        <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
//
export default Home;
