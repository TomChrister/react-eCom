import { useCart } from '../store/store.jsx';
import { Link } from 'react-router-dom';

export function CheckoutPage() {
    const { products, removeFromCart } = useCart();

    return (
        <div>
            <h1 className='text-2xl'>Handlekurv</h1>
            {products.length === 0 ? (
                <p>Handlekurven er tom</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <div key={product}>
                            <li key={product.id} className='border p-2 my-2'>
                                <img src={product.image.url} alt={product.title} className='w-20'/>
                                <p>{product.price} NOK</p>
                                <p>Antall: {product.quantity}</p>
                                <button className='bg-red-500 text-white p-2 rounded-sm'
                                        onClick={() => removeFromCart(product)}>
                                    Fjern
                                </button>
                            </li>
                            <p>Antall produkter: {products.length}</p>
                        </div>
                    ))}
                </ul>
            )}
            <Link to='/checkoutSuccess'>
                <button className='bg-blue-500 text-white p-2 rounded-sm'>
                    Kasse
                </button>
            </Link>
        </div>
    );
}
