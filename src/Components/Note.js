import React, { Component } from 'react';
import TableBody from './TableBody.js';
import TableHead from './TableHead.js';
import '../Style/Table.css';

class Note extends Component {
  render() {
    return (
      <React.Fragment>
        <table>  
            <TableHead />
            <TableBody />
        </table>
      </React.Fragment>
    );
  }
}

export default Note;