import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Search =()=>{
    
//    const onSubmitForm=(event)=>{
//          console.log(event.target.value);
//     }
 //use of use state   
 const [term,setTerm]=useState('');
 const [result,setResult]=useState([]);
  
//  console.log(result);
 //when our component rerender and the term is changed it will execute.
 //we add code to detect the term  has changed
//  version 0.1 of useEffect in this app or this function

useEffect(()=>{
   const search= async ()=>{
         
     const {data} =await axios.get('https://en.wikipedia.org/w/api.php',{
        params:{
         action:'query',
         list:'search',
         format:'json',
         origin:'*',
         per_page:20,
         srsearch:term
        }//param
       }//optionbject
        )//get
     
        setResult(data.query.search);
   } //search
    
  
//version 0.1.1
//Searching on intial render that means when component render search() not for the  given timer so this feature is needed 
if(term && !result.length){
    search();
}  else{
    const timerId=setTimeout(()=>{
        if(term){
            search();
        }
    },4000)
      console.log(timerId);
    return ()=>{
        clearTimeout(timerId);
    }
}
   // version 0.1.0
//   const timerId=setTimeout(()=>{
//     if(term)
//      search();

// },1000)
//    return ()=>{
//        clearTimeout(timerId);
//    }




},[term]);


//  useEffect(()=>{
//      const search =async ()=>{
//         const { data }= await axios.get('https://en.wikipedia.org/w/api.php',{
//        params: {
//        action:'query',
//        list:'search',
//        format:'json',
//        origin:'*',
//        srsearch:term
//       }//paramObject 
//    }//optionObject
//      )//get

//      setResult(data.query.search);
// }//search
 
// const timerId=setTimeout(()=>{
//     if(term){
//         search();
//     }

// },5000)
  

//  },[term]);

//version 0.2 vdo no 164 useEffect cleanup function


const renderResult=result.map((result)=>{
    return ( 
            <div className='item' key={result.pageid}>
              <div className='right floated content'>
                     <a className='ui button'
                     href={`https://en.wikipedia.org?curid=${result.pageid}`}
                     >more 
                 </a>
                
                </div>
                
             
             <div className='content'>
                 <div className="header">
                        {result.title}
                 </div>
                 <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                 
             </div>
            </div>
    );
})





 return (
        <div>
            <div className='ui form'>
               <div className='field'>
                  <label> Enter Search Term</label>
                    <input type='text' className='field' onChange={e=>setTerm(e.target.value)}/>
                </div>
            </div>
            
            <div className='ui celled list'>
             {renderResult}
             </div> 
        
        </div>
 
    );
};
export default Search;