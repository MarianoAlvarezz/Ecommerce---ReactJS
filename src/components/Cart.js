import React from 'react'
import { useCart } from '../context/cartContext'

const Cart = () => {

    const {products, clearCart} = useCart()

    return (
        <div className='center'>
            <br/>
            <div className='cart'>Carrito</div>
            <br/>
            { products.map( (p, i) => <li key={i}> {p.name}: <br/> {p.price}</li> ) }
            <br/>
            <button class="btn glass" onClick={clearCart}>Limpiar carrito</button>
        </div>
    )
}

export default Cart
