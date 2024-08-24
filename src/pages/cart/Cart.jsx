import Empty from '@/components/empty/Empty'
import { useStateValue } from '@/context'
import React from 'react'

const Cart = () => {
  const [{cart}, dispatch] = useStateValue()
  
  return (
    <div>
      {
        cart.length ?
        <div>
          {
            cart?.map(item => (
              <div className='container mx-auto' key={item.id}>
                <img src={item.images[0]} className='w-20' alt="" />
                <p>{item.title}</p>
                <button disabled={item.quantity <= 1} onClick={()=> dispatch({type: "DEC_CART", payload: item})}>-</button>
                <span>{item.quantity}</span>
                <button onClick={()=> dispatch({type: "INC_CART", payload:item })}>+</button>
              </div>
            ))
          }
        </div>
        :
        <Empty url="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" title="Savatcha bo'sh"/>
      }

    </div>
  )
}

export default Cart