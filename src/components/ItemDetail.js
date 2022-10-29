import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/cartContext'

    const ItemDetail = () => {
    
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const {addToCart} = useCart()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'products')
        const docRef = doc( productsCollection, id)
        getDoc( docRef ).then( res => {
            console.log( res.data() );
            setProduct(res.data())
        })
    }

    const addHandler = () => {
        addToCart(product)
    }

    return (
        <div>
            <br/><br/>
            <div className='name'>{product.name}</div>
            <br/>
            <div className='price'>US$ {product.price}</div>
            <img className='imageDetail' src={product.img} height={200}/>
            <div className='description'><li>{product.description1}</li></div>
            <div className='description'><li>{product.description2}</li></div>
            <div className='description'><li>{product.description3}</li></div>
            <div className='description'><li>{product.description4}</li></div>
            <div className='description'><li>{product.description5}</li></div>

            <br/><br/>
            <button class="btn glass" onClick={addHandler}>Agregar al carrito</button>
            <br/><br/>
        </div>
    )
}

export default ItemDetail