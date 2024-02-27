import React from 'react';
import { Component } from 'react';

class Navbar extends Component{
    render(){
        return (
        <>
        <nav className="navbar bg-light">
        {/* <div className="container-fluid"> */}
        <a className="navbar-brand">
            Navbar
            
        <span className='badge text-bg-primary'>#{this.props.totalCounters}</span>
       
            </a>
        {/* </div> */}
        </nav>
        </>
        );
    }
}
export default Navbar;