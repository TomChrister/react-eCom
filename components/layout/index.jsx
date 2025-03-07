import { Outlet } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function Layout() {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='grow'>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    )
}