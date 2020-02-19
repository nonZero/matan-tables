import React from 'react';

export const Table = (props) => {
  const {cols} = props;

  const [newRow, setNewRow] = React.useState(
      () => Object.fromEntries(cols.map(x => [x, ''])));

  const onInputChange = (c, v) => {
    setNewRow({...newRow, [c]:v});
  };

  return <>
    <table>
      <thead>
      <tr>
        {cols.map(c => <th key={c}>{c}</th>)}
      </tr>
      </thead>
      <tbody>
      {/*<tr>*/}
      {/*  {cols.map(c => <td key={c}>{4}</td>)}*/}
      {/*</tr>*/}

      </tbody>
      <tfoot>
      <tr>
        {cols.map(c => <th key={c}>
          <input type="text"
                 value={newRow[c]}
                 onChange={e => onInputChange(c, e.target.value)}
          />
        </th>)}
      </tr>

      </tfoot>
    </table>
    <button onClick={e=>console.log(newRow)}>Add</button>
    {/*<ul>*/}
    {/*  {Object.entries(newRow).map(([k, v]) => <li>{k}: {v}</li>)}*/}
    {/*</ul>*/}
  </>;
};
