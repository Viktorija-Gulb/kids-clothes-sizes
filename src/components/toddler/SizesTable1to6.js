import React, { Component } from "react";
import './sizesTable1to6.scss'

class SizesTable1to6 extends Component {
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
        <table className={this.state.on ? 'table table--open table--size2' : 'table table--size2'}>
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
            <tr className="table__row">
              <td className="table__cell">12-18</td>
              <td className="table__cell">80-86</td>
              <td className="table__cell">49-51</td>
              <td className="table__cell">50-51</td>
              <td className="table__cell">52-54</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">18-24</td>
              <td className="table__cell">86-92</td>
              <td className="table__cell">51-53</td>
              <td className="table__cell">51-52</td>
              <td className="table__cell">54-56</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">2-3</td>
              <td className="table__cell">92-98</td>
              <td className="table__cell">53-55</td>
              <td className="table__cell">52-53</td>
              <td className="table__cell">56-58</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">3-4</td>
              <td className="table__cell">98-104</td>
              <td className="table__cell">55-57</td>
              <td className="table__cell">53-54</td>
              <td className="table__cell">58-60</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">4-5</td>
              <td className="table__cell">104-110</td>
              <td className="table__cell">57-59</td>
              <td className="table__cell">54-55</td>
              <td className="table__cell">60-62</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">5-6</td>
              <td className="table__cell">110-116</td>
              <td className="table__cell">59-61</td>
              <td className="table__cell">55-57</td>
              <td className="table__cell">62-65</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default SizesTable1to6;