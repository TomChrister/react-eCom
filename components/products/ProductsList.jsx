import { useEffect, useState } from 'react';

export function ProductsList() {
    const [url, setUrl] = useState('https://v2.api.noroff.dev/online-shop');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.data)
        }
        fetchProducts();
    }, [url, setUrl]);

    return (
        <>
            <div>
                <h1 className='text-3xl'>Products</h1>
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
                    </div>
                ))}
            </div>
        </>
    )
}
