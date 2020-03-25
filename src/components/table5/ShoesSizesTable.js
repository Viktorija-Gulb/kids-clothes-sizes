import React, {Component} from "react";
import './shoesSizesTable.scss'

class shoesSizesTable extends Component {
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
      <div className="table-wrapper shoes-sizes">
        <div className="open-table-btn" onClick={this.toggle}>{this.state.on ? this.state.tableState: 'Žiūrėti lentelę'}</div>
        <table className={this.state.on ? 'table table--open' : 'table'}>
          <thead className="table__head">
            <tr className="table__row table__row--head-row">
              <th className="table__cell">Pėdos ilgis (cm)</th>
              <th className="table__cell">Dydis EU</th>
              <th className="table__cell">Dydis UK</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell">9.7</td>
              <td className="table__cell">16</td>
              <td className="table__cell">2</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">10.3</td>
              <td className="table__cell">17</td>
              <td className="table__cell">2 &frac12;</td>

            </tr>
            <tr className="table__row">
              <td className="table__cell">11</td>
              <td className="table__cell">18</td>
              <td className="table__cell">3</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">11.6</td>
              <td className="table__cell">19</td>
              <td className="table__cell">4</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">12.3</td>
              <td className="table__cell">20</td>
              <td className="table__cell">5</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">13</td>
              <td className="table__cell">21</td>
              <td className="table__cell">5 &frac12;</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">13.6</td>
              <td className="table__cell">22</td>
              <td className="table__cell">6</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">14.3</td>
              <td className="table__cell">23</td>
              <td className="table__cell">7</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">15</td>
              <td className="table__cell">24</td>
              <td className="table__cell">8</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">15.6</td>
              <td className="table__cell">25</td>
              <td className="table__cell">8 &frac12;</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">16.3</td>
              <td className="table__cell">26</td>
              <td className="table__cell">9</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">17</td>
              <td className="table__cell">27</td>
              <td className="table__cell">10</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">17.6</td>
              <td className="table__cell">28</td>
              <td className="table__cell">10 &frac12;</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">18.3</td>
              <td className="table__cell">29</td>
              <td className="table__cell">11 &frac12;</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">19</td>
              <td className="table__cell">30</td>
              <td className="table__cell">12</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">19.6</td>
              <td className="table__cell">31</td>
              <td className="table__cell">12 &frac12;</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">20.3</td>
              <td className="table__cell">32</td>
              <td className="table__cell">13</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">21</td>
              <td className="table__cell">33</td>
              <td className="table__cell">13 &frac12;</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}


export default shoesSizesTable;