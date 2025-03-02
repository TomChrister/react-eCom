import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className='flex flex-row'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/cart'>
                    <img src='../public/cart.svg' alt='Cart Image' className='w-6' />
                </Link>
            </nav>
        </header>
    )
}