interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps): React.JSX.Element => {
    const generatePages = (): (number | string)[] => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        pages.push(1);

        if (currentPage > 4) {
            pages.push('...');
        }

        const startPage = Math.max(2, currentPage - 2);
        const endPage = Math.min(totalPages - 1, currentPage + 2);

        for (let page = startPage; page <= endPage; page++) {
            pages.push(page);
        }

        if (currentPage < totalPages - 3) {
            pages.push('...');
        }

        pages.push(totalPages);

        return pages;
    };

    return (
        <div className="mt-4 flex justify-center">
            <div className="flex items-center gap-2">
                {currentPage > 1 && (
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        className="text-sm font-semibold rounded border px-2 py-1 shadow-sm"
                    >
                        ← Previous
                    </button>
                )}

                {generatePages().map((page, index) =>
                    page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-2">
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(Number(page))}
                            className={`flex h-8 w-8 items-center justify-center text-sm rounded border shadow-sm ${
                                page === currentPage ? 'selected' : 'bg-white'
                            }`}
                        >
                            {page}
                        </button>
                    )
                )}

                {currentPage < totalPages && (
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        className="text-sm font-semibold rounded border px-2 py-1 shadow-sm"
                    >
                        Next →
                    </button>
                )}
            </div>

            <style jsx global>{`
                button {
                    border-color: var(--border-color-extra-light);
                }
                .selected {
                    background-color: var(--color-information);
                    color: white;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default Pagination;
