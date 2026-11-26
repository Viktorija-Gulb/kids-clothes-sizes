import React, { Component } from 'react';
import './meniuButton.scss';


class MeniuButton extends Component {

  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    return(
      <div className={this.state.isOpen ? 'btn btn--close' : 'btn'} onClick={this.handleClick}>
        <div className="btn__line"></div>
        <div className="btn__line"></div>
        <div className="btn__line"></div>
      </div>
    )
  }
}

export default MeniuButton;