import Layout from "../Layout/Layout";
import ProductList from "../components/products/ProductList";
import SortMenu from "../components/menu/SortMenu";
const Laptop = () => {
    return (
        <div>
            <Layout>
                <SortMenu category='laptop'/>
               <ProductList category='laptop'/>
            </Layout>
        </div>
    );
}

export default Laptop ;