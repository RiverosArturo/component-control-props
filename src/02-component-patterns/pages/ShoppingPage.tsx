import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];



export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    // maxCount: 10,
                }}
            >
                {
                    ({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}
