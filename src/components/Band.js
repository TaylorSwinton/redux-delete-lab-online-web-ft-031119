import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{props.text}</span><button onClick={() => props.delete(props.todo.id)}>Delete</button>
      </div>
    );
  }
};

export default Band;
