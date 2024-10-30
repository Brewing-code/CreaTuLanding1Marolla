import React from 'react';


export const Card = ({product}) => {
  return (
		<div className='container-img'>
			<img className='image' src={product.img} alt={product.title} />
			<div className='title'>{product.title}</div>
			<div className='price'>{product.price}</div>
		</div>
  );
}
