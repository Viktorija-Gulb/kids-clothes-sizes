import React, { Component } from "react";
import "./ToddlerContent.scss";

import data from "../../data/tablesData.json";

class ToddlerContent extends Component {
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
      <div className="table-wrapper">
        <div className="open-table-btn" onClick={this.toggle}>
          {this.state.on ? this.state.tableState : "Žiūrėti lentelę"}
        </div>
        <table
          className={
            this.state.on
              ? "table table--open table--size2"
              : "table table--size2"
          }
        >
          <thead className="table__head">
            <tr className="table__row table__row--head-row">
              <th className="table__cell">DYDIS</th>
              <th className="table__cell">ŪGIS cm</th>
              <th className="table__cell">KRŪTINĖS APIMTIS cm</th>
              <th className="table__cell">LIEMENS APIMTIS cm</th>
              <th className="table__cell">KLUBAI cm</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {data.toddler.map((row) => (
              <tr className="table__row" key={row.id}>
                <td className="table__cell">{row.size}</td>
                <td className="table__cell">{row.height}</td>
                <td className="table__cell">{row.chest}</td>
                <td className="table__cell">{row.waist}</td>
                <td className="table__cell">{row.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToddlerContent;
