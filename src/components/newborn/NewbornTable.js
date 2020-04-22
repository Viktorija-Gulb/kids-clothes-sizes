import React from 'react';

function NewbornTable(props){
  return(
    <table className="table">
      <thead className="table__head"> 
        <tr className="table__row table__row--head-row">
          <th className="table__cell">DYDIS</th>
          <th className="table__cell">ŪGIS cm</th>
          <th className="table__cell">SVORIS kg</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {
          props.data.map(row => (
            <tr className="table__row">
              <td className="table__cell">{row.size}</td>
              <td className="table__cell">{row.height}</td>
              <td className="table__cell">{row.weight}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default NewbornTable;