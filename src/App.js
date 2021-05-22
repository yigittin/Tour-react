 
import React, { Component } from "react";
import TourList from './Component/tourlist'

import './index.css';

class App extends Component {
  render() {
    return (      
      <main>  
        <h1 className='header'>Our Tours</h1> 
        <TourList />
      </main>
    );
  }
}

export default App;






