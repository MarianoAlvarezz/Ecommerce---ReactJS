import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
    <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="https://d161wnnmtvsq6z.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2RTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--506fe0b87ce0e2d1847972e5fac1e0a7343eec85/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQWo4QmFRTG9Bdz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--b12f478b3d25973590d603d8517b1d7094934df8/active_celda4.jpg" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <h1 class="text-5xl font-bold">Aca podes visitar nuestra Tienda!</h1>
        <p class="py-6">Productos de la mejor calidad.</p>
        <Link to ="/tienda" class="btn btn-primary">Tienda</Link>
        </div>
    </div>
    </div>
        </div>
    )
    }

export default Hero
