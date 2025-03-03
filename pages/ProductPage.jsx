import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../store/store.jsx';

export function ProductPage() {
    const {products, addToCart} = useCart();

    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                if (!res.ok) {
                    throw new Error('Failed fetching products.');
                }
                const data = await res.json();
                setProduct(data.data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }

        fetchProducts();
    }, [id]);

    if (loading) return <p>Laster inn...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Ingen produktdata funnet.</p>;

    return (
        <>
            <h1 className='text-2xl'>{product.title}</h1>
            <img src={product.image.url} alt={product.title} className='w-20'/>
            <p>{product.price}</p>
            <button className='bg-green-500 text-white p-2 rounded-sm' type='submit'
                    onClick={() => addToCart(product)}>
                Legg til i handlekurv
            </button>
        </>
    )
}