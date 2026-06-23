import HomeClient from '@/components/HomeClient';
import { productService } from '@/services/product.service';

const Home = async (): Promise<React.JSX.Element> => {
    const categories = await productService.getCategories();

    return <HomeClient categories={categories} />;
};

export default Home;
