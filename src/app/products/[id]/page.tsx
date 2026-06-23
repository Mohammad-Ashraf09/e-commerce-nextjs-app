import Link from 'next/link';
import { productService } from '@/services/product.service';

type ProductPageProps = {
    params: Promise<{ id: string }>;
};

const Product = async ({ params }: ProductPageProps): Promise<React.JSX.Element> => {
    const { id } = await params;

    const product = await productService.getProductById(id);

    return (
        <div className="mx-auto max-w-6xl p-10">
            <h1 className="text-3xl font-bold">{product.title}</h1>

            <p className="mt-4">{product.description}</p>

            <div className="mt-4 text-xl font-semibold">${product.price}</div>
            <div className="mt-6">
                <Link href="/" className="text-sm text-blue-600">
                    ← Back to products
                </Link>
            </div>
        </div>
    );
};

export default Product;
