import { ProductsList } from '../components/products/ProductsList.jsx';
import { SearchBar } from '../components/search/SearchBar.jsx';

export function Home() {
    return (
        <div>
            <SearchBar />
            <ProductsList />
        </div>
    )
}