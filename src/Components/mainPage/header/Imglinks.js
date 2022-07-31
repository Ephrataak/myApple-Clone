import React, { Component } from 'react'

class Imglinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.link}>
          <img src={this.props.img} alt="" />
        </a>
      </li>
    );
  }
}
export default Imglinks;