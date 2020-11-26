import React from 'react';

const DropDown =({options,selected,onSelectOptions})=>{
    //console.log(selecedtOptions.value);
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
                <div className='ui selection dropdown visible active'>
                    <div className='text'>{selected.label}</div>
                    <i className='dropdown icon'></i>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default DropDown; 

//next hiding showing option list 173