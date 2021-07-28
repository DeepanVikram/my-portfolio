import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-inverse navbar-fixed-top'>
          <div className='container-fluid'>
          <div className='navbar-header'>
              <div className='navbar-brand'><a href="#">Deepan Rajendran</a></div>
            </div>
             <ul className='nav navbar-nav navbar-right'>
              <li><a className='nav-link' href='#About'>About</a></li>
              <li><a className='nav-link' href='#Skills'>Skills</a></li>
              <li><a className='nav-link' href='#Project'>Projects</a></li>
              <li><a className='nav-link' href='#contact'>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
