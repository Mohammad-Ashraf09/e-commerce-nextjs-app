interface Category {
    slug: string;
    name: string;
}

interface CategoryFilterProps {
    categories: Category[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
    categories,
    selectedCategory,
    onCategoryChange,
}: CategoryFilterProps): React.JSX.Element => {
    return (
        <div className="mb-4">
            <h3 className="mb-1 text-lg font-semibold">Categories</h3>

            <div>
                <label
                    className={`flex cursor-pointer items-center gap-3 rounded-md px-2 py-1 ${
                        selectedCategory === '' ? 'font-semibold' : ''
                    }`}
                >
                    <input
                        type="radio"
                        checked={selectedCategory === ''}
                        onChange={() => onCategoryChange('')}
                    />
                    <span>All Categories</span>
                </label>

                {categories.slice(0, 6).map(category => (
                    <label
                        key={category.slug}
                        className={`flex cursor-pointer items-center gap-3 rounded-md px-2 py-1 ${
                            selectedCategory === category.slug ? 'font-semibold' : ''
                        }`}
                    >
                        <input
                            type="radio"
                            checked={selectedCategory === category.slug}
                            onChange={() => onCategoryChange(category.slug)}
                        />
                        <span>{category.name}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
