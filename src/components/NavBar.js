import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const NavBar = () => {

    const { count } = useCart()

    return (



        <div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href='../'>daisyUI</a>
    </div>
    <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
            </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart - Items: { count }</Link></li>
            </div>
        </ul>
        </div>
    </div>
</div>
    )
}

export default NavBar