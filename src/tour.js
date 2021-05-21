import React, { useState, useEffect } from 'react';
import {data} from './data'
const Tour = () => {    
    const [isMore, setIsMore]=useState(false);
    const[tours,setTours]=useState(data);   
    return(<>           
        <div className='tourdiv'>                            
            <Article/> 
        </div>               
    </>)
        
    
}

const Article=()=>{
    const[tours,setTours]=useState(data);  
    const [isLoading, setIsLoading]=useState(true); 
    const [show,setShow]=useState(false);
    useEffect(()=>{
        setIsLoading(true);
        tours.map((tour=>{   
                    const{id,name,image,text,price}=tour;  
                    fetch(image).then((resp)=>{
                        if(resp.status>=200&&resp.status<=299){                         
                            setIsLoading(false);}                
            })            
        }))},[])              
            
    
     if(isLoading){
         return(
       <div>
      <h2>Loading...</h2>
      </div>);         
     }   
    
    return (
        tours.map((tour=>{   
                const{id,name,image,text,price}=tour;
        return(     
        < >
            <article key={id} className='tourart'>  
                <img className='img' src={image} alt="" />                  
                <h3 className='turlar'>{name}<h5 className='price'>${price}</h5></h3>                                       
                {show &&  <section>
                 <p key={id} className='info'>{text}</p><button className='read'
                 onClick={()=>setShow(!show)}>Read more</button>                          
                
                </section> } 
                {!show&& <section>
                    <p key={id} >{text}<button className='read'
                    onClick={()=>setShow(!show)}>Show Less</button>   </p>                
                </section> }   
                <button >delete</button>               
            </article>
        </>);
        }))  
        
    )
}

export default Tour
