import { useCart } from '../store/store.jsx';
import { Link } from 'react-router-dom';

export function CheckoutSuccessPage() {
    const { products, removeAllProducts } = useCart();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Your order has been confirmed!</h2>
                <p className="text-green-600 mb-6">Thank you for shopping with us. Here are the details of your order:</p>

                <ul className="mb-6">
                    {products.map((product) => (
                        <li key={product.id} className="flex items-center mb-4 border-b pb-2">
                            <img src={product.image.url} alt={product.title} className="w-20 h-20 object-cover mr-4"/>
                            <div>
                                <p className="text-lg font-semibold">{product.title}</p>
                                <p className="text-sm text-gray-500">{product.price} NOK</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <Link to='/'>
                    <button className='bg-blue-500 text-white p-3 rounded-lg w-full cursor-pointer hover:bg-blue-600'
                            onClick={() => removeAllProducts()}>
                        Back to Shop
                    </button>
                </Link>
            </div>
        </div>
    );
}

