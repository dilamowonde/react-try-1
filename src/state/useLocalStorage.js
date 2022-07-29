import React from 'react';
import { useState } from 'react';

// const UseLocalStorage = (=[]) => {
function UseLocalStorage(item,intial){
   const [state, setState] = useState(()=>{
      let value;
      try{
         value = JSON.parse(
            window.localStorage.getItem(item)|| String(intial)
         )
      }catch(e){
         value = intial
      }
      return value
   })
   React.useEffect(() => {
      window.localStorage.setItem(item,JSON.stringify(state))
   }, [state]);
   return [state,setState];
}

export default UseLocalStorage;
