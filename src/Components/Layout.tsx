import React, { useState } from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [navOpen, setNavOpen] = useState(false);

    const closeNav = () => setNavOpen(false);

    return (
        <>
            <header className="site-header navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#hero">MK.</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ml-auto align-items-lg-center">
                            <li className="nav-item"><a className="nav-link" href="#hero" onClick={closeNav}>Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#technologies" onClick={closeNav}>Technologies</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects" onClick={closeNav}>Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeNav}>Contact</a></li>
                            <li className="nav-item">
                                <a className="btn btn-sm btn-accent ml-lg-2" href="mailto:michal.kopaczewski.it+portfolio@gmail.com" onClick={closeNav}>Let's talk</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer className="py-4 text-center small">© {new Date().getFullYear()} Michał Kopaczewski. All rights reserved.</footer>
        </>
    );
};

export default Layout;