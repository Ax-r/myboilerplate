import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/news"> News </NavLink></li>
                    <li><NavLink to="/jobs"> Jobs </NavLink></li>
                </ul>
            </div>
        );
    }
}


export default Home;
