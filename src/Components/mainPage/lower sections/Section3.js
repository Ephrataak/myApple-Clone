import React from 'react'
import {Component} from "react"
import arcade from "../../../commonResource/images/icons/arcade.png";

import Sec3props from './Sec3props';

class Section3 extends Component {
  render() {
     return (
       <section className="sixth-heghlight-wrapper black">
         <Sec3props
           leftlogo={arcade}
           leftdescription="Agent 8 is a small hero on a big mission."
           leftlink1="Play now"
           leftlink2="Learn about Apple Arcade"
           righttitle="Apple Card Monthly Installments"
           rightdescription="Pay for your next iPhone over time, interest-free with Apple
                   Card."
           rightlink1="Learn more"
           rightlink2="Apply now"
         />
         
       </section>
     );
   }
  
}
export default Section3;