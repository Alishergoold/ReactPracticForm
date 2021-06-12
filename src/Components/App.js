import React, { Component } from "react";

import Notes from "./Note";
import { withoutIndex } from "../utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        "**Покупки**: чай, кофе, _молоко_",
        "**Дела**: закончить перевод, сделать презентацию",
        "_Ненужная заметка, удалить_",
        "**Нужная заметка, не удалять!**"
      ]
    };
  }

  addNote = text => {
    this.setState(({ notes }) => ({
      notes: [text].concat(notes)
    }));
  };

  removeNote = index => {
    this.setState(({ notes }) => ({
      notes: withoutIndex(notes, index)
    }));
  };

  render() {
    const { notes } = this.state;
    return (
      <Notes
        notes={notes}
        addNote={this.addNote}
        removeNote={this.removeNote}
      />
    );
  }
}

export default App;
