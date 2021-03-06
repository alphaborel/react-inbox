import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar';
import MessageList from './components/MessageList';


class App extends Component {

  state = {
      messages: [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
  ]
} // state data


toggleRead = (selectedMessage) => {
  //filter out messages not selected
  let otherMessages = this.state.messages.filter(message => selectedMessage.id !== message.id)
  let changedMessage = {
    id: selectedMessage.id,
    subject: selectedMessage.subject,
    read: !selectedMessage.read,
    starred: selectedMessage.starred,
    labels: selectedMessage.labels
  }
  this.setState({ messages: otherMessages.concat(changedMessage).sort((a, b) => a.id - b.id)})
}

toggleStarred = (selectedMessage) => {
  //filter out messages not selected
  let otherMessages = this.state.messages.filter(message => selectedMessage.id !== message.id)
  let changedMessage = {
    id: selectedMessage.id,
    subject: selectedMessage.subject,
    read: selectedMessage.read,
    starred: !selectedMessage.starred,
    labels: selectedMessage.labels
  }
  this.setState({ messages: otherMessages.concat(changedMessage).sort((a, b) => a.id - b.id)})
}

toggleSelected = (selectedMessage) => {
  //filter out messages not selected
  let otherMessages = this.state.messages.filter(message => selectedMessage.id !== message.id)
  let changedMessage = {
    id: selectedMessage.id,
    subject: selectedMessage.subject,
    read: selectedMessage.read,
    starred: selectedMessage.starred,
    labels: selectedMessage.labels,
    selected: !selectedMessage.selected || false
  }
  this.setState({ messages: otherMessages.concat(changedMessage).sort((a, b) => a.id - b.id)})
}
selectButtonFunc = (type) => {
  this.setState({
    messages: !this.state.messages.some(msg => msg.selected)
  })
}
toolbarCopyCurrentState = () => {
  return this.state.messages.map((message) => {
    return {...message};
  })
}

selectButtonFunc = (type) => {
  let messagesStateCopy = this.toolbarCopyCurrentState();

  if(type.includes('check')) {
    messagesStateCopy = this.state.messages.map(message => {
      message.selected = false;
      return message;
    })
  } else {
    messagesStateCopy = this.state.messages.map(message => {
      message.selected = true;
      return message;
  })
  this.setState({ messages: messagesStateCopy });
}}

deleteMessages = () => {
  let newState = this.state.messages.filter(msg => !msg.selected);
  this.setState( {messages: newState} )
}

  render() {
    let numOfSelectedMsgs = this.state.messages.filter(msg => msg.selected).length
    return (
      <div className="App">

        <Toolbar
        //event listeners
        messages={this.state.messages}
        numOfSelectedMsgs={numOfSelectedMsgs}
        selectButtonFunc={this.selectButtonFunc}
        deleteMessages={this.deleteMessages}
        />

        <MessageList
        message={this.state.messages}
        //event listeners
        toggleRead={this.toggleRead}
        toggleStarred={this.toggleStarred}
        toggleSelected={this.toggleSelected}
        />
      </div>
    );
  } //render method
} // App class

export default App;
