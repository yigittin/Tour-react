import React, { useState, useEffect } from 'react';
import {data} from './data'
const url=data.image;
const Tour = () => {    
    const [isMore, setIsMore]=useState(false);
    const[tours,setTours]=useState(data);
    useEffect(()=>{
       
  },[]);
    return(<>
           {tours.map((tour=>{   
                const{id,name,image,text,price}=tour;  
                    return(   
                        <div className='tourdiv'>                            
                            <article key={id} className='tourart'>  
                                <img className='img' src={image} alt="" />                  
                                <h3 className='turlar'>{name}<h5 className='price'>${price}</h5></h3>                         
                                <p>{text}<button className='read'>Read more</button></p> 
                            <button >delete</button>                     
                        </article>
                        </div>)                 
             }))}
             
        </>)
        
    
}

export default Tour
