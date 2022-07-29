import { useEffect, useReducer } from 'react'

function useLocalStorageReducer(item,intial, reducer){
   const [state, dispach] = useReducer(reducer, intial, ()=>{
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
   useEffect(() => {
      window.localStorage.setItem(item,JSON.stringify(state))
   }, [state,item]);
   return [state,dispach];
}

export default useLocalStorageReducer;
