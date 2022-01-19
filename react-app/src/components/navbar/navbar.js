import React, {Component} from 'react';
import {MenuItems} from "./menuItem"; 
import './navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Oglasi</h1>
                <div className="menu-icon">

                </div>
                <ul>  
                    {MenuItems.map((item,index)=> {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
///20:45-22:30
export default Navbar