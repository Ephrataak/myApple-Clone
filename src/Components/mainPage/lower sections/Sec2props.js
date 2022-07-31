import React, { Component } from 'react'

class Sec2props extends Component {
  render() {
    return (
      <div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
						<div class="top-logo-wrapper">
							<div class="logo-wrapper">
								<img src={this.props.logo}/>
							</div>
						</div>

						<div class="tvshow-logo-wraper">
							<img src={this.props.banker}/>
						</div>

						<div class="watch-more-wrapper">
							<a href="#">{this.props.watchnow}</a>
						</div>
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
						<div class="top-logo-wrapper">
							<div class="logo-wrapper">
								<img src={this.props.watch}/>
							</div>
						</div>
						<div class="description-wraper">
							{this.props.rightdescription}
						</div>
						<div class="links-wrapper">
							<ul>
                                <li><a href="">{this.props.rightlink1 }</a></li>
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
export default Sec2props