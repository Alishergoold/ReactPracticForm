import React, { Component } from 'react';
import THead from '../Style/TableHead.css';

class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <td>Nomi</td>
          <td>Soni</td>
          <td>Narxi</td>
          <td>Jami</td>
        </tr>
      </thead>
    );
  }
}

export default TableHead;