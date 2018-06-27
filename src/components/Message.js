import React from 'react';


const Message = ({ message, toggleRead, toggleStarred, toggleSelected }) => {
  let labelList = message.labels.map(label => <span slass="label label-warning">{label}</span>)
    return (
      <div className={`row message ${message.read ? 'read' : 'unread'} ${message.selected ? 'selected' : ''}`} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={message.selected ? "checked" : null} onChange={() => toggleSelected(message)}/>
            </div>
            <div className="col-xs-2">
              <i className={message.starred ? "star fa fa-star" : "star fa fa-star-o"} onClick={() => toggleStarred(message)}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11" onClick={() => toggleRead(message)}>
        {labelList}
          <span>
            {message.subject}
          </span>
        </div>
      </div>
        );
}

export default Message;
