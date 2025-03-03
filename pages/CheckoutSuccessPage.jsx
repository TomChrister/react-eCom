import { useCart } from '../store/store.jsx';
import { Link } from 'react-router-dom';

export function CheckoutSuccessPage() {
    const { products, removeAllProducts } = useCart();

    return (
        <>
            {products.map((product) => (
                <div key={product}>
                    <ul>
                        <li key={product}>
                            <img src={product.image.url} alt={product.name} className='w-20'/>
                            <p>{product.title}</p>
                        </li>
                    </ul>
                </div>
            ))}
            <Link to='/'>
                <button className='bg-blue-500 text-white p-2'
                        onClick={() => removeAllProducts(products)}>
                    Tilbake til butikken
                </button>
            </Link>
        </>
    )
}