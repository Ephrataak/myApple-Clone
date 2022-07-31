import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Headerlinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link to={this.props.url}>{this.props.name}</Link>
        {/* <a className="nav-link js-scroll-trigger" href={this.props.url}>
          {this.props.name}
        </a> */}
        </li>
      
    );
  }
}
export default Headerlinks;