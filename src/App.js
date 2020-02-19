import React from 'react';
import {Table} from './Table';

export const App = (props) => {

  const table1 = [
    'date',
    'title',
    'amount',
    'category',
  ];
  const data1 = [
    {date: '1/1/1', title: 'pizza', amount: '78', category: 'food'},
    {date: '1/3/1', title: 'burger', amount: '12', category: 'food'},
    {date: '1/2/1', amount: '222', title: 'garage', category: 'car'},
  ];

  // const table2 = [
  //   'date',
  //   'source',
  //   'amount',
  //   'category',
  // ];

  return <div>
    <Table cols={table1} data={data1}/>
    {/*<Table cols={table2}/>*/}
  </div>;
};
