import { FiMenu, FiShoppingCart, FiClock, FiUser, FiSearch } from 'react-icons/fi';

interface HeaderProps {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

const Header = ({
    onToggleSidebar,
    isSidebarOpen,
    searchTerm,
    onSearchChange,
}: HeaderProps): React.JSX.Element => {
    return (
        <>
            <header className="header flex items-center justify-between rounded-t-lg px-8 py-2">
                <button
                    type="button"
                    onClick={onToggleSidebar}
                    className="cursor-pointer text-white"
                    title={isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
                >
                    <FiMenu size={28} />
                </button>

                <div className="mx-8 flex-1 flex justify-center">
                    <div className="search-container w-2/3 flex items-center rounded-md border p-2 bg-white">
                        <div className="search-icon mr-2 cursor-text">
                            <FiSearch size={18} />
                        </div>

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={e => onSearchChange(e.target.value)}
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-6 text-2xl text-white">
                    <FiShoppingCart />
                    <FiClock />
                    <FiUser />
                </div>
            </header>

            <style jsx>{`
                .header {
                    background-color: var(--background-header);
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
            `}</style>
        </>
    );
};

export default Header;
