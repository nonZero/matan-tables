import React from 'react';
import {Table} from './Table';

export const App = (props) => {

  const table1 = [
    'date',
    'title',
    'amount',
    'category',
  ];

  const table2 = [
    'date',
    'source',
    'amount',
    'category',
  ];

  return <div>
    <Table cols={table1}/>
    <Table cols={table2}/>
  </div>;
};
