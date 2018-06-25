import React, { Component } from 'react';
import Message from './Message'


class MessageList extends Component {

  render() {
    return (
      <div className="row">
      {this.props.message.map((message) => {
        return <Message
        key={message.id}
        message={message}
        //the event listeners
        toggleRead={this.props.toggleRead}
        toggleStarred={this.props.toggleStarred}
        toggleSelected={this.props.toggleSelected}
        />
      })}
      </div>
    );
  }

}

export default MessageList;
