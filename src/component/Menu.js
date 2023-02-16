import React from "react";
import { NavLink } from "react-router-dom";


function Menu(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">portfolio</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#Menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="Menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/`} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/about`} className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/resume`} className="nav-link">Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/projects`} className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu