import React from 'react';

export const Table = (props) => {
  const {cols, data} = props;

  const [data2, setData2] = React.useState(() => {
    fetch('http://127.0.0.1:3000/expenses/').
        then(x => x.json()).
        then(resp => setData2(resp));
  });

  const [newRow, setNewRow] = React.useState(
      () => Object.fromEntries(cols.map(x => [x, ''])));

  const onInputChange = (c, v) => {
    setNewRow({...newRow, [c]: v});
  };

  const addRow = () => {
    fetch('http://127.0.0.1:3000/expenses/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRow),
    });
    setData2([...data2, newRow]);
  };

  return <>
    <table>
      <thead>
      <tr>
        {cols.map(c => <th key={c}>{c}</th>)}
      </tr>
      </thead>
      <tbody>

      {data2?.length && data2.map((d, i) => <tr key={i}>
        {cols.map(c => <td key={c}>{d[c]}</td>)}
      </tr>)}


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
    <button onClick={addRow}>Add</button>
    {/*<ul>*/}
    {/*  {Object.entries(newRow).map(([k, v]) => <li>{k}: {v}</li>)}*/}
    {/*</ul>*/}
  </>;
};
