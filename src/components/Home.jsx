import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <div>
                Home Page
            </div>
            <Link to='/quiz' >
                <button>Start quiz</button>
            </Link>
        </>
    )
}

export default Home