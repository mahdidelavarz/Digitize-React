import Layout from "../Layout/Layout";
import ProductList from "../components/products/ProductList";
import SortMenu from "../components/menu/SortMenu";
const Watch = () => {
    return (
        <div>
            <Layout>
                <SortMenu category='watch'/>
               <ProductList category='watch'/>
            </Layout>
        </div>
    );
}

export default Watch ;