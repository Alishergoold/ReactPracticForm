import React, { Component } from 'react';
import TBody from '../Style/TableBody.css';


class TableBody extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>Pepsi</td>
          <td>5</td>
          <td>10000</td>
          <td>50000</td>
        </tr>
      </tbody>
    );
  }
}

export default TableBody;