import React, { useState } from 'react'
import { useCart} from '../context/cartContext'

const Cart = () => {


  const [total, setTotal] =  useState(0)


const getTotalPrice = () => { return products.reduce((prev, act) => prev + act.cantidad * act.price, 0); }

  
    const {products, clearCart } = useCart()

  return (
    <div className='scroll'>
      <div className='center'>
        <br/>
        <div>Carrito</div>
        <br/>
          {products.map((p, i) => <li key={i}>{p.name}</li>)}
          <br/>
          <span className="text-info">Total: ${getTotalPrice()}</span>
          <br/>        <br/>
          <button className='btn' onClick={clearCart}>Limpiar Carrito</button>
          <br/>
          </div>
        </div>
  )
}

export default Cart