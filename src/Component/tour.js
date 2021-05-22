import React, { Component,useState } from "react";
import './tour.css';
import '../index.css'

export default class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  
  render() {      
      
    const { id, name, image,price , text } = this.props.tour;
    const { removeTour } = this.props;     
    return (
      <article className="tourart">
        <div className="img-container">
          <img className='img' src={image} alt="" />
         
        </div>
        <div className="tour-info">          
          <h4>{name}<h5 className='price'>${price}</h5></h4>
          <button className='read' onClick={this.handleInfo}>
            Read More{" "}            
          </button>
          {this.state.showInfo && <div><p>{text}</p><button className='read' onClick={this.handleInfo}>
            Show Less{" "}           
          </button></div>}
          
        </div>
        <div className='btnWrap'>
        <button
            className="btn"
            onClick={() => {
              removeTour(id);
            }}> 
            Not Interested           
          </button>
        </div>
        
      </article>
    );
  }
}