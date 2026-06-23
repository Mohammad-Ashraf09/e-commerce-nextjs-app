import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/types/product';

type ProductGridProps = {
    products: Product[];
    isSidebarOpen: boolean;
};

const ProductGrid = ({ products, isSidebarOpen }: ProductGridProps): React.JSX.Element => {
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {products.map(product => (
                <ProductCard key={product.id} product={product} isSidebarOpen={isSidebarOpen} />
            ))}
        </div>
    );
};

export default ProductGrid;
