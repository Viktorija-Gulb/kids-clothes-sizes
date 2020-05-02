import React, { Component } from "react";
import "./shoesSizesTable.scss";

import data from "../../data/tablesData.json";

class shoesSizesTable extends Component {
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
      <div className="table-wrapper shoes-sizes">
        <div className="open-table-btn" onClick={this.toggle}>
          {this.state.on ? this.state.tableState : "Žiūrėti lentelę"}
        </div>
        <table className={this.state.on ? "table table--open" : "table"}>
          <thead className="table__head">
            <tr className="table__row table__row--head-row">
              <th className="table__cell">Pėdos ilgis (cm)</th>
              <th className="table__cell">Dydis EU</th>
              <th className="table__cell">Dydis UK</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {data.shoes.map((row) => (
              <tr className="table__row" key={row.id}>
                <td className="table__cell">{row.footLength}</td>
                <td className="table__cell">{row.sizeEU}</td>
                <td className="table__cell">{row.sizeUK}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default shoesSizesTable;
