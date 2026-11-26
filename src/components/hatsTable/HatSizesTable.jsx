import React, { Component } from "react";
import "./hatSizes.scss";

import data from "../../data/tablesData.json";

class HatSizes extends Component {
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
      <div className="table-wrapper hat-sizes">
        <div className="open-table-btn" onClick={this.toggle}>
          {this.state.on ? this.state.tableState : "Žiūrėti lentelę"}
        </div>
        <table className={this.state.on ? "table table--open" : "table"}>
          <thead className="table__head">
            <tr className="table__row table__row--head-row">
              <th className="table__cell">Amžius</th>
              <th className="table__cell">Galvos apimtis</th>
            </tr>
          </thead>
          <tbody>
            {data.hats.map((row) => (
              <tr className="table__row" key={row.id}>
                <td className="table__cell">
                  {row.size} {row.dimension}
                </td>
                <td className="table__cell">iki {row.head}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HatSizes;
