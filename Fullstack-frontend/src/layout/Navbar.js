import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-black navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand m-2 text-bold" to="/">E-commmerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className='btn btn-outline-light' to="/adduser">
                    Add user
                </Link>
    
            </div>
        </nav>
    </div>
  )
}

export default Navbar
