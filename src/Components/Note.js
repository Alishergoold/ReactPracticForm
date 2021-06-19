import React, { Component } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

class Note extends Component {
  render() {
    return (
      <React.Fragment>
        <table>
          <tHead>
            <TableHead />
          </tHead>
          <tBody>
            <TableBody />
          </tBody>
        </table>
      </React.Fragment>
    );
  }
}

export default Note;