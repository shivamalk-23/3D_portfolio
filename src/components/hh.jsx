/* eslint-disable react/no-unknown-property */

import  { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import * as THREE from 'three';
import noise_tex from '../assets/whiteTexture.png';
import displ_tex from '../assets/yellowTexture.png';
import { vertexShader, fragmentShader } from '../shader/waterfall';
import { useFrame } from '@react-three/fiber';
import { GfragmentShader, GvertexShader } from '../shader/GroundWater';


export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/waterfallf.glb')
  // eslint-disable-next-line no-unused-vars
  const { actions } = useAnimations(animations, group)
  const shaderRef = useRef();
  const noiseTex= new THREE.TextureLoader().load(noise_tex);
  const displTex = new THREE.TextureLoader().load(displ_tex);



  useFrame(({ clock }) => {
    if (shaderRef.current) {

      shaderRef.current.uniforms.TIME.value = clock.elapsedTime;
    }
  });
  const GroundRef = useRef();
  useFrame(({ clock }) => {
   if (GroundRef.current) {

     GroundRef.current.uniforms.timescale.value = clock.elapsedTime;
   }
 });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={nodes.Plane005.material}
          position={[18.678, 88.908, -69.555]}
          scale={[25, 18.217, 18.217]}
        />
        <group name="water2" position={[-27.486, 2.637, 21.666]} scale={[8.799, 4.901, 4.901]} />
        
        
        <mesh
          name="Plane008"
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          
          position={[18.365, -8.213, 23.433]}
          scale={[46.299, 33.736, 33.736]}
        >

<shaderMaterial ref={GroundRef} 

vertexShader={GvertexShader}
fragmentShader={GfragmentShader}
uniforms={{
  timescale:{value:0}    }}
 />
        </mesh>




        <mesh
          name="standd"
          castShadow
          receiveShadow
          geometry={nodes.standd.geometry}
          material={nodes.standd.material}
          position={[-48.773, 37.465, -3.454]}
          scale={[24.004, 14.552, 14.552]}
        >

<shaderMaterial
          ref={shaderRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            noise_tex: { value: noiseTex },
            displ_tex: { value: displTex},
            top_light_color: { value: new THREE.Vector4(	0.4	,0.6	,1, 1) },
            top_dark_color: { value: new THREE.Vector4(0.5,0.8,1, 1.0) },
            bot_light_color: {value: new THREE.Vector4(0.2, 0.3, 0.988, 1.0)  }, 
            bot_dark_color: { value: new THREE.Vector4(0.3, 0.6, 1, 1)  },
            displ_amount: { value: 0.01 },
            bottom_foam_threshold: { value: 0.48 },
            speed: { value: 12},
            TIME: { value: 0},
          }}
          />

        </mesh>

        
        <mesh
          name="Plane013"
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={nodes.Plane013.material}
          position={[17.795, 88.191, -104.06]}
          scale={[25, 18.217, 18.217]}
        />
        <mesh
          name="Icosphere012"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere012.geometry}
          material={materials['rocks.001']}
          position={[84.015, 15.905, -13.09]}
          rotation={[-3.09, -0.466, -1.332]}
          scale={[34.314, 33.399, 34.299]}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['cement tex']}
          position={[-24.479, 82.905, -35.393]}
          rotation={[-0.012, -0.035, 0.026]}
          scale={[1.009, 1, 1.535]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['cement tex']}
          position={[36.223, 90.404, -36.93]}
          rotation={[-0.013, 0.153, 0.028]}
          scale={[1.009, 1, 1.535]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['cement tex']}
          position={[-40.478, 78.379, -26.363]}
          rotation={[-0.018, -0.032, -0.155]}
          scale={[1.009, 1, 1.535]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['cement tex']}
          position={[68.558, 66.451, -15.783]}
          rotation={[0.01, -0.089, -0.127]}
          scale={[1.009, 1, 1.535]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['cement tex']}
          position={[67.089, 59.733, -3.032]}
          rotation={[0, 0.157, 0.303]}
          scale={[1.009, 1, 1.535]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['cement tex']}
          position={[-28.028, 45.242, 1.049]}
          rotation={[3.127, -0.126, 0.02]}
          scale={[-0.995, -0.987, -1.515]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['cement tex']}
          position={[-42.794, 39.073, 38.397]}
          rotation={[-3.14, 0.111, 0.673]}
          scale={[-0.995, -0.987, -1.515]}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['cement tex']}
          position={[12.449, -8.819, 46.162]}
          rotation={[3.125, -0.014, 0.05]}
          scale={[-1.004, -2.832, -1.516]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[36.223, 90.404, -36.93]}
          rotation={[-0.013, 0.153, 0.028]}
          scale={[1.009, 1, 1.535]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['Material.010']}
          position={[36.223, 90.404, -36.93]}
          rotation={[-0.013, 0.153, 0.028]}
          scale={[1.009, 1, 1.535]}
        />
        <mesh
          name="booth"
          castShadow
          receiveShadow
          geometry={nodes.booth.geometry}
          material={materials['Material.008']}
          position={[46.503, -5.307, 44.058]}
          rotation={[0, -1.561, -Math.PI]}
          scale={[-11.68, -0.026, -14.558]}
        />
        <mesh
          name="platform"
          castShadow
          receiveShadow
          geometry={nodes.platform.geometry}
          material={materials['Material.007']}
          position={[32.649, -6.22, 44.484]}
          rotation={[0, -1.561, -Math.PI]}
          scale={[-8.596, -0.019, -15.002]}
        />
        <mesh
          name="rail"
          castShadow
          receiveShadow
          geometry={nodes.rail.geometry}
          material={materials.railing}
          rotation={[0, -1.561, -Math.PI]}
          scale={[-8.596, -0.019, -16.325]}
        />
        <mesh
          name="platform002"
          castShadow
          receiveShadow
          geometry={nodes.platform002.geometry}
          material={materials.railing}
          position={[27.846, -6.22, 47.66]}
          rotation={[0, -1.561, -Math.PI]}
          scale={[-5.396, -0.019, -10.827]}
        />
        <mesh
          name="countet"
          castShadow
          receiveShadow
          geometry={nodes.countet.geometry}
          material={materials.railing}
          position={[46.699, -5.307, 44.058]}
          rotation={[0, -1.561, -Math.PI]}
          scale={[-11.68, -0.026, -14.558]}
        />
        <mesh
          name="glass"
          castShadow
          receiveShadow
          geometry={nodes.glass.geometry}
          material={materials.glass}
          position={[46.699, -5.307, 44.058]}
          rotation={[0, -1.561, -Math.PI]}
          scale={[-11.68, -0.026, -14.558]}
        />
        <mesh
          name="Plane009"
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials.porch}
        />
        <mesh
          name="FENCE"
          castShadow
          receiveShadow
          geometry={nodes.FENCE.geometry}
          material={materials.railing}
          position={[53.693, 92.727, -43.698]}
          rotation={[0, -1.563, 0]}
          scale={[2.545, 0.748, 9.97]}
        />
        <mesh
          name="RAIL"
          castShadow
          receiveShadow
          geometry={nodes.RAIL.geometry}
          material={materials.railing}
          position={[53.676, 92.705, -46.122]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="roof002"
          castShadow
          receiveShadow
          geometry={nodes.roof002.geometry}
          material={materials.roof}
          position={[53.675, 92.727, -46.125]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="house"
          castShadow
          receiveShadow
          geometry={nodes.house.geometry}
          material={materials.base}
          position={[53.675, 92.727, -46.125]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="counter"
          castShadow
          receiveShadow
          geometry={nodes.counter.geometry}
          material={materials.railing}
          position={[53.675, 92.727, -46.125]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="counter001"
          castShadow
          receiveShadow
          geometry={nodes.counter001.geometry}
          material={materials.glass}
          position={[53.675, 92.727, -46.125]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="house001"
          castShadow
          receiveShadow
          geometry={nodes.house001.geometry}
          material={materials['Material.017']}
          position={[53.675, 92.727, -46.125]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.006']}
          position={[17.712, 107.777, -106.344]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[164.792, 94.352, 94.352]}
        />
        <mesh
          name="start_board"
          castShadow
          receiveShadow
          geometry={nodes.start_board.geometry}
          material={materials.railing}
          position={[19.312, -7.581, 44.406]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="startposter"
          castShadow
          receiveShadow
          geometry={nodes.startposter.geometry}
          material={materials.startposter}
          position={[19.312, -7.581, 44.406]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
        <mesh
          name="house002"
          castShadow
          receiveShadow
          geometry={nodes.house002.geometry}
          material={materials.base}
          position={[19.312, -7.581, 44.406]}
          rotation={[0, -1.563, 0]}
          scale={[4.985, 0.748, 9.97]}
        />
   
        <mesh
          name="Icosphere010"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010.geometry}
          material={materials.rocks}
          position={[17.074, 36.621, -21.173]}
          rotation={[-0.472, -0.298, 0.412]}
          scale={[1.754, 2.108, 1.711]}
        />
        <mesh
          name="Icosphere015"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere015.geometry}
          material={materials.rocks}
          position={[-38.796, -2.793, 13.675]}
          rotation={[-2.047, -0.505, -1.935]}
          scale={[15.686, 19.342, 15.702]}
        />
        <mesh
          name="Icosphere016"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere016.geometry}
          material={materials.rocks}
          position={[-1.681, -15.219, 9.346]}
          scale={1.197}
        />
        <mesh
          name="Icosphere021"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere021.geometry}
          material={materials.rocks}
          position={[-41.902, 42.355, -25.771]}
          rotation={[0.038, 1.217, 0.41]}
          scale={[15.289, 19.125, 15.551]}
        />
        <mesh
          name="Icosphere022"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere022.geometry}
          material={materials.rocks}
          position={[3.841, 56.474, -35.406]}
          rotation={[2.422, 0.062, 0.826]}
          scale={[-2.512, -3.095, -2.47]}
        />
        <mesh
          name="Icosphere023"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere023.geometry}
          material={materials.rocks}
          position={[-37.046, 17.578, -18.731]}
          rotation={[-2.576, 0.637, -1.713]}
          scale={[-18.181, -23.12, -18.187]}
        />
        <mesh
          name="Icosphere024"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere024.geometry}
          material={materials.rocks}
          position={[14.178, -7.929, 39.686]}
          rotation={[-2.904, 0.132, -1.695]}
          scale={[-2.348, -3.838, -2.356]}
        />
        <mesh
          name="Icosphere025"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere025.geometry}
          material={materials.rocks}
          position={[65.356, -3.336, 3.189]}
          rotation={[-2.914, -0.16, -1.701]}
          scale={[13.703, 17.329, 13.724]}
        />
        <mesh
          name="Icosphere026"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere026.geometry}
          material={materials.rocks}
          position={[-18.127, 24.347, -26.44]}
          rotation={[2.659, -0.761, -1.699]}
          scale={[34.56, 14.787, 15.983]}
        />
        <mesh
          name="Icosphere027"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere027.geometry}
          material={materials.rocks}
          position={[-55.151, 17.902, -5.303]}
          rotation={[0.889, -0.065, 2.201]}
          scale={[28.381, 22.415, 28.368]}
        />
        <mesh
          name="Icosphere028"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere028.geometry}
          material={materials.rocks}
          position={[-8.201, 87.555, -51.258]}
          rotation={[2.722, -1.132, -1.052]}
          scale={[6.341, 5.87, 6.81]}
        />
        <group name="focus" position={[10.139, 4.63, 5.511]} scale={5.009} />
        <mesh
          name="Icosphere001"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials.rocks}
          position={[-14.09, 74.016, -53.038]}
          rotation={[-0.343, 0.848, 1.665]}
          scale={[14.226, 13.847, 14.219]}
        />
        <mesh
          name="Icosphere003"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003.geometry}
          material={materials.rocks}
          position={[-19.885, 55.144, -41.495]}
          rotation={[-1.676, 0.675, 3.114]}
          scale={[20.065, 18.94, 19.405]}
        />
        <mesh
          name="Icosphere005"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005.geometry}
          material={materials.rocks}
          position={[56.147, 74.043, -45.973]}
          rotation={[-1.753, -0.826, 0.075]}
          scale={[16.423, 15.985, 16.416]}
        />
        <mesh
          name="Icosphere007"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007.geometry}
          material={materials.rocks}
          position={[64.071, 54, -44.437]}
          rotation={[-2.54, -1.447, -0.788]}
          scale={[25.141, 24.472, 25.131]}
        />
        <mesh
          name="Icosphere009"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009.geometry}
          material={materials.rocks}
          position={[48.865, 85.385, -44.447]}
          rotation={[-1.753, -0.826, 0.075]}
          scale={[-5.601, -5.452, -5.599]}
        />
        <mesh
          name="Icosphere011"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere011.geometry}
          material={materials.rocks}
          position={[54.7, 10.496, -24.319]}
          rotation={[2.252, -1.468, -2.292]}
          scale={[29.143, 14.45, 14.367]}
        />
        <mesh
          name="Icosphere018"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere018.geometry}
          material={materials.rocks}
          position={[-21.913, -15.989, -9.316]}
          rotation={[-2.73, 0.39, 2.526]}
          scale={[15.721, 24.437, 14.693]}
        />
        <mesh
          name="Icosphere030"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere030.geometry}
          material={materials.rocks}
          position={[2.496, -7.929, 35.836]}
          rotation={[-2.904, 0.132, -1.695]}
          scale={[-4.677, -7.645, -4.693]}
        />
        <mesh
          name="Icosphere031"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031.geometry}
          material={materials.rocks}
          position={[78.155, -5.097, 23.21]}
          rotation={[2.788, -0.758, -1.487]}
          scale={[17.248, 24.998, 14.448]}
        />
        <mesh
          name="Icosphere019"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere019.geometry}
          material={materials.rocks}
          position={[-34.352, 46.805, -32.392]}
          rotation={[0.419, 1.26, -0.277]}
          scale={[10.984, 13.74, 11.172]}
        />
        <mesh
          name="Icosphere033"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere033.geometry}
          material={materials.rocks}
          position={[1.155, 2.292, 5.689]}
        />
        <mesh
          name="Icosphere035"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere035.geometry}
          material={materials.rocks}
          position={[-31.723, 66.916, -40.175]}
          rotation={[-0.757, 0.632, 2.166]}
          scale={[14.226, 13.847, 14.219]}
        />
        <mesh
          name="Icosphere038"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere038.geometry}
          material={materials.rocks}
          position={[-16.935, 87.102, -94.708]}
          rotation={[1.981, -1.132, -1.052]}
          scale={[28.406, 12.776, 14.972]}
        />
        <mesh
          name="Icosphere039"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere039.geometry}
          material={materials.rocks}
          position={[57.909, 87.556, -101.029]}
          rotation={[-1.699, 0.889, -0.377]}
          scale={[25.335, 40.322, 21.908]}
        />
        <group name="NurbsPath003" position={[28.096, 91.992, -34.907]} />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.010']}
          position={[28.515, 91.992, -34.019]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.233, 0.732, 0.233]}
        />
        <mesh
          name="caar"
          castShadow
          receiveShadow
          geometry={nodes.caar.geometry}
          material={nodes.caar.material}
          position={[-18.944, 263.862, -248.271]}
          rotation={[-1.617, 0.288, 0.234]}
          scale={[2.135, 1.336, 1.336]}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.010']}
          position={[36.19, 88.155, -36.326]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['Material.010']}
          position={[-40.616, 76.153, -25.927]}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.010']}
          position={[-40.624, 76.094, -26.629]}
        />
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials['Material.010']}
          position={[-24.346, 80.648, -35.943]}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['Material.010']}
          position={[67.555, 57.657, -3.42]}
        />
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['Material.010']}
          position={[67.506, 57.583, -2.621]}
        />
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['Material.010']}
          position={[-27.956, 42.992, 0.499]}
        />
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials['Material.010']}
          position={[-28.074, 43.012, 1.553]}
        />
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['Material.010']}
          position={[68.385, 64.197, -16.359]}
        />
        <mesh
          name="Cylinder010"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials['Material.010']}
          position={[68.309, 64.224, -15.326]}
        />
        <mesh
          name="Cylinder011"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials['Material.010']}
          position={[68.385, 64.197, -16.359]}
        />
        <mesh
          name="Cylinder012"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials['Material.010']}
          position={[68.385, 64.197, -16.359]}
        />
        <mesh
          name="Cylinder013"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials['Material.010']}
          position={[-44.066, 37.276, 37.817]}
          rotation={[0, 0, -0.692]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/waterfallf.glb')
