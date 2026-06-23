import Link from 'next/link';
import Rating from '@/components/Rating/Rating';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import { productService } from '@/services/product.service';

type ProductPageProps = {
    params: Promise<{ id: string }>;
};

const Product = async ({ params }: ProductPageProps): Promise<React.JSX.Element> => {
    const { id } = await params;
    const product = await productService.getProductById(id);

    return (
        <div className="min-h-screen bg-(--background-sidebar) p-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="p-8 relative">
                    <Link
                        href="/"
                        className="absolute text-sm font-semibold rounded border px-4 py-2"
                    >
                        ← Back
                    </Link>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <ImageGallery images={product?.images} title={product?.title} />

                        <div>
                            <h1 className="mb-4 text-3xl font-bold">{product?.title}</h1>

                            {/* price and rating */}
                            <div className="mb-4 flex items-center gap-4">
                                <span className="text-2xl font-bold">
                                    ${Math.round(product?.price)}
                                </span>
                                <Rating rating={product?.rating} />
                            </div>

                            {/* brand and category */}
                            <div className="pb-6 text-base border-b-2 border-b-(--border-color-light)">
                                <p className="font-semibold ">
                                    Brand:{' '}
                                    <span className="text-(--text-secondary)">
                                        {product?.brand}
                                    </span>
                                </p>
                                <p className="font-semibold ">
                                    Category:{' '}
                                    <span className="text-(--text-secondary)">
                                        {product?.category}
                                    </span>
                                </p>
                            </div>

                            {/* description */}
                            <div className="pt-4 pb-6 border-b-2 border-b-(--border-color-light)">
                                <h2 className="mb-3 text-2xl font-semibold">Description</h2>
                                <p className="text-sm text-(--text-secondary)">
                                    {product?.description}
                                </p>
                            </div>

                            {/* review */}
                            <div className="pt-4">
                                <h2 className="text-2xl font-semibold">Reviews</h2>

                                <div className="border-b-2 border-b-(--border-color-light) pb-6">
                                    {product?.reviews?.map(
                                        (review: {
                                            rating: number;
                                            comment: string;
                                            reviewerName: string;
                                        }) => (
                                            <div
                                                key={`${review?.reviewerName}-${review?.comment}-${review?.rating}`}
                                                className="mt-4"
                                            >
                                                <div className="flex items-center">
                                                    <span className="text-lg font-semibold mr-4">
                                                        {review.reviewerName}
                                                    </span>
                                                    <Rating rating={review.rating} />
                                                </div>

                                                <p className="text-sm text-(--text-secondary)">
                                                    {review.comment}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* bottom */}
                            <div className="text-base pt-6">
                                <p className="font-semibold ">
                                    Warranty:{' '}
                                    <span className="text-(--text-secondary) text-sm">
                                        {product?.warrantyInformation}
                                    </span>
                                </p>
                                <p className="font-semibold ">
                                    Shipping:{' '}
                                    <span className="text-(--text-secondary) text-sm">
                                        {product?.shippingInformation}
                                    </span>
                                </p>
                                <p className="font-semibold ">
                                    Return Policy:{' '}
                                    <span className="text-(--text-secondary) text-sm">
                                        {product?.returnPolicy}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
