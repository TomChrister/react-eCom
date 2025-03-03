import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProductsList() {
    const [url, setUrl] = useState('https://v2.api.noroff.dev/online-shop');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.data)
        }
        fetchProducts();
    }, [url]);

    return (
        <>
            <h1 className='text-3xl'>Products</h1>
                <div className='grid grid-cols-2 gap-2'>
                    {products.map((product) => (
                        <div key={product.id} className='flex flex-col border border-amber-300'>
                            <img src={product.image.url} alt={product.name} className='w-20'/>
                            <h2 className='text-2xl'>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Pris:{' '}
                                {product.discountedPrice !== product.price ? (
                                    <>
                                        <span>
                                            {product.price} NOK
                                        </span>
                                        <span>
                                            Salg: {product.discountedPrice} NOK
                                        </span>
                                    </>
                                ) : (
                                    <span>
                                        {product.price} NOK
                                    </span>
                                )}
                            </p>
                            <button className='border border-green-500 rounded-sm p-2'
                                    onClick={() => navigate(`/product/${product.id}`)}>
                                View product
                            </button>
                        </div>
                    ))}
                </div>
        </>
    )
}
