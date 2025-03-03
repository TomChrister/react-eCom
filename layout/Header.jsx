import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className='flex justify-between px-3'>
                <div className='flex gap-2'>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <Link to='/cart'>
                    <img src='../public/cart.svg' alt='Cart Image' className='w-6'/>
                </Link>

            </nav>
        </header>
    )
}