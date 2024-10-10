import React, {FC} from 'react';


export interface IProductProps {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    tags: string[],
}

export type IProductTypeProps= IProductProps & {children?: React.ReactNode};

const Product : FC<IProductTypeProps>= ({id,title,description, category, price,discountPercentage, tags}) => {
    return (
        <div>

            <h2>{id} {title}</h2>
            <ul>
                <li>{description}</li>
                <li>{category}</li>
                <li>{price}</li>
                <li>{discountPercentage}</li>
                <li>
                    {
                    tags.map((tag:string,index)=><p key={index}>{tag}</p>)
                }
                </li>
            </ul>

        </div>
    );
};

export default Product;