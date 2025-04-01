import { ProductsList } from '../components/products/ProductsList.jsx';
import { Hero } from '../components/hero/Hero.jsx';
import { useEffect } from 'react';

export function Home() {
    useEffect(() => {
        document.title = 'miniShop';
    })

    return (
        <div>
            <Hero />
            <ProductsList />
        </div>
    )
}