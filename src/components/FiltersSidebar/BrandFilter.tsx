export const BRANDS = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo'];

interface BrandFilterProps {
    selectedBrands: string[];
    onBrandChange: (brand: string) => void;
}

const BrandFilter = ({ selectedBrands, onBrandChange }: BrandFilterProps): React.JSX.Element => {
    return (
        <div className="pt-4">
            <h3 className="mb-2 text-lg font-semibold">Brands</h3>

            {BRANDS.map(brand => (
                <label
                    key={brand}
                    className={`flex cursor-pointer items-center gap-3 rounded-md px-2 py-1 ${
                        selectedBrands.includes(brand) ? 'font-semibold' : ''
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => onBrandChange(brand)}
                    />

                    <span>{brand}</span>
                </label>
            ))}
        </div>
    );
};

export default BrandFilter;
