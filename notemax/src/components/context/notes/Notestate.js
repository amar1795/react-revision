import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState=(props)=>{

   const  s1={

    name:"amar",
    hobby:"programmer" 
    }

    const [state,setstate]=useState(s1);
    const update=()=>{
        setTimeout(() => {

            setstate({
                name:"kylie",
                hobby:"front end developer"
            })
            
        }, 1000);
    }

    return(
        //we can also export functions as context like update function
        <Notecontext.Provider value={{state:state,update:update}}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState;