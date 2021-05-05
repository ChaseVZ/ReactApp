import React from 'react'

<link rel="stylesheet" href="index.css"></link>;

function TableHeader()  {
    return (
      <thead className="header">

        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>ID</th>
          <th>Remove</th>
        </tr>
      </thead>
    );
  }

  function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index} className={"data"}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row._id}</td>
          <td>
            <button className="btn" onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      );
     }
    );
    return (
        <tbody>
          {rows}
         </tbody>
     );
  }
  
  function Table (props) {
    return (
      <table className="styleTable">
        <TableHeader />
        <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
      </table>
    );
  }

export default Table;