import React, { Component } from 'react'

class Sec3props extends Component {
  render() {
    return (
      <div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
						<div class="top-logo-wrapper">
							<div class="logo-wrapper">
								<img src={this.props.leftlogo}/>
							</div>
						</div>
						<div class="description-wraper white">
							{this.props.leftdescription}
						</div>
						<div class="links-wrapper">
							<ul>
								<li><a href="">{this.props.leftlink1}</a></li>
								<li><a href="">{this.props.leftlink2}</a></li>
							</ul> 
						</div>						
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
						<div class="title-wraper">
							{this.props.righttitle} 
						</div> 
						<div class="description-wraper">
							{this.props.rightdescription}
						</div>
						<div class="links-wrapper">
							<ul>
								<li><a href="">{this.props.rightlink1}</a></li>
								<li><a href="">{this.props.rightlink2}</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
    )
  }
}
export default Sec3props