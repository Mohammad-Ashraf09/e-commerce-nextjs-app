import { FiSearch } from 'react-icons/fi';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import BrandFilter from './BrandFilter';

interface Category {
    slug: string;
    name: string;
}

interface FiltersSidebarProps {
    categories: Category[];
    selectedCategory: string;
    selectedBrands: string[];
    onCategoryChange: (value: string) => void;
    onBrandChange: (value: string) => void;
    onPriceApply: (min?: number, max?: number) => void;
}

const FiltersSidebar = ({
    categories,
    selectedCategory,
    selectedBrands,
    onCategoryChange,
    onBrandChange,
    onPriceApply,
}: FiltersSidebarProps): React.JSX.Element => {
    return (
        <>
            <aside className="filter-container w-64 p-5">
                <div className="search-container flex items-center rounded-md mb-4 border p-2 bg-white">
                    <div className="search-icon mr-2 cursor-text">
                        <FiSearch size={18} />
                    </div>

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-transparent outline-none"
                    />
                </div>
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                />
                <PriceFilter onPriceApply={onPriceApply} />
                <BrandFilter selectedBrands={selectedBrands} onBrandChange={onBrandChange} />
            </aside>

            <style jsx global>{`
                .filter-container {
                    background-color: var(--background-sidebar);
                }
                .search-container {
                    border: 1px solid var(--border-color);
                    transition: all 0.2s ease;
                }
                .search-container:focus-within {
                    border-color: var(--color-information);
                    box-shadow: 0 0 0 2px var(--color-information-light);
                }
                .search-icon {
                    color: var(--text-muted);
                }
                .filter-container label:hover {
                    background-color: var(--background-hover);
                }
            `}</style>
        </>
    );
};

export default FiltersSidebar;
