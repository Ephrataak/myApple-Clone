import React, { Component } from 'react'

class Firstsecprops extends Component {
  render() {
    return (
      <>
        <div className="new-alert">{this.props.alert}</div>
        <div className="title-wraper bold ">{this.props.titles}</div>
        <div className="description-wrapper ">
          {this.props.descriptions}
        </div>
        <div className="price-wrapper grey">{this.props.price}</div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">{this.props.link1}</a>
            </li>
            <li>
              <a href="">{this.props.link2}</a>
            </li>
          </ul>
        </div>
        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            {this.props.rightcap}
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            {this.props.leftcap}
          </div>
        </div>
      </>
    );
  }
}
export default Firstsecprops;