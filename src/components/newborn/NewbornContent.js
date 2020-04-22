import React, {Component} from "react";
import './Newborn.scss'
import NewbornTable from "./NewbornTable";

import newbornImg from '../../img/jonathan-borba.jpg'

import data from '../../data/newborn.json'


class NewbornContent extends Component {
  state = {
    on: false,
    tableState: 'Žiūrėti lentelę'
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
      tableState: 'Uždaryti lentelę'
    })
  }

  render(){
    return(
      <div className="section__wrapper" id="newborn-table">
        <h2 className="section__heading">Dydžiai naujagimiams</h2>
        <div className="section__content">
          <div className="table-wrapper">
            <div className="open-table-btn" onClick={this.toggle}>{this.state.on ? this.state.tableState: 'Žiūrėti lentelę'}</div>
            <NewbornTable data={data} />
          </div>
          <div className="img-holder">
            <img className="img-holder__img" src={newbornImg} alt="Baby."/>
            <span className="img-holder__comment">Photo by Jonathan Borba on Unsplash</span>
          </div>
        </div>
        <p className="paragraph">Pateikta dydžių lentelė yra orientacinė. Visada papildomai rekomenduojame atsižvelgti į gamintojo pateikta dydžių lentelę.</p>
      </div>
    );
  }

}


export default NewbornContent;