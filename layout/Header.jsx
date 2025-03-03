import { Link } from 'react-router-dom';
import { useCart } from '../store/store.jsx';

export function Header() {
    const { products } = useCart();

    return (
        <>
            <header>
                <nav className='flex justify-between px-3'>
                    <div className='flex gap-2'>
                        <Link to='/'>Home</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <Link to='/checkout'>
                        <img src='../public/cart.svg' alt='Cart Image' className='w-6'/>
                        {products.length > 0 && (
                            <span className='absolute top-1 -right-0 text-md rounded-full px-1'>
                            {products.length}
                        </span>
                        )}
                    </Link>
                </nav>
            </header>
        </>
    )
}