import React,{useState,useEffect} from 'react';

const DropDown =({options,selected,onSelectOptions})=>{
    //console.log(selecedtOptions.value);


const [open,setOpen]=useState(false);
    // useEffect(()=>{
       
    //     console.log(open)
    //     document.body.addEventListener('click' ,()=>{
    //            setOpen(false)
    //     });
       
    // },[]);

    const renderedOptions=options.map((option)=>{
    
    if (option.value===selected.value){
        return null;
    }
     return(
      <div className='item'
       key={option.value}
       onClick={()=>{onSelectOptions(option)}}>
          {option.label}
         </div>
       );
   });
    return (
        <div className='ui form'>
            <div className="field">
                <label className='label'>Select a color</label>
                <div  onClick={()=>{setOpen(!open)}}
                className={`ui selection dropdown ${open?'visible active' :''}`}
               
                >
                    <div className='text'>{selected.label}</div>
                    <i className='dropdown icon'></i>
                    {/* <div className={`menu ${open?'visible transition':''}`}> */}
                    <div className={`menu visible transition`}>
                        
                        {renderedOptions}
                    </div>
                </div>
            </div>
       Currently using react version {React.version};
        </div>

    );
}
export default DropDown;





//next hiding showing option list 173