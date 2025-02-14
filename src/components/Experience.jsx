
import {   ScrollControls} from "@react-three/drei"


import { Waterfall } from "./Waterfall"

import { useRef, useState,} from "react"
import Html from "./Html"


const Experience = () => {

    const ref=useRef(null)


    function HandleDisplay(){
      ref.current.display()
      console.log('clicked exper')
 
    }
    return (
    
           <>
           

           <ScrollControls pages={4.3} damping={0.25}>
            <Html ref={ref} />
            
            <Waterfall HandleDisplay={HandleDisplay}   />
           </ScrollControls>
           
           
           </>
            
        
    )
}

export default Experience
