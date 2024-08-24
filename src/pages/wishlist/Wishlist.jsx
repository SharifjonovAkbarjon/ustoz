import Empty from '@/components/empty/Empty';
import Products from '@/components/products/Products';
import { useStateValue } from '@/context'
import React from 'react'

const Wishlist = () => {
  const [data, dispatch] = useStateValue()
  
  return (
    <div >
      {
        data.wishlist.length ? 
        <Products title={"Wishlist"} data={data.wishlist}/>
        :
        <Empty url="https://www.lifestone.in/assets/front/images/icons/empty-wishlist.svg" title="Sevimlilar bo'sh"/>
      }
    </div>
  )
}

export default Wishlist