import React, { Component } from "react";
import "./Newborn.scss";

import newbornImg from "../../img/jonathan-borba.jpg";

import data from "../../data/tablesData.json";

class NewbornContent extends Component {
  state = {
    on: false,
    tableState: "Žiūrėti lentelę",
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
      tableState: "Uždaryti lentelę",
    });
  };

  render() {
    return (
      <div className="section__wrapper" id="newborn-table">
        <h2 className="section__heading">Dydžiai naujagimiams</h2>
        <div className="section__content">
          <div className="table-wrapper">
            <div className="open-table-btn" onClick={this.toggle}>
              {this.state.on ? this.state.tableState : "Žiūrėti lentelę"}
            </div>
            <table className={this.state.on ? "table table--open" : "table"}>
              <thead className="table__head">
                <tr className="table__row table__row--head-row">
                  <th className="table__cell">DYDIS</th>
                  <th className="table__cell">ŪGIS cm</th>
                  <th className="table__cell">SVORIS kg</th>
                </tr>
              </thead>
              <tbody className="table__body">
                {data.newborn.map((row) => (
                  <tr className="table__row" key={row.id}>
                    <td className="table__cell">{row.size}</td>
                    <td className="table__cell">{row.height}</td>
                    <td className="table__cell">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="img-holder">
            <img className="img-holder__img" src={newbornImg} alt="Baby." />
            <span className="img-holder__comment">
              Photo by Jonathan Borba on Unsplash
            </span>
          </div>
        </div>
        <p className="paragraph">
          Pateikta dydžių lentelė yra orientacinė. Visada papildomai
          rekomenduojame atsižvelgti į gamintojo pateikta dydžių lentelę.
        </p>
      </div>
    );
  }
}

export default NewbornContent;
