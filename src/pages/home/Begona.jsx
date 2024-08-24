import React, {useContext} from 'react'
import { Context } from './Home'

const Begona = () => {
    const data = useContext(Context)
  return (
    <div>{data.a}</div>
  )
}

export default Begona