import Layout from "../Layout/Layout";
import ProductList from "../components/products/ProductList";
import SortMenu from "../components/menu/SortMenu";
const Phone = () => {
    return (
        <div>
            <Layout>
                <SortMenu category='phone'/>
               <ProductList category='phone'/>
            </Layout>
        </div>
    );
}

export default Phone ;