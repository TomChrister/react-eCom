import { useCart } from '../store/store.jsx';
import { Link } from 'react-router-dom';

export function CheckoutPage() {
    const { products, removeFromCart } = useCart();
    const totalSum = products.reduce((sum, product) => sum + product.price, 0);

    // Quantity for products
    const groupedProducts = products.reduce((acc, product) => {
        const existingProduct = acc.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            acc.push({ ...product, quantity: 1 });
        }
        return acc;
    }, []);

    // To make the remove function work
    const handleRemove = (product) => {
        const originalProduct = products.find(p => p.id === product.id);
        removeFromCart(originalProduct);
    };

    return (
        <div className="flex justify-center py-8">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
                <h1 className="text-3xl font-semibold text-center mb-6">Shopping Cart</h1>

                {groupedProducts.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty</p>
                ) : (
                    <ul className="space-y-4">
                        {groupedProducts.map((product) => (
                            <li key={product.id} className="flex items-center justify-between border-b py-4">
                                <div className="flex items-center space-x-4">
                                    <img src={product.image.url} alt={product.title} className="w-20 h-20 object-cover mr-4"/>
                                    <div>
                                        <p className="text-lg font-semibold">{product.title}</p>
                                        <p className="text-sm text-gray-500">{product.price} NOK</p>
                                        <p className="text-sm text-gray-400">Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-700 cursor-pointer"
                                        onClick={() => handleRemove(product)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-6">
                    <p className="text-lg font-semibold">Total quantity: {products.length}</p>
                    <p className="text-xl font-semibold mt-2">Total sum: {totalSum.toFixed(2)} NOK</p>
                </div>

                <div className="mt-8 flex justify-center">
                    <Link to='/checkoutSuccess'>
                        <button className="bg-blue-500 text-white p-3 rounded-lg w-full max-w-xs cursor-pointer hover:bg-blue-600">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
