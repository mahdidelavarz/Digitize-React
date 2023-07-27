import { useParams } from "react-router-dom";
import * as data from '../data'

const SingleProduct = () => {
    const { id } = useParams();
    const filteredProduct = data.products
        .filter((p) => parseInt(p.id) === parseInt(id))
        .reduce((key, value) => {
            key[value] = key;
            return value;
        }, {});
    console.log(filteredProduct)
    return (
        <div>
            <h1>{filteredProduct.name}</h1>
        </div>
    );
}

export default SingleProduct;