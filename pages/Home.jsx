import { ProductsList } from '../components/products/ProductsList.jsx';
import { Hero } from '../components/hero/Hero.jsx';

export function Home() {
    return (
        <div>
            <Hero />
            <ProductsList />
        </div>
    )
}