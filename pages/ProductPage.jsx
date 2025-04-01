import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../store/store.jsx';

export function ProductPage() {
    const { addToCart } = useCart();
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [added, setAdded] = useState(false);

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

    useEffect(() => {
        if (product) {
            document.title = product.title;
        }
    }, [product]);

    const handleAddToCart = () => {
        setAdded(true);
        addToCart(product);

        setTimeout(() => setAdded(false), 1500);
    };

    if (loading) return <p>Laster inn...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Ingen produktdata funnet.</p>;

    const discount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);

    return (
        <div className="mx-auto max-w-4xl p-6 px-4 md:p-12 lg:px-50">
            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
            <img src={product.image.url} alt={product.title} className="my-6 w-full rounded-md object-cover max-h-[500px]"/>
            <p className="text-lg text-gray-700">{product.description}</p>
            <p className="mt-4 text-xl">
                <span className="font-semibold">Price: </span>
                {product.discountedPrice !== product.price ? (
                    <>
                        <span className="mr-2 text-red-500 line-through">{product.price} NOK</span>
                        <span className="font-bold text-green-700">{product.discountedPrice} NOK</span>
                    </>
                ) : (
                    <span>{product.price} NOK</span>
                )}
            </p>
            <div className='mt-2 flex w-22'>
                <p className='rounded-sm bg-amber-600 p-2 text-white'>-{discount}% off</p>
            </div>
            <p className="mt-2 text-lg">
                <span className="font-semibold">Rating: </span>
                 {product.rating} / 5
                <i className="text-yellow-400 fa-solid fa-star"></i>
            </p>
            <p className="mt-2 text-lg">
                <span className="font-semibold"></span>
                <i className="pr-1 fa-solid fa-hashtag"></i>
                {product.tags.join(", ")}
            </p>
            <h2 className='mt-3 font-bold'>Reviews</h2>
            {product.reviews.length > 0 ? (
                <ul className="mt-2 border border-black p-2 space-y-4">
                    {product.reviews.map((review, index) => (
                        <li key={index} className="pb-2">
                            <p className="font-bold">{review.username}:</p>
                            <p>{review.description}</p>
                            <p className="text-sm text-gray-500">Rating: {review.rating} / 5
                                <i className="ml-1 text-yellow-400 fa-solid fa-star"></i>
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="mt-2 text-gray-500">No reviews yet.</p>
            )}
            <button
                className="mt-6 cursor-pointer bg-green-600 px-6 w-[160px] py-3 text-white transition duration-200 hover:bg-green-700"
                onClick={(handleAddToCart)}
            >
                {added ? 'Added to cart!' : 'Add to cart'}
            </button>
        </div>
    );
}