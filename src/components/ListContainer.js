import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const Card = ( {id, name, price, img} ) => {
    return (
        <Link to={`/detail/${id}`}>
<div class="card w-96 glass">
    <figure> <img src={img} height={200}/></figure>
    <div class="card-body">
    <div>{name}</div>
    <div>{price}</div>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Ver!</button>
        </div>
    </div>
</div>
        </Link>
    )
    }

    const ListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'products')
        getDocs( productsCollection ).then( res => {
        const productsData = res.docs.map( d => ({id: d.id, ...d.data()}) )
        console.log( productsData );
        setProducts( productsData )
        setLoading(false)
        })
    }

    return (
        <div className='center'>
            <br/>
        { loading ? <h1> Cargando... </h1>
            :
            products.map( p => <Card key={p.id} {...p} /> )
        }
        </div>
    )
}

export default ListContainer