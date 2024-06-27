import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className = "nav">
            <a href="/" className='site-name'>SiteName</a>
            <div className="navigate">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/services">Servises</Link></li>
                <li><Link to = "/location">Location</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Header