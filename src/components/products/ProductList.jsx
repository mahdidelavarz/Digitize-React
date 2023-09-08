import * as data from '../../data'
import Product from './Product';

const ProductList = ({ category }) => {
  return (
    <main className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 col-span-12 md:col-span-9 rounded-md pt-3">
      {data.products.map((product) => {
        if (category === 'laptop' && product.category === 'laptop') {
          return <Product product={product} key={product.id} />
        } else if (category === 'watch' && product.category === 'watch') {
          return <Product product={product} key={product.id} />
        } else if (category === 'phone' && product.category === 'phone') {
          return <Product product={product} key={product.id} />
        } else{
          return ''
        }
      })}
    </main>
  );
}

export default ProductList;



