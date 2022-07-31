import {Component} from 'react'

import Sec1props from './Sec1props';

class Section1 extends Component {
  render() {
     return (
       <section className="fourth-heghlight-wrapper">
         <Sec1props
           lefttitle="iPhone 11"
           leftdescription=" Just the right amount of everything."
           leftprice="From $18.70/mo. or $499 with trade‑in."
           leftlink1="Learn more"
           leftlink2="Apply now"
           righttitle="Get the latest CDC response to COVID-19."
           rightlink="Watch the PSA"
         />
         
       </section>
     );
   }
  
}
export default Section1;