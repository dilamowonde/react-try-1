import { useState } from "react";

export default function useForm(initial='') {
   const [Input, setInput] = useState(initial);
   const changehandler = (e)=>{
      setInput(e.target.value)
   }
   const resethandler = (e)=>{
      setInput('')
   }
   const setValue = (input)=>{
      setInput(input)
   }
   return [Input, changehandler, resethandler, setValue];
}
