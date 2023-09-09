import * as data from '../../data'
import Product from './Product';
import { ProductSkeleton } from '../common/Loading';
import useLoading from '../../hooks/useLoading';

const ProductList = ({ category }) => {
  const loading = useLoading();
  return (
    <main className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 col-span-12 md:col-span-9 rounded-md p-2">
      {data.products.map((product) => {
        if (category === 'laptop' && product.category === 'laptop') {
          return (loading ? <Product product={product} key={product.id} /> : <ProductSkeleton />)
        } else if (category === 'watch' && product.category === 'watch') {
          return (loading ? <Product product={product} key={product.id} /> : <ProductSkeleton />)
        } else if (category === 'phone' && product.category === 'phone') {
          return (loading ? <Product product={product} key={product.id} /> : <ProductSkeleton />)
        } else {
          return ''
        }
      })}
    </main>
  );
}

export default ProductList;



