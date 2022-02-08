
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {latitude:25 ,longitude:34,errorMessage:''}
      
  }
  render(){
  window.navigator.geolocation.getCurrentPosition(
    (position)=>{
      this.setState({latitude:position.coords.latitude})
      this.setState.latitude=position.coords.latitude
      this.setState({longitude:position.coords.longitude})
      this.setState.longitude=position.coords.longitude
    },
      (error) =>
        console.log({errorMessage:error.message})
      );
      
return(
  <div>
  <div>
    Latitude:
    {this.state.latitude}
  </div>
  <div>
    Longitude:
    {this.state.longitude}
  </div>

  </div>
  
    
   
)
} 
}

ReactDOM.render(
    <App />,
  
  document.getElementById('root')
);

