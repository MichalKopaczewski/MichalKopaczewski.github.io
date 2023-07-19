import React, { Component, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
interface NavMenuState {
    collapsed: boolean;
}
interface Props { }
export default function NavMenu(props: Props) {
    let location = useLocation();

    const [state, setState] = useState<NavMenuState>({ collapsed: true })
    let navigate = useNavigate();

    const toggleNavbar = () => {
        setState({
            collapsed: !state.collapsed
        });
    }
   
    return (
            <header id="header" className="alt">
            <a className="logo" href="index.html"></a>
                <nav id="nav">
                    <ul>
                    <li className="current"><a href="index.html">Home</a></li>
                        <li>
                        <a href="#" className="icon solid fa-angle-down">Dropdown</a>
                            <ul>
                                <li><a href="#">Option One</a></li>
                                <li><a href="#">Option Two</a></li>
                                <li><a href="#">Option Three</a></li>
                                <li>
                                    <a href="#">Submenu</a>
                                    <ul>
                                        <li><a href="#">Option One</a></li>
                                        <li><a href="#">Option Two</a></li>
                                        <li><a href="#">Option Three</a></li>
                                        <li><a href="#">Option Four</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="generic.html">Generic</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>
                </nav>
            </header>
    );
}
