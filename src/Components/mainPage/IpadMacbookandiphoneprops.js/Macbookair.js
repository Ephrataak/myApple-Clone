import {Component} from 'react'
import Firstsecprops from './Firstsecprops';


class Macbookair extends Component {
  render() {
    return (
      <section className="second-hightlight-wrapper">
        <div className="container black">
          <Firstsecprops
            alert="New"
            titles="MacBook Air"
            descriptions="Twice the speed. Twice the storage."
            price="From $999."
            link1="Learn more"
            link2="Buy"
          />
        </div>
      </section>
    );}
  
}
export default Macbookair;