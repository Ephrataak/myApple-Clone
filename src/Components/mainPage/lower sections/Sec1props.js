import React, { Component } from 'react'

class Sec1props extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="left-side-wrapper col-sm-12 col-md-6">
            <div class="left-side-container">
              <div class="title-wraper">{this.props.lefttitle}</div>
              <div class="description-wraper">
                {this.props.leftdescription}
              </div>
              <div class="price-wrapper">
                {this.props.leftprice}<sup>1</sup>
              </div>

              <div class="links-wrapper">
                <ul>
                  <li>
                    <a href="">{this.props.leftlink1}</a>
                  </li>
                  <li>
                    <a href="">{this.props.leftlink2}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right-side-wrapper col-sm-12 col-md-6">
            <div class="right-side-container">
              <div class="title-wraper white">
                {this.props.righttitle}
              </div>

              <div class="links-wrapper white">
                <ul>
                  <li>
                    <a href="">{this.props.rightlink}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sec1props;