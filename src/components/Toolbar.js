import React, { Component } from 'react';

class Toolbar extends Component {

  addLabel = () => {
    //get the value from the dropdown list
    let label = document.querySelector('#addLabel').value
    //pass that value into our event function
    this.props.addLabel(label)
  }

  render() {
    return (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">2</span>
        unread messages
      </p>

      <button className="btn btn-default">
        <i className="fa fa-square-o"></i>
      </button>

      <button className="btn btn-default">
        Mark As Read
      </button>

      <button className="btn btn-default">
        Mark As Unread
      </button>

      <select className="form-control label-select" onChange={this.addLabel} id="addLabel">
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select className="form-control label-select">
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

    <button className="btn btn-default">
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>
    );
  }

}

export default Toolbar;
