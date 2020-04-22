import React from 'react';

function NewbornTable(props){
  return(
    <table>
      <thead>
        <tr>
          <th className="table__cell">DYDIS</th>
          <th className="table__cell">ŪGIS cm</th>
          <th className="table__cell">SVORIS kg</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map(row => (
            <tr>
              <td>{row.size}</td>
              <td>{row.height}</td>
              <td>{row.weight}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default NewbornTable;