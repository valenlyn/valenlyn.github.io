import React, { Component } from 'react';
import styles from './style.css';


class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Work</a>
                    </li>
                </ul>
            </div>
                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto order-3" href="/">VALENLYN.COM</a>
                </div>
                <div className="nav-menu">
                    <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className={styles.menu}><i className="material-icons">menu</i></span>
                    </button>
                </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Nav;