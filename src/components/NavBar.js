import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import CartWidget from "./CartWidget"
import Cart from './Cart'

const NavBar = () => {
    const { count } = useCart()

    return (
        
        <div>
        


                        <div className="navbar bg-base-100">
    <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='imagenLogo' src="https://static.vecteezy.com/system/resources/previews/005/439/327/non_2x/sneaker-store-logo-eps-vector.jpg"></img></Link>
    </div>

    
    <div className="flex-none">
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
                    <CartWidget></CartWidget>
            </div>
        </label>
        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
            <span className="font-bold text-lg"><Cart/></span>
            
            <div className="card-actions">
                <button className="btn btn-primary btn-block"> <Link to="/cart"> Ver Carrito </Link></button>
            </div>
            </div>
        </div>
        </div>
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/005/439/327/non_2x/sneaker-store-logo-eps-vector.jpg" />
            </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        

    {/* para hacer link, simplemente encerrar en un <Link></Link> */}





            
    <li><Link to='/'>Inicio</Link></li>
    <li><Link to='/tienda'>Tienda</Link></li>
        </ul>
        </div>
    </div>
    </div>

        </div>
    )
}

export default NavBar