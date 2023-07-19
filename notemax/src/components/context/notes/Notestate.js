import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState=(props)=>{

   const  s1={

    "name":"amar",
    "hobby":"programmer" 
    }

    const [state,setstate]=useState(s1);
    const update=()=>{
        setTimeout(() => {

            setstate({
                "name":"kylie",
                "hobby":"front end developer"
            })
            
        }, 1000);
    }

    return(
        
        <Notecontext.Provider value={{state,update}}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default NoteState;