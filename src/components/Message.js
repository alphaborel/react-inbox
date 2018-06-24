import React, { Component } from 'react';


class Message extends Component {

  render() {
    return (

      <div className="row message unread">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
            {this.props.everything.labels.map( (label) =>
              <span key={label} className="label label-warning">{label}</span>
            )}
          <a href="/">
            {this.props.everything.subject}
          </a>
        </div>
      </div>
        );
  }

}

export default Message;
