import React, { Component } from 'react'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Show/Hide</button>
        {this.state.on && (
          <table className="table">
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
          </table>
        )}
      </div>
    )
  }
}
