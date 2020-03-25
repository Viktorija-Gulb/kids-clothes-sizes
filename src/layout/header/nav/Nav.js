import React, { Component } from 'react';
import './nav.scss';
import './meniuButton.scss';

class Nav extends Component {

  state = {
    isOpen: false,
    subNavOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleArrowClick = () => {
    this.setState({
      subNavOpen: !this.state.subNavOpen
    })
  }

  render() {
    return(
      <nav className="nav">
        <ul className={this.state.isOpen ? 'nav__list nav__list--open' : 'nav__list' }>
          <li className="nav__item nav__item--dropdown">
            <span className={this.state.subNavOpen ? 'dropdown-arrow dropdown-arrow--open' : 'dropdown-arrow'} onClick={this.handleArrowClick}></span>
            <a href="#newborn-table">Drabužių dydžiai</a>
            <ul className={this.state.subNavOpen ? 'sub-nav sub-nav--open' : 'sub-nav'}>
              <li className="sub-nav__item"><a href="#newborn-table">Dydžiai naujagimiams</a></li>
              <li className="sub-nav__item"><a href="#todler-table">Nuo vienerių iki 6 metukų</a></li>
              <li className="sub-nav__item"><a href="#table-3">Nuo 3 iki 16 metų</a></li>
            </ul>
          </li>
          <li className="nav__item"><a href="#shoes-table">Avalynės dydžiai</a></li>
          <li className="nav__item"><a href="#hats-table">Kepurių dydžiai</a></li>
        </ul>
        <div className={this.state.isOpen ? 'btn btn--close' : 'btn'} onClick={this.handleClick}>
          <div className="btn__line"></div>
          <div className="btn__line"></div>
          <div className="btn__line"></div>
        </div>
      </nav>
    );
  }
}

export default Nav;