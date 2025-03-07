import { Link } from 'react-router-dom';
import { useCart } from '../../store/store.jsx';

export function Header() {
    const { products } = useCart();

    return (
        <>
            <header className='bg-gray-900 text-white px-4 sticky top-0 z-10 md:px-12 lg:px-60 py-6'>
                <nav className='flex justify-between px-3'>
                    <div className='flex gap-2'>
                        <Link to='/' className='font-primary'>miniShop</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <Link to='/checkout'>
                        <img src='../../public/cart.svg' alt='Cart Image' className='w-6'/>
                        {products.length > 0 && (
                            <span className='absolute top-6 right-60 text-md rounded-full px-1'>
                            {products.length}
                        </span>
                        )}
                    </Link>
                </nav>
            </header>
        </>
    )
}