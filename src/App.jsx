/* eslint-disable react/no-unknown-property */

import { OrbitControls, } from "@react-three/drei"


import Experience from "./components/Experience"
import { OrthographicCamera } from '@react-three/drei'
import { useEffect, useRef} from "react"
import { useFrame } from "@react-three/fiber"
const App = () => {
  const mouse = useRef({ x: 0, y: 0 });
 const cameraRef=useRef()

 useEffect(() => {
  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;  // Normalize to [-1, 1]
    const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to [-1, 1]
    mouse.current = { x, y };
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

// Use useFrame to update the camera position on each frame
useFrame(() => {
  if (cameraRef.current) {
    // Adjust the camera position based on mouse x and y
    cameraRef.current.position.x = mouse.current.x * 10;  // Modify multiplier for sensitivity
    cameraRef.current.position.y = mouse.current.y * 10;  // Modify multiplier for sensitivity
    cameraRef.current.updateProjectionMatrix();  // Update projection matrix after position change
  }
});

  return (
<>
   
      <OrthographicCamera ref={cameraRef}   zoom={12.1} rotation={[-0.92,  -0.2,  0.0316]} position={[92,80,96]} bottom={-157} makeDefault/>
    <ambientLight intensity={1.5} />
    <directionalLight position={[10, 10, 10]} intensity={1} />
<Experience/>
<OrbitControls enableZoom={false}   />
  



  </>
  )
}

export default App
