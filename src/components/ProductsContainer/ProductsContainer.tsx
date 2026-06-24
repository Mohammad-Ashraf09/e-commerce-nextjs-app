'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import FiltersSidebar from '../FiltersSidebar/FiltersSidebar';
import Pagination from '../Pagination/Pagination';
import ProductGrid from '../ProductGrid/ProductGrid';
import { productService } from '@/services/product.service';
import { Product } from '@/types/product';
import ProductGridSkeleton from '../ProductGridSkeleton';
import ErrorMessage from '../ErrorMessage';

const PRODUCTS_PER_PAGE = 10;

type Category = {
    slug: string;
    name: string;
};

type ProductsContainerProps = {
    categories: Category[];
    isSidebarOpen: boolean;
    searchTerm: string;
};

const ProductsContainer = ({
    categories,
    isSidebarOpen,
    searchTerm,
}: ProductsContainerProps): React.JSX.Element => {
    const getSavedFilters = () => {
        if (typeof window === 'undefined') {
            return {
                currentPage: 1,
                selectedCategory: '',
                selectedBrands: [],
                minPrice: undefined,
                maxPrice: undefined,
                searchTerm: '',
                isSidebarOpen: false,
            };
        }

        const savedData = localStorage.getItem('productFilters');
        return savedData
            ? JSON.parse(savedData)
            : {
                  currentPage: 1,
                  selectedCategory: '',
                  selectedBrands: [],
                  minPrice: undefined,
                  maxPrice: undefined,
                  searchTerm: '',
                  isSidebarOpen: false,
              };
    };

    const storageData = getSavedFilters();

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(storageData?.currentPage);
    const [selectedCategory, setSelectedCategory] = useState(storageData?.selectedCategory);
    const [selectedBrands, setSelectedBrands] = useState<string[]>(storageData?.selectedBrands);
    const [minPrice, setMinPrice] = useState<number | undefined>(storageData?.minPrice);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(storageData?.maxPrice);

    useEffect(() => {
        localStorage.setItem(
            'productFilters',
            JSON.stringify({
                currentPage,
                selectedCategory,
                selectedBrands,
                minPrice,
                maxPrice,
                searchTerm,
                isSidebarOpen,
            })
        );
    }, [
        currentPage,
        selectedCategory,
        selectedBrands,
        minPrice,
        maxPrice,
        searchTerm,
        isSidebarOpen,
    ]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError('');
                const data = selectedCategory
                    ? await productService.getProductsByCategory(selectedCategory)
                    : await productService.getAllProducts();

                setAllProducts(data.products);
            } catch {
                setError('Failed to load products. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory, currentPage]);

    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            const brandMatch =
                selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            const minMatch = minPrice === undefined || product.price >= minPrice;
            const maxMatch = maxPrice === undefined || product.price <= maxPrice;
            const searchMatch =
                searchTerm === '' || product.title.toLowerCase().includes(searchTerm.toLowerCase());

            return brandMatch && minMatch && maxMatch && searchMatch;
        });
    }, [allProducts, selectedBrands, minPrice, maxPrice, searchTerm]);

    const handleCategoryChange = (category: string) => {
        setCurrentPage(1);
        setSelectedCategory(category);
    };

    const handleBrandChange = (brand: string) => {
        setCurrentPage(1);

        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(item => item !== brand) : [...prev, brand]
        );
    };

    /* wrapping handlePriceApply inside useCallback hook because
     ** handlePriceApply is dependency of useEffect in PriceFilter component
     */
    const handlePriceApply = useCallback((min?: number, max?: number) => {
        if (min || max) {
            setCurrentPage(1);
        }
        setMinPrice(min);
        setMaxPrice(max);
    }, []);

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * PRODUCTS_PER_PAGE;

        return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    return (
        <div className="flex">
            {isSidebarOpen && (
                <FiltersSidebar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    selectedBrands={selectedBrands}
                    onCategoryChange={handleCategoryChange}
                    onBrandChange={handleBrandChange}
                    onPriceApply={handlePriceApply}
                />
            )}

            <div className={`flex-1 ${isSidebarOpen ? 'px-4 py-2' : 'px-8 py-4'}`}>
                <h2 className="mb-2 text-3xl font-semibold">Products</h2>
                {!filteredProducts?.length && !loading ? (
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold">
                        No Product Found
                    </div>
                ) : (
                    <>
                        {loading && <ProductGridSkeleton />}
                        {error && <ErrorMessage message={error} />}

                        {!loading && !error && (
                            <>
                                <ProductGrid
                                    products={paginatedProducts}
                                    isSidebarOpen={isSidebarOpen}
                                />

                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductsContainer;
