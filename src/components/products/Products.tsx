import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps, IProductTypeProps} from "../product/Product";
import product from "../product/Product";
const Products: FC<any> = () => {



    const [products,setProducts]=useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {

                setProducts(products)

            });
    }, []);




    return (
        <div>
            {
                products.map(({id, title,description, category, price,discountPercentage, tags}:IProductProps)=>(<Product id={id} title={title} description={description} category={category} discountPercentage={discountPercentage} price={price} tags={tags} key={id}/>))
            }
        </div>
    );
};

export default Products;