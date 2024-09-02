import React from 'react'

const FavItem = ({product}) => {
  return (
    <>
    <div className='hello'>
        <img src={product.thumbnail}/>
    </div>
    </>
  )
}

export default FavItem