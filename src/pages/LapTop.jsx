import Layout from "../Layout/Layout";
import * as data from '../data'
const Laptop = () => {
    return (
        <div>
            <Layout>
                <main className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 col-span-12 md:col-span-9 rounded-md pt-3">
                    {data.products.map((d) => {
                        return (
                            <div className="h-96 bg-white rounded-md mt-4 shadow-lg">
                                laptop
                            </div>
                        )
                    })}
                </main>
            </Layout>
        </div>
    );
}

export default Laptop ;