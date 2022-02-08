import React, {Component} from "react";
import  ReactDOM  from "react-dom";
import Hemisphere from "./hemisphere2";
import './index.css'
class Locator extends Component
{
  state={latitude:34,error:''}
     componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        (position)=>
        {
          this.setState({latitude:position.coords.latitude})
        },
          (error)=>this.setState({error:error.message})
          );
     }
  render(){    
        if(this.state.error===''){
          return(
            <div className ="hemisphre">
              <Hemisphere latitude={this.state.latitude}></Hemisphere>
            </div>
          )
        }else{
          return(
            <div>
              <label>Error: {this.state.error}</label>
            </div>
          )
        }     
  }
}
ReactDOM.render(
  <Locator></Locator>,
  document.querySelector("#root")
)