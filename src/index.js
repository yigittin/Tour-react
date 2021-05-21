import React from 'react';
import ReactDom from 'react-dom';
import Tour from './tour'

import './index.css';


function TourList(){
  return(
    <section>
      <div className='header'>
      <h1 > Our Tours</h1>    
      </div>
      <Tour/>
    </section>
    
  );
}






ReactDom.render(<TourList/>,document.getElementById('root'));