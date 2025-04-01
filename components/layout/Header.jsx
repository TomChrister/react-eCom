import { Link } from 'react-router-dom';
import { useCart } from '../../store/store.jsx';

export function Header() {
    const { products } = useCart();

    return (
        <>
            <header className='bg-blue-900 text-white px-4 sticky top-0 z-10 md:px-12 lg:px-60 py-6'>
                <nav className='flex justify-between px-3'>
                    <div className='flex gap-2'>
                        <Link to='/' className='font-primary'>miniShop</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <Link to='/checkout' className='relative'>
                        <img src='/cart.svg' alt='Cart Image' className='w-6'/>
                        {products.length > 0 && (
                            <span className='absolute top-2 -right-3 text-sm px-1'>
                                {products.length}
                            </span>
                        )}
                    </Link>
                </nav>
            </header>
        </>
    )
}