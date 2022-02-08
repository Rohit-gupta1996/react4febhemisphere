
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// // import Hemisphere from './hemisphere1';
// import Hemisphere from './hemisphere2';

// class App extends Component{
  
//     state = {latitude:null,errorMessage:''}
      
  
//   componentDidMount(){
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=>{
//       this.setState({latitude:position.coords.latitude})
//     },
//       (error) =>
//       {
//         console.log({errorMessage:error.message})
//       }
//       );
//     }render(){ 
// if(this.state.errorMessage && !this.state.latitude)
// {
// return <div>{this.state.errorMessage}</div>
// }
//   if(!this.state.errorMessage && this.state.latitude)
//   {
//     return <div>{this.state.errorMessage}</div>
//   }
//   else{
//     return <div>loding..</div>
//   }
// } 
// }


// ReactDOM.render(
//     <App />,
  
//   document.getElementById('root')
// );

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