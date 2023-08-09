import Layout from "../Layout/Layout";
import ProductList from "../components/ProductList";
import SortMenu from "../components/SortMenu";
const Laptop = () => {
    return (
        <div>
            <Layout>
                <SortMenu/>
               <ProductList category='laptop'/>
            </Layout>
        </div>
    );
}

export default Laptop ;