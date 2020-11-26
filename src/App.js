import React from 'react'
/* import Accordion from './Components/Accordion/Accordion'
import Search from './Components/Search/Search';
 */import Dropdown from './Components/DropDown/Dropdown';
import { useState } from 'react'
const items=[
    {
        title:'What is React?',
        content:"React is a frontend js library"
    },
    {
     title:'Why React?',
     content: 'React is favourate among the Engineers '  
    },
    {
        title:'what is the feature of React?',
        content:'React helps us not only in creating a small component of a web page but also create a entire webapage.'
    }
];

const options=[
    {label:'The color Red',value:'red'},
    {label:'Shade of Blue',value:'blue'},
    {label:'The color green',value:'green'}           
]

const WidgetApp=()=>{

    const [selected,setSelected]=useState(options[0]);
    return (

        <div>
        {/* <Search /> */}
        <Dropdown   options={options} 
                    onSelectOptions={setSelected} 
                    selected={selected}/>
        </div> 
       
    )
}
export default WidgetApp;