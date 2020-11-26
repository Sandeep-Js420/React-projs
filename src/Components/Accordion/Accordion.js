import React, {Fragment,useState} from 'react';
const Accordion=({items})=>{

 const [activeIndex,setIndex]=useState(null);
 //eventMethod
 const onTitleClick=index=>{
    setIndex(index); 
  }

    const itemList=items.map((item,index)=>{        
     
     const active=(index===activeIndex)?'active':'';
        return <Fragment 
                key={item.title}>
                <div className={`title ${active}`}
                 onClick={()=>{onTitleClick(index)}}>

                <i className="dropdown icon"></i>
                {item.title} 
                </div>
                <div className={`content ${active}`}>
                    <p> {item.content}</p> 
                </div>
              </Fragment>
      
    })
    return <div className='ui styled accordion'>
       {itemList}
       
    </div>
}
export default Accordion;