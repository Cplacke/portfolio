import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

    navigationStyle = ({ isActive }) => {
        let classList = 'uppercase px-2 hover:text-blue-300 transition-colors duration-500';
        if (isActive) {
            classList += ' text-blue-300';
        }
        return classList;
    }

    render() { 
        return (
            <div className="px-16 h-12 text-white bg-space flex">
                <div className="w-1/2 pt-3">
                    <NavLink to="/home" className={this.navigationStyle}> home </NavLink>
                    <NavLink to="/projects" className={this.navigationStyle}> projects </NavLink>
                    <NavLink to="/resume" className={this.navigationStyle}> resumé </NavLink>
                </div>
                <div className="w-1/2 pt-2 relative">
                    <img src='./assets/tech/github.svg' className="h-10 absolute right-0 bottom-1 cursor-pointer"
                        onClick={() => window.open('https://github.com/cplacke')}
                    />
                </div>
            </div>
        );
    }
}

export default Navigation;