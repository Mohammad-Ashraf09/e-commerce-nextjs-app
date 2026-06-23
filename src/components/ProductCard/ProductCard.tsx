import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import Rating from '../Rating/Rating';

interface ProductCardProps {
    product: Product;
    isSidebarOpen: boolean;
}

const ProductCard = ({ product, isSidebarOpen }: ProductCardProps): React.JSX.Element => {
    return (
        <Link
            href={`/products/${product.id}`}
            className={`rounded-lg bg-white shadow-md transition hover:shadow-lg ${isSidebarOpen ? 'py-4 px-2' : 'p-4'}`}
        >
            <div className="flex h-38 items-center justify-center">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={156}
                    height={156}
                    className="object-contain"
                />
            </div>

            <div className="bottom-section pt-2">
                <h2 className={`font-semibold ${isSidebarOpen ? 'text-sm' : 'text-lg'}`}>
                    {product.title}
                </h2>

                <div className="mt-2 flex items-center">
                    <span
                        className={`font-semibold ${isSidebarOpen ? 'text-lg mr-3' : 'text-xl mr-4'}`}
                    >
                        ${Math.round(product.price)}
                    </span>
                    <Rating rating={product.rating} />
                </div>
            </div>

            <style jsx global>{`
                .bottom-section {
                    border-top: 2px solid var(--border-color-extra-light);
                }
            `}</style>
        </Link>
    );
};

export default ProductCard;
