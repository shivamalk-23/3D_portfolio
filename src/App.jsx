/* eslint-disable react/no-unknown-property */

import {  PerspectiveCamera, } from "@react-three/drei"
import { useGesture } from "@use-gesture/react"
import Experience from "./components/Experience"

import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef} from "react"
import { useFrame } from "@react-three/fiber"

const App = () => {
  const mouse = useRef({ x: 0, y: 0 });
 const cameraRef=useRef()
 const containerRef=useRef()
 useGesture(
  {
    onWheel: ({ offset }) => {
      scroll.offset = offset[1] / window.innerHeight;
    },
    onDrag: ({ offset }) => {
      scroll.offset = offset[1] / window.innerHeight;
    },
  },
  { target: containerRef, eventOptions: { passive: false } }
);
 useEffect(() => {
 const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;  
    const y = -(event.clientY / window.innerHeight) * 2 + 1; 
    mouse.current = { x, y };
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);


useFrame(() => {

  if (cameraRef.current.position) {
   
    cameraRef.current.position.x = mouse.current.x * 10;  // Modify multiplier for sensitivity
    cameraRef.current.position.y = mouse.current.y * 7.3;  // Modify multiplier for sensitivity
    cameraRef.current.updateProjectionMatrix();  
  }

});


  return (
<>
<PerspectiveCamera  fov={90} near={0.01} far ={1000} ref={cameraRef}  zoom={5} rotation={[ 0.08259274500642709, -0.13101089634552393, 0.90813802002649524]} position={[ -4.6484375, -9.884892086330934,100.86298026713703]} makeDefault/>
    <ambientLight intensity={1.5} />
    <directionalLight position={[10, 10, 10]} intensity={2} />
<Experience cameraRef={cameraRef} />
<OrbitControls enablePan={false} enableRotate={false} enableZoom={false}  />

  


</>

  )
}

export default App
