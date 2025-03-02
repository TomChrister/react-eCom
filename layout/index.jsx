import { Outlet } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function Layout() {
    return (
        <>
            <div>
                <Header />
                <main className='grow'>
                    <Outlet/>
                </main>
                <Footer />
            </div>
        </>
    )
}