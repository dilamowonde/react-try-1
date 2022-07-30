import React from 'react';

const Usetoggle = (intial=false) => {
   const [state, setstate] = React.useState(intial)
   const toggle=()=>setstate(!state)
   return [state,toggle]
}

export default Usetoggle;
