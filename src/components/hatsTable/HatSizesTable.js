import React, {Component} from "react";
import './hatSizes.scss'

class HatSizes extends Component {
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
      <div className="table-wrapper hat-sizes">
        <div className="open-table-btn" onClick={this.toggle}>{this.state.on ? this.state.tableState: 'Žiūrėti lentelę'}</div>
        <table className={this.state.on ? 'table table--open' : 'table'}>
          <thead className="table__head">
            <tr className="table__row table__row--head-row">
              <th className="table__cell">Amžius</th>
              <th className="table__cell">Galvos apimtis</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell">0-3 mėn.</td>
              <td className="table__cell">iki 38 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">3-6 mėn.</td>
              <td className="table__cell">iki 42 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">6-9 mėn.</td>
              <td className="table__cell">iki 46 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">9-12 mėn.</td>
              <td className="table__cell">iki 47 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">12-18 mėn.</td>
              <td className="table__cell">iki 48 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">18-24 mėn.</td>
              <td className="table__cell">iki 49 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">2-3 metai</td>
              <td className="table__cell">iki 51 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">3-4 metai</td>
              <td className="table__cell">iki 52 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">4-5 metai</td>
              <td className="table__cell">iki 53 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">5-8 metai</td>
              <td className="table__cell">iki 54 cm</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">9-12 metai</td>
              <td className="table__cell">iki 56 cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}


export default HatSizes;