import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import "./Notes.css";

class Note extends Component {
  render() {
    const { text, onDelete } = this.props;

    return (
      <div className="Notes-Note">
        <span className="Notes-Note-Delete" onClick={onDelete}>
          &times;
        </span>
        <ReactMarkdown source={text} />
      </div>
    );
  }
}

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.textareaRef = React.createRef();
  }

  onReset = () => {
    this.setState({ text: "" });
    this.textareaRef.current.focus();
  };

  onSave = () => {
    const { text } = this.state;
    if (!text) {
      return;
    }
    this.props.onSave(text);
    this.onReset();
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="Notes-Create Notes-Note">
        <textarea
          className="Notes-Create-Input"
          value={text}
          onChange={this.onChange}
          ref={this.textareaRef}
        />

        <div className="Notes-Create-Buttons">
          <button className="Notes-Create-Button" onClick={this.onSave}>
            Сохранить
          </button>
          <button
            className="Notes-Create-Button Notes-Create-Button_reset"
            onClick={this.onReset}
          >
            Сброс
          </button>
        </div>
      </div>
    );
  }
}

class Notes extends Component {
  render() {
    const { notes, addNote, removeNote } = this.props;

    return (
      <div className="Notes">
        <CreateNote onSave={addNote} />
        <hr />
        {notes.map((text, i) => (
          <Note text={text} key={i} onDelete={() => removeNote(i)} />
        ))}
      </div>
    );
  }
}

export default Notes;
