import React from 'react'
import {Component} from 'react'
import tvlogo from "../../../commonResource/images/icons/apple-tv-logo.png";
import banker from "../../../commonResource/images/home/banker.png";
import watch from "../../../commonResource/images/icons/watch-series5-logo.png";

import Sec2props from './Sec2props';

class Section2 extends Component {
  render() {
     return (
       <section className="fifth-heghlight-wrapper">
         <Sec2props
           logo={tvlogo}
           banker={banker}
           watchnow="Watch now on the Apple TV App"
           watch={watch}
           rightdescription=" With the Always-On Retina display.
                   
                   You’ve never seen a watch like this."
           rightlink1="Learn more"
           rightlink2="Buy"
         />
         {/* <Lowersecprops
           
         /> */}
       </section>
     );
   }
     
}
export default Section2;