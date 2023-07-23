import * as data from '../data'

import Product from './Product';
const ProductList = () => {
  return (
    <main className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 col-span-12 md:col-span-9 rounded-md pt-3">
      {data.products.map((product) => {
        return (
         <Product key={product.id} product={product} id={product.id} />
        )
      })}
    </main>
  );
}

export default ProductList;