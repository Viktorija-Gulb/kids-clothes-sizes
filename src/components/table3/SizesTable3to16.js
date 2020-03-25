import React, { Component } from "react";
import './sizesTable3to16.scss'

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
        <table className={this.state.on ? 'table table--open table--size3' : 'table table--size3'}>
          <thead className="table__head">
            <tr className="table__row table__row--head-row">
              <th className="table__cell">DYDIS</th>
              <th className="table__cell">ŪGIS cm</th>
              <th className="table__cell">KRŪTINĖS APIMTIS cm</th>
              <th className="table__cell">JUOSMUO cm</th>
              <th className="table__cell">KLUBAI cm</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell">3</td>
              <td className="table__cell">98</td>
              <td className="table__cell">55</td>
              <td className="table__cell">53</td>
              <td className="table__cell">58</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">4</td>
              <td className="table__cell">104</td>
              <td className="table__cell">57</td>
              <td className="table__cell">54</td>
              <td className="table__cell">60</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">5</td>
              <td className="table__cell">110</td>
              <td className="table__cell">59</td>
              <td className="table__cell">55</td>
              <td className="table__cell">62</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">6</td>
              <td className="table__cell">116</td>
              <td className="table__cell">61</td>
              <td className="table__cell">57</td>
              <td className="table__cell">65</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">7</td>
              <td className="table__cell">122</td>
              <td className="table__cell">63</td>
              <td className="table__cell">58</td>
              <td className="table__cell">68</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">8</td>
              <td className="table__cell">126</td>
              <td className="table__cell">66</td>
              <td className="table__cell">59</td>
              <td className="table__cell">71</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">9</td>
              <td className="table__cell">134</td>
              <td className="table__cell">69</td>
              <td className="table__cell">61</td>
              <td className="table__cell">74</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">10</td>
              <td className="table__cell">140</td>
              <td className="table__cell">72</td>
              <td className="table__cell">62</td>
              <td className="table__cell">78</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">11</td>
              <td className="table__cell">146</td>
              <td className="table__cell">75</td>
              <td className="table__cell">63</td>
              <td className="table__cell">81</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">12</td>
              <td className="table__cell">152</td>
              <td className="table__cell">79</td>
              <td className="table__cell">64</td>
              <td className="table__cell">84</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">13</td>
              <td className="table__cell">158</td>
              <td className="table__cell">83</td>
              <td className="table__cell">65</td>
              <td className="table__cell">88</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">14</td>
              <td className="table__cell">164</td>
              <td className="table__cell">87</td>
              <td className="table__cell">67</td>
              <td className="table__cell">92</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">15</td>
              <td className="table__cell">166</td>
              <td className="table__cell">89</td>
              <td className="table__cell">69</td>
              <td className="table__cell">94</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell">16</td>
              <td className="table__cell">178</td>
              <td className="table__cell">91</td>
              <td className="table__cell">71</td>
              <td className="table__cell">96</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default SizesTable1to6;