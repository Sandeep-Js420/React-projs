import React,{useState,useEffect,useRef} from 'react';

const DropDown_1=({options,selected,onSelectedOptions})=>{
const[open,setOpen] =useState(false);
const ref=useRef();

  
useEffect(()=>{
    const onBodyClick=(event)=>{
        if(ref.current.contains(event.target)){
            return ;
        }
        setOpen(false);
    }
    document.body.addEventListener('click',onBodyClick,true)
  
    // document.body.addEventListener('click',onBodyClick)
    // }, true);
    console.log(`UseEffect run once ! when content renders`)
      
    //for eventCleanup
    return ()=>{
        document.body.removeEventListener('click',onBodyClick,true);
          }
},[])


 const renderOptions=options.map((option)=>{
 if(option.value===selected.value){
     return null;
 }

    return(
         <div className='item' 
         key={option.value} 
         onClick={()=>{
            console.log(`items Clicked!`)  
            onSelectedOptions(option)
            }
             }>
             {option.label}
         </div>
     )

 })

//console.log(ref.current);


    return(
            <div>
            DropDown_1 component! 
          </div>,
          <div  ref={ref} className='ui form'>
                <div className='field'>
                   <label >select a color</label>
                    {/* <div className='ui selection dropdown visible active' > */}
                    <div onClick={()=>{
                        console.log(`Dropdwon clicked!`)
                        setOpen(!open)
                    }}
                     className={`ui selection dropdown ${open?'visible active':''}` }  >
                    <div className='text'>{selected.label}</div>
                    <i className='dropdown icon'></i>
                     <div className={`menu ${open?'visible transition':''}`}>
                           
                          {renderOptions} 
                     </div>
                </div> {/*field*/}
             </div> {/*uiform */}
          </div>   
    )
}

export  default DropDown_1;



//next hiding showing option list 173

/**
 * When i click the item then event is created by browser . here i handle that event as shown above .that Event bubbling up to parent node ...where that find the any evenhandler that event object will  execute on that handler as shown above .
 * 
 */
