import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, location, specific }) => {
    return (
        <button className={`button ${specific} `}>
            <Link className='button-content' to={location}>{text}</Link>
        </button>
    )
}

export default Button
