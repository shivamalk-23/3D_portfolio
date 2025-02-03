
import {   ScrollControls} from "@react-three/drei"


import { Model } from "./Waterfall"
import Page from "./Page"


const Experience = () => {
    return (
    
           <>
           <ScrollControls pages={4.3} damping={0.25}>
            <Page/>
            <Model/>
           </ScrollControls>
           
           </>
            
        
    )
}

export default Experience
