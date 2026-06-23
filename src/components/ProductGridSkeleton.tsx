const ProductGridSkeleton = (): React.JSX.Element => {
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="loader-card h-64 animate-pulse rounded-lg" />
            ))}

            <style jsx>{`
                .loader-card {
                    background-color: var(--background-sidebar);
                }
            `}</style>
        </div>
    );
};

export default ProductGridSkeleton;
