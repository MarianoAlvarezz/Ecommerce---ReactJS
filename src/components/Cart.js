import React, { useState } from 'react'
import { useCart} from '../context/cartContext'

const Cart = () => {

  const [total, setTotal] =  useState(0)


  
    const {products, clearCart } = useCart() /* hacer un products.length */

  return (
    <div>
        <div >Carrito</div>
        {products.map((p, i) => <li key={i}>{p.name}</li>)}
        <span className="text-info">Total: {total}</span>
        <button className='btn' onClick={clearCart}>Limpiar Carrito</button>
        </div>
  )
}

export default Cart