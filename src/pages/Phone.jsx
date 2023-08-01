import Layout from "../Layout/Layout";
import ProductList from "../components/ProductList";
import SortMenu from "../components/SortMenu";
const Phone = () => {
    return (
        <div>
            <Layout>
                <SortMenu/>
               <ProductList/>
            </Layout>
        </div>
    );
}

export default Phone ;