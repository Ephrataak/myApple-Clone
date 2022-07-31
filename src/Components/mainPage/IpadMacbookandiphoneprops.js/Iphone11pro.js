import {Component} from 'react'
import Firstsecprops from './Firstsecprops';


class Iphone11pro extends Component {
  render() {
    return (
      <section className="third-hightlight-wrapper ">
        <div className="container white">
          <Firstsecprops 
            titles="iPhone 11 Pro"
            descriptions="Pro cameras. Pro display. Pro performance."
            price="From $24.95/mo. or $599 with trade‑in."
            link1="Lear more"
            link2="Buy"
          />
        </div>
      </section>
    );}
  
}
export default Iphone11pro;