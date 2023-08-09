import Layout from "../Layout/Layout";
import ProductList from "../components/ProductList";
import SortMenu from "../components/SortMenu";
const Watch = () => {
    return (
        <div>
            <Layout>
                <SortMenu/>
               <ProductList category='watch'/>
            </Layout>
        </div>
    );
}

export default Watch ;