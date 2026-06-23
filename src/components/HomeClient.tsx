'use client';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import ProductsContainer from '@/components/ProductsContainer/ProductsContainer';

type Category = { slug: string; name: string };

interface HomeClientProps {
    categories: Category[];
}

const HomeClient = ({ categories }: HomeClientProps): React.JSX.Element => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="min-h-screen p-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-white shadow-lg">
                <Header
                    isSidebarOpen={isSidebarOpen}
                    onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />

                <ProductsContainer
                    categories={categories}
                    isSidebarOpen={isSidebarOpen}
                    searchTerm={searchTerm}
                />
            </div>
        </div>
    );
};

export default HomeClient;
