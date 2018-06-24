import React, { Component } from 'react';
import Message from './Message'


class MessageList extends Component {

  render() {
    return (
      <div className="row">
      {this.props.mess.map((passdown) => {
        return <Message
        key={passdown.id}
        everything={passdown}
        />
      })}
      </div>
    );
  }

}

export default MessageList;
