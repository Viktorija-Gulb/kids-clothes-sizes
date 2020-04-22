import React, {Component} from "react";
import './sizesTable1.scss'
import NewbornTable from "./NewbornTable";

import data from '../../data/newborn.json'

class SizesTable1 extends Component {
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
      <div className="table-wrapper">
        <div className="open-table-btn" onClick={this.toggle}>{this.state.on ? this.state.tableState: 'Žiūrėti lentelę'}</div>
        <NewbornTable data={data} />
        {/* <table className={this.state.on ? 'table table--open' : 'table'}>
          <thead className="table__head">
            <tr className="table__row table__row--head-row">
              <th className="table__cell">DYDIS</th>
              <th className="table__cell">ŪGIS cm</th>
              <th className="table__cell">SVORIS kg</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell">Naujagimis</td>
              <td className="table__cell">Iki 50</td>
              <td className="table__cell">Iki 3.4</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">0-1</td>
              <td className="table__cell">Iki 56</td>
              <td className="table__cell">Iki 4.5</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">0-3</td>
              <td className="table__cell">56-62</td>
              <td className="table__cell">4.5-6</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">3-6</td>
              <td className="table__cell">62-68</td>
              <td className="table__cell">6-8</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">6-9</td>
              <td className="table__cell">68-74</td>
              <td className="table__cell">8-9.5</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">9-12</td>
              <td className="table__cell">74-80</td>
              <td className="table__cell">9.5-11</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }

}


export default SizesTable1;