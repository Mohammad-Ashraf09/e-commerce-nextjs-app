import { useEffect, useState } from 'react';

interface PriceFilterProps {
    onPriceApply: (min?: number, max?: number) => void;
}

const PriceFilter = ({ onPriceApply }: PriceFilterProps): React.JSX.Element => {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    /* here i'm using debouncing and removing Apply button according to the pdf provided
     ** it will waits for 500ms delay
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            onPriceApply(
                min.trim() ? Number(min) : undefined,
                max.trim() ? Number(max) : undefined
            );
        }, 500);

        return () => clearTimeout(timer);
    }, [min, max, onPriceApply]);

    return (
        <>
            <div className="price-container pt-4 pb-6">
                <h3 className="mb-2 text-lg font-semibold">Price Range</h3>

                <div className="flex gap-2">
                    <input
                        type="number"
                        value={min}
                        onChange={e => setMin(e.target.value)}
                        placeholder="Min"
                        className="search-container w-full rounded-md border px-3 py-2 outline-none bg-white"
                    />

                    <input
                        type="number"
                        value={max}
                        onChange={e => setMax(e.target.value)}
                        placeholder="Max"
                        className="search-container w-full rounded-md border px-3 py-2 outline-none bg-white"
                    />
                </div>
            </div>

            <style jsx>{`
                .price-container {
                    border-top: solid 2px var(--border-color-light);
                    border-bottom: solid 2px var(--border-color-light);
                }
            `}</style>
        </>
    );
};

export default PriceFilter;
