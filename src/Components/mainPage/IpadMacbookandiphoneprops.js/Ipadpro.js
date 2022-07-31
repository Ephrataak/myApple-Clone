import {Component} from 'react'
import Firstsecprops from './Firstsecprops';


class Ipadpro extends Component{
  render() {
    return (
      <section className="first-hightlight-wrapper">
        <div className="container black">
          <Firstsecprops
            alert="New"
            titles="iPad Pro "
            link1="Lear more"
            link2="Order"
            rightcap="iPad Pro available starting 3.25"
            leftcap="Magic Keyboard coming in May"
          />
        </div>
      </section>
    );}
  
}
export default Ipadpro;