import React from 'react';

// import './Nav.css';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-custom text-white link-white">
                <div className="container">
                    <a className="navbar-brand" href="/">Scout NPS Survey Link Builder</a>
                </div>
            </nav>
        )
    }
}

export default Header;