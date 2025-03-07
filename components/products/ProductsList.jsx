import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from '../search/SearchBar.jsx';

export function ProductsList() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://v2.api.noroff.dev/online-shop");
            const data = await res.json();
            setProducts(data.data);
            setFilteredProducts(data.data);
        }
        fetchProducts();
    }, []);

    function handleSearch(query) {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    return (
        <>
            <div className='px-4 md:px-12 lg:px-72'>
                <h1 className="text-3xl font-bold mb-4">Products</h1>
                <SearchBar onSearch={handleSearch} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <div key={product.id} className="flex flex-col h-full">
                                <img src={product.image.url} alt={product.name} className="w-full h-60 object-cover" />
                                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                                <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
                                <p className="text-sm font-bold mt-1">
                                    {product.discountedPrice !== product.price ? (
                                        <>
                                            <span className="line-through text-red-500 mr-2">$ {product.price}</span>
                                            <span>$ {product.discountedPrice}</span>
                                        </>
                                    ) : (
                                        <span>$ {product.price}</span>
                                    )}
                                </p>
                                <button
                                    className="mt-2 border border-black py-1 px-3 w-full cursor-pointer"
                                    onClick={() => navigate(`/product/${product.id}`)}>
                                    View product
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}