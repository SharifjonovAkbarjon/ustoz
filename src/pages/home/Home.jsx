import Products from '@/components/products/Products'
import { useStateValue } from '@/context'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'


const Home = () => {
  const {data,loading} = useFetch("/products", {limit: 6})
  
  return (
    <div>
      <h2 className='text-center text-4xl'>Home </h2>
      {loading && <h2>Loading...</h2>}
      
      <Products title={"New products"} data={data?.products} />
    </div>
  )
}

export default Home