/* eslint-disable react/no-unknown-property */
import  { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { useLayoutEffect } from "react";
import * as THREE from 'three';
import noise_tex from '../assets/whiteTexture.png';
import displ_tex from '../assets/yellowTexture.png';
import { vertexShader, fragmentShader } from '../shader/waterfall';
import { useFrame } from '@react-three/fiber';
import { GfragmentShader, GvertexShader } from '../shader/GroundWater';
import gsap from 'gsap';


export function Model(props) {
  const group = useRef()
  const tl=useRef()

  const { nodes, materials, animations } = useGLTF('/waterfall1.glb')
  const { actions } = useAnimations(animations, group)

  const shaderRef = useRef();
  const noiseTex= new THREE.TextureLoader().load(noise_tex);
  const displTex = new THREE.TextureLoader().load(displ_tex);
 

    useLayoutEffect(()=>{
     
      tl.current=gsap.timeline()
  
    },[])

  useFrame(({ clock }) => {
    if (shaderRef.current) {

      shaderRef.current.uniforms.TIME.value = clock.elapsedTime;
    }
  });
  const GroundRef = useRef();
  const Ground2Ref = useRef();
  useFrame(({ clock }) => {
   if (GroundRef.current) {

     GroundRef.current.uniforms.timescale.value = clock.elapsedTime;
   }
 });
  useFrame(({ clock }) => {
   if (Ground2Ref.current) {

     Ground2Ref.current.uniforms.timescale.value = clock.elapsedTime;
   }
 });
  return (
    <group position={[-10,-2,52]} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          
          position={[20.5, 85.678, -71.169]}
          scale={[25, 18.217, 18.217]}
        >
            <shaderMaterial ref={Ground2Ref} 

vertexShader={GvertexShader}
fragmentShader={GfragmentShader}
uniforms={{
  timescale:{value:0}    }}
 />
        </mesh>
        <group name="water2" position={[-27.486, 2.637, 21.666]} scale={[8.799, 4.901, 4.901]} />
        <mesh
          name="ground"
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
       
          position={[18.365, -8.213, 23.433]}
          scale={[55.526, 57.042, 31.136]}
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
        
          position={[-62.409, 37.605, -3.649]}
          scale={[29.647, 14.552, 14.552]}
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
          position={[19.358, 85.916, -104.62]}
          scale={[25, 18.217, 18.217]}
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
          position={[41.524, 90.747, -36.931]}
          rotation={[0.067, 0.097, 0.023]}
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
        <group
          name="booth"
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
          name="platform001"
          castShadow
          receiveShadow
          geometry={nodes.platform001.geometry}
          material={nodes.platform001.material}
          position={[32.649, -6.22, 44.484]}
          rotation={[0, -1.561, -Math.PI]}
          scale={[-8.596, -0.019, -15.002]}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.cabin}
          position={[49.302, -4.647, 34.68]}
          rotation={[0, -0.01, 0]}
          scale={[8.95, 4.751, 6.025]}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.glass}
          position={[49.302, -4.647, 34.68]}
          rotation={[0, -0.01, 0]}
          scale={[8.95, 4.751, 6.025]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.railing}
          position={[49.302, -4.647, 34.68]}
          rotation={[0, -0.01, 0]}
          scale={[8.95, 4.751, 6.025]}
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
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials['Material.006']}
          position={[10.256, 109.576, -113.844]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[164.792, 94.352, 94.352]}
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
          position={[-1.356, 960.244, -963.576]}
          rotation={[-2.598, -0.83, -2.046]}
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
        <mesh
          name="Rock1_blinn3_0"
          castShadow
          receiveShadow
          geometry={nodes.Rock1_blinn3_0.geometry}
          material={materials.blinn3}
          position={[71.817, 4.329, -15.888]}
          rotation={[0.407, 1.025, -0.463]}
          scale={41.329}
        />
        <mesh
          name="Rock5_blinn3_0"
          castShadow
          receiveShadow
          geometry={nodes.Rock5_blinn3_0.geometry}
          material={materials.blinn3}
          position={[13.927, -8.117, 25.742]}
          rotation={[-0.002, 0.025, 0.101]}
          scale={8.805}
        />
        <mesh
          name="Rock6_blinn3_0"
          castShadow
          receiveShadow
          geometry={nodes.Rock6_blinn3_0.geometry}
          material={materials.blinn3}
          position={[1.267, -7.758, 12.865]}
          scale={8.081}
        />
        <mesh
          name="Rock7_blinn3_0"
          castShadow
          receiveShadow
          geometry={nodes.Rock7_blinn3_0.geometry}
          material={materials.blinn3}
          position={[77.887, 57.117, -43.894]}
          rotation={[-2.342, 0.071, -1.751]}
          scale={-27.375}
        />
        <mesh
          name="Rock8_blinn3_0"
          castShadow
          receiveShadow
          geometry={nodes.Rock8_blinn3_0.geometry}
          material={materials.blinn3}
          position={[83.371, 9.906, 11.941]}
          rotation={[-0.38, -0.17, -3.127]}
          scale={-39.575}
        />
        <mesh
          name="Rock2_blinn3_0001"
          castShadow
          receiveShadow
          geometry={nodes.Rock2_blinn3_0001.geometry}
          material={materials.blinn3}
          position={[-28.479, 3.221, 6.094]}
          rotation={[2.74, 0.909, 2.23]}
          scale={[11.603, 15.633, 27.317]}
        />
        <mesh
          name="Rock2_blinn3_0002"
          castShadow
          receiveShadow
          geometry={nodes.Rock2_blinn3_0002.geometry}
          material={materials.blinn3}
          position={[-15.524, 23.864, -22.572]}
          rotation={[2.314, 0.939, 2.946]}
          scale={[10.122, 16.744, 21.823]}
        />
        <mesh
          name="Rock2_blinn3_0003"
          castShadow
          receiveShadow
          geometry={nodes.Rock2_blinn3_0003.geometry}
          material={materials.blinn3}
          position={[-63.397, 23.189, 15.027]}
          rotation={[0.949, 0.207, -2.903]}
          scale={[9.704, 16.053, 20.922]}
        />
        <mesh
          name="Rock2_blinn3_0004"
          castShadow
          receiveShadow
          geometry={nodes.Rock2_blinn3_0004.geometry}
          material={materials.blinn3}
          position={[-49.845, -0.814, 22.517]}
          rotation={[2.067, 0.671, 2.748]}
          scale={[9.704, 16.053, 20.922]}
        />
        <mesh
          name="Rock2_blinn3_0005"
          castShadow
          receiveShadow
          geometry={nodes.Rock2_blinn3_0005.geometry}
          material={materials.blinn3}
          position={[-19.526, 71.366, -48.337]}
          rotation={[2.777, -1.37, -0.352]}
          scale={[9.704, 16.053, 20.922]}
        />
        <mesh
          name="Rock2_blinn3_0006"
          castShadow
          receiveShadow
          geometry={nodes.Rock2_blinn3_0006.geometry}
          material={materials.blinn3}
          position={[-50.445, 41.653, -20.02]}
          rotation={[0.147, -0.769, 3.13]}
          scale={[16.34, 27.029, 35.227]}
        />
        <mesh
          name="Rock8_blinn3_0001"
          castShadow
          receiveShadow
          geometry={nodes.Rock8_blinn3_0001.geometry}
          material={materials.blinn3}
          position={[59.386, 84.603, -62.231]}
          rotation={[-0.608, 0.08, -1.588]}
          scale={-18.064}
        />
        <mesh
          name="Rock8_blinn3_0002"
          castShadow
          receiveShadow
          geometry={nodes.Rock8_blinn3_0002.geometry}
          material={materials.blinn3}
          position={[51.777, 85.81, -91.971]}
          rotation={[-0.98, -0.933, -2.897]}
          scale={[-22.837, -40.701, -19.131]}
        />
        <mesh
          name="Rock8_blinn3_0003"
          castShadow
          receiveShadow
          geometry={nodes.Rock8_blinn3_0003.geometry}
          material={materials.blinn3}
          position={[-23.363, 74.089, -100.286]}
          rotation={[1.817, -0.151, -3.075]}
          scale={-37.24}
        />
        <mesh
          name="Rock8_blinn3_0004"
          castShadow
          receiveShadow
          geometry={nodes.Rock8_blinn3_0004.geometry}
          material={materials.blinn3}
          position={[-55.797, 67.228, -71.292]}
          rotation={[0.27, -0.289, 1.157]}
          scale={[-37.536, -38.559, -79.339]}
        />
        <mesh
          name="Rock8_blinn3_0005"
          castShadow
          receiveShadow
          geometry={nodes.Rock8_blinn3_0005.geometry}
          material={materials.blinn3}
          position={[52.622, 76.463, -38.718]}
          rotation={[-0.162, -0.338, -2.866]}
          scale={-15.295}
        />
        <mesh
          name="Rock6_blinn3_0001"
          castShadow
          receiveShadow
          geometry={nodes.Rock6_blinn3_0001.geometry}
          material={materials.blinn3}
          position={[-27.501, 70.256, -36.217]}
          rotation={[-1.855, 0.383, 2.726]}
          scale={10.25}
        />
        <mesh
          name="Rock8_blinn3_0006"
          castShadow
          receiveShadow
          geometry={nodes.Rock8_blinn3_0006.geometry}
          material={materials.blinn3}
          position={[-19.362, 87.915, -87.609]}
          rotation={[1.523, -0.232, -3.125]}
          scale={-37.24}
        />
        <mesh
          name="Rock2_blinn3_0007"
          castShadow
          receiveShadow
          geometry={nodes.Rock2_blinn3_0007.geometry}
          material={materials.blinn3}
          position={[-18.577, 89.882, -61.66]}
          rotation={[1.036, 0.691, 0.443]}
          scale={[-6.854, -11.338, -14.777]}
        />
        <group
          name="Cone002"
          position={[-91.086, 172.897, 127.712]}
          rotation={[-2.277, -0.238, -1.782]}
          scale={1.261}
        />
        <group
          name="Cylinder015_Material_#11_0"
          position={[-18.483, -5.644, 30.172]}
          rotation={[-1.579, -0.114, -0.08]}
          scale={0.049}>
          <mesh
            name="Cylinder015_Material_#11_0_1"
            castShadow
            receiveShadow
            geometry={nodes['Cylinder015_Material_#11_0_1'].geometry}
            material={materials.Material_11}
          />
          <mesh
            name="Cylinder015_Material_#11_0_2"
            castShadow
            receiveShadow
            geometry={nodes['Cylinder015_Material_#11_0_2'].geometry}
            material={materials.Material_12}
          />
        </group>
        <group
          name="Plants2"
          position={[-42.846, 20.402, 17.092]}
          rotation={[0, -1.21, 0]}
          scale={1.261}>
          <mesh
            name="Plants2_Plant_Mat_0"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0.geometry}
            material={materials['Plant_Mat.001']}
            position={[1.95, -0.497, -1.277]}
            rotation={[-0.217, -0.04, -0.556]}
            scale={1.177}
          />
          <mesh
            name="Plants2_Plant_Mat_0001"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0001.geometry}
            material={materials['Plant_Mat.001']}
            position={[-8.111, 5.683, -19.355]}
            rotation={[-0.217, -0.04, -0.556]}
            scale={1.177}
          />
          <mesh
            name="Plants2_Plant_Mat_0002"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0002.geometry}
            material={materials['Plant_Mat.001']}
            position={[-9.176, 5.336, -20.549]}
            rotation={[-1.877, -0.562, -0.628]}
            scale={1.177}
          />
          <mesh
            name="Plants2_Plant_Mat_0003"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0003.geometry}
            material={materials['Plant_Mat.001']}
            position={[9.658, -22.683, -7.748]}
            rotation={[0.839, 1.234, -0.879]}
            scale={[3.166, 6.844, 1.895]}
          />
          <mesh
            name="Plants2_Plant_Mat_0004"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0004.geometry}
            material={materials['Plant_Mat.001']}
            position={[9.31, -19.671, -32.007]}
            rotation={[-2.272, 0.729, 2.982]}
            scale={1.177}
          />
          <mesh
            name="Plants2_Plant_Mat_0005"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0005.geometry}
            material={materials['Plant_Mat.001']}
            position={[9.31, -19.671, -32.007]}
            rotation={[-2.272, 0.729, 2.982]}
            scale={1.177}
          />
          <mesh
            name="Plants2_Plant_Mat_0006"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0006.geometry}
            material={materials['Plant_Mat.001']}
            position={[6.711, -21.648, -14.28]}
            rotation={[0.102, 0.283, -0.719]}
            scale={1.177}
          />
          <mesh
            name="Plants2_Plant_Mat_0007"
            castShadow
            receiveShadow
            geometry={nodes.Plants2_Plant_Mat_0007.geometry}
            material={materials['Plant_Mat.001']}
            position={[5.027, -22.405, -14.881]}
            rotation={[-2.72, -0.952, -2.016]}
            scale={1.177}
          />
        </group>
        <group
          name="Cylinder015_Material_#11_0001"
          position={[-19.05, -4.883, 29.349]}
          rotation={[-1.584, 0.162, -3.111]}
          scale={0.049}>
          <mesh
            name="Cylinder015_Material_#11_0_1"
            castShadow
            receiveShadow
            geometry={nodes['Cylinder015_Material_#11_0_1'].geometry}
            material={materials.Material_11}
          />
          <mesh
            name="Cylinder015_Material_#11_0_2"
            castShadow
            receiveShadow
            geometry={nodes['Cylinder015_Material_#11_0_2'].geometry}
            material={materials.Material_12}
          />
        </group>
        <group
          name="Cylinder015_Material_#11_0002"
          position={[-19.324, -5.86, 31.317]}
          rotation={[-1.579, -0.114, -0.08]}
          scale={0.049}>
          <mesh
            name="Cylinder015_Material_#11_0_1"
            castShadow
            receiveShadow
            geometry={nodes['Cylinder015_Material_#11_0_1'].geometry}
            material={materials.Material_11}
          />
          <mesh
            name="Cylinder015_Material_#11_0_2"
            castShadow
            receiveShadow
            geometry={nodes['Cylinder015_Material_#11_0_2'].geometry}
            material={materials.Material_12}
          />
        </group>
        <group name="Plant" position={[75.128, 49.315, -6.649]} rotation={[-Math.PI / 2, 0, 0]} />
        <group
          name="Plant001"
          position={[72.128, 49.315, -6.649]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0.geometry}
          material={materials.Plant}
          position={[71.693, 50.04, -6.118]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0001"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0001.geometry}
          material={materials.Plant}
          position={[72.537, 50.561, -9.931]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0002"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0002.geometry}
          material={materials.Plant}
          position={[73.956, 49.631, -7.127]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0003"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0003.geometry}
          material={materials.Plant}
          position={[69.962, 51.453, -6.018]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant002"
          position={[69.128, 49.315, -6.649]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0.geometry}
          material={materials.Plant}
          position={[68.698, 50.033, -6.147]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0001"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0001.geometry}
          material={materials.Plant}
          position={[69.542, 50.554, -9.96]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0002"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0002.geometry}
          material={materials.Plant}
          position={[72.778, 50.574, -6.466]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0003"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0003.geometry}
          material={materials.Plant}
          position={[68.101, 51.481, -6.327]}
          rotation={[-1.556, -0.058, 0.018]}
        />
        <group
          name="Plant003"
          position={[75.654, 49.431, -10.175]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant004"
          position={[72.654, 49.431, -10.175]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant005"
          position={[69.654, 49.431, -10.175]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant006"
          position={[77.467, 52.843, -8.139]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group name="Plant007" position={[71.64, 51.599, -2.42]} rotation={[-Math.PI / 2, 0, 0]} />
        <group name="Plant008" position={[72.8, 52.71, -7.921]} rotation={[-Math.PI / 2, 0, 0]} />
        <group name="Plant009" position={[72.874, 50.95, -7.247]} rotation={[-Math.PI / 2, 0, 0]} />
        <group name="Plant010" position={[69.874, 50.95, -7.247]} rotation={[-Math.PI / 2, 0, 0]} />
        <group name="Plant011" position={[71.66, 51.811, -9.079]} rotation={[-Math.PI / 2, 0, 0]} />
        <group
          name="Plant_2"
          position={[-116.107, -19.778, 26.873]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant_2001"
          position={[-119.107, -19.778, 26.873]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_2001_0"
          castShadow
          receiveShadow
          geometry={nodes.Plant_2001_0.geometry}
          material={materials.Plant_2}
          position={[66.091, 50.558, -11.28]}
          rotation={[-1.704, 0.359, -0.109]}
        />
        <group
          name="Plant_2002"
          position={[-123.107, -19.778, 26.873]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_2002_0"
          castShadow
          receiveShadow
          geometry={nodes.Plant_2002_0.geometry}
          material={materials.Plant_2}
          position={[63.303, 50.648, -8.336]}
          rotation={[-1.169, -0.113, 0.073]}
        />
        <mesh
          name="Plant_2_0"
          castShadow
          receiveShadow
          geometry={nodes.Plant_2_0.geometry}
          material={materials.Plant_2}
          position={[66.557, 51.177, -8.826]}
          rotation={[-1.042, 0.19, 0.106]}
        />
        <mesh
          name="Plant_0"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0.geometry}
          material={materials.Plant}
          position={[74.952, 49.941, -6.328]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0001"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0001.geometry}
          material={materials.Plant}
          position={[75.478, 50.056, -9.855]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0002"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0002.geometry}
          material={materials.Plant}
          position={[77.215, 49.532, -7.336]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0003"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0003.geometry}
          material={materials.Plant}
          position={[71.504, 52.523, -6.015]}
          rotation={[-1.66, 0.508, -0.129]}
        />
        <group
          name="Plant012"
          position={[78.845, 50.031, -10.198]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant013"
          position={[75.845, 50.031, -10.198]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0004"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0004.geometry}
          material={materials.Plant}
          position={[75.41, 50.755, -9.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0005"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0005.geometry}
          material={materials.Plant}
          position={[76.255, 51.277, -13.481]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0006"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0006.geometry}
          material={materials.Plant}
          position={[77.673, 50.346, -10.676]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0007"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0007.geometry}
          material={materials.Plant}
          position={[73.68, 52.169, -9.567]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant014"
          position={[72.845, 50.031, -10.198]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0004"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0004.geometry}
          material={materials.Plant}
          position={[72.415, 50.749, -9.696]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0005"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0005.geometry}
          material={materials.Plant}
          position={[73.259, 51.27, -13.509]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0006"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0006.geometry}
          material={materials.Plant}
          position={[76.495, 51.29, -10.016]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0007"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0007.geometry}
          material={materials.Plant}
          position={[71.818, 52.197, -9.877]}
          rotation={[-1.556, -0.058, 0.018]}
        />
        <group
          name="Plant015"
          position={[79.371, 50.146, -13.724]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant016"
          position={[76.371, 50.146, -13.724]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant017"
          position={[73.371, 50.146, -13.724]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant018"
          position={[81.184, 53.559, -11.689]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant019"
          position={[75.357, 52.315, -5.969]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant020"
          position={[76.518, 53.426, -11.47]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant021"
          position={[76.591, 51.666, -10.796]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant022"
          position={[73.591, 51.666, -10.796]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0004"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0004.geometry}
          material={materials.Plant}
          position={[78.669, 50.657, -9.877]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0005"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0005.geometry}
          material={materials.Plant}
          position={[79.196, 50.772, -13.404]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0006"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0006.geometry}
          material={materials.Plant}
          position={[80.932, 50.248, -10.886]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0007"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0007.geometry}
          material={materials.Plant}
          position={[75.222, 53.239, -9.564]}
          rotation={[-1.66, 0.508, -0.129]}
        />
        <group
          name="Plant023"
          position={[68.741, 51.258, -12.431]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant024"
          position={[65.741, 51.258, -12.431]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0008"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0008.geometry}
          material={materials.Plant}
          position={[65.306, 51.983, -11.901]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0009"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0009.geometry}
          material={materials.Plant}
          position={[66.151, 52.504, -15.714]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0010"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0010.geometry}
          material={materials.Plant}
          position={[67.569, 51.574, -12.91]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0011"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0011.geometry}
          material={materials.Plant}
          position={[63.576, 53.396, -11.8]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant025"
          position={[62.741, 51.258, -12.431]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0008"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0008.geometry}
          material={materials.Plant}
          position={[62.311, 51.976, -11.93]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0009"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0009.geometry}
          material={materials.Plant}
          position={[63.155, 52.497, -15.743]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0010"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0010.geometry}
          material={materials.Plant}
          position={[66.391, 52.517, -12.249]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0011"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0011.geometry}
          material={materials.Plant}
          position={[61.714, 53.424, -12.11]}
          rotation={[-1.556, -0.058, 0.018]}
        />
        <group
          name="Plant026"
          position={[69.267, 51.374, -15.958]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant027"
          position={[66.267, 51.374, -15.958]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant028"
          position={[63.267, 51.374, -15.958]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant029"
          position={[71.08, 54.786, -13.922]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant030"
          position={[65.253, 53.542, -8.203]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant031"
          position={[66.414, 54.653, -13.703]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant032"
          position={[66.487, 52.893, -13.03]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant033"
          position={[63.487, 52.893, -13.03]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant034"
          position={[65.273, 53.754, -14.861]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0008"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0008.geometry}
          material={materials.Plant}
          position={[68.565, 51.884, -12.11]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0009"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0009.geometry}
          material={materials.Plant}
          position={[69.091, 51.999, -15.637]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0010"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0010.geometry}
          material={materials.Plant}
          position={[70.828, 51.475, -13.119]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0011"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0011.geometry}
          material={materials.Plant}
          position={[65.117, 54.466, -11.797]}
          rotation={[-1.66, 0.508, -0.129]}
        />
        <group
          name="Plant035"
          position={[72.458, 51.974, -15.98]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant036"
          position={[69.458, 51.974, -15.98]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0012"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0012.geometry}
          material={materials.Plant}
          position={[69.024, 52.698, -15.45]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0013"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0013.geometry}
          material={materials.Plant}
          position={[69.868, 53.22, -19.263]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0014"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0014.geometry}
          material={materials.Plant}
          position={[71.287, 52.289, -16.459]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant001_0015"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0015.geometry}
          material={materials.Plant}
          position={[67.293, 54.112, -15.349]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant037"
          position={[66.458, 51.974, -15.98]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0012"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0012.geometry}
          material={materials.Plant}
          position={[66.028, 52.692, -15.479]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0013"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0013.geometry}
          material={materials.Plant}
          position={[66.873, 53.213, -19.292]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0014"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0014.geometry}
          material={materials.Plant}
          position={[70.109, 53.233, -15.798]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant002_0015"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0015.geometry}
          material={materials.Plant}
          position={[65.431, 54.14, -15.659]}
          rotation={[-1.556, -0.058, 0.018]}
        />
        <group
          name="Plant038"
          position={[72.985, 52.089, -19.507]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant039"
          position={[69.985, 52.089, -19.507]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant040"
          position={[66.985, 52.089, -19.507]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant041"
          position={[74.797, 55.502, -17.471]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant042"
          position={[68.971, 54.258, -11.752]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant043"
          position={[70.131, 55.369, -17.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant044"
          position={[70.204, 53.609, -16.579]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Plant045"
          position={[67.204, 53.609, -16.579]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0012"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0012.geometry}
          material={materials.Plant}
          position={[72.283, 52.6, -15.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0013"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0013.geometry}
          material={materials.Plant}
          position={[72.809, 52.715, -19.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0014"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0014.geometry}
          material={materials.Plant}
          position={[74.546, 52.191, -16.668]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plant_0015"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0015.geometry}
          material={materials.Plant}
          position={[68.835, 55.182, -15.346]}
          rotation={[-1.66, 0.508, -0.129]}
        />
        <group
          name="Plant046"
          position={[-12.584, 86.628, -40.759]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant047"
          position={[-15.554, 86.206, -40.742]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0016"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0016.geometry}
          material={materials.Plant}
          position={[-16.082, 86.852, -40.195]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0017"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0017.geometry}
          material={materials.Plant}
          position={[-15.351, 87.557, -44.002]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0018"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0018.geometry}
          material={materials.Plant}
          position={[-13.792, 86.784, -41.224]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0019"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0019.geometry}
          material={materials.Plant}
          position={[-17.993, 88.006, -40.057]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant048"
          position={[-18.524, 85.784, -40.724]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0016"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0016.geometry}
          material={materials.Plant}
          position={[-19.047, 86.425, -40.206]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0017"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0017.geometry}
          material={materials.Plant}
          position={[-18.316, 87.13, -44.013]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0018"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0018.geometry}
          material={materials.Plant}
          position={[-15.086, 87.54, -40.539]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0019"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0019.geometry}
          material={materials.Plant}
          position={[-19.843, 87.778, -40.355]}
          rotation={[-1.536, -0.199, 0.028]}
        />
        <group
          name="Plant049"
          position={[-12.109, 86.881, -44.286]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant050"
          position={[-15.079, 86.459, -44.268]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant051"
          position={[-18.049, 86.037, -44.251]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant052"
          position={[-10.777, 90.476, -42.194]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant053"
          position={[-16.322, 88.32, -36.467]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant054"
          position={[-15.376, 89.684, -41.951]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant055"
          position={[-15.05, 87.94, -41.313]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant056"
          position={[-18.021, 87.518, -41.295]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant057"
          position={[-16.389, 88.655, -43.12]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0016"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0016.geometry}
          material={materials.Plant}
          position={[-12.843, 87.216, -40.425]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0017"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0017.geometry}
          material={materials.Plant}
          position={[-12.368, 87.469, -43.952]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0018"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0018.geometry}
          material={materials.Plant}
          position={[-10.554, 87.148, -41.455]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0019"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0019.geometry}
          material={materials.Plant}
          position={[-16.617, 89.282, -40.042]}
          rotation={[-1.639, 0.367, -0.133]}
        />
        <group
          name="Plant058"
          position={[-9.034, 87.924, -44.315]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant059"
          position={[-12.004, 87.503, -44.298]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0020"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0020.geometry}
          material={materials.Plant}
          position={[-12.532, 88.149, -43.751]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0021"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0021.geometry}
          material={materials.Plant}
          position={[-11.802, 88.854, -47.558]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0022"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0022.geometry}
          material={materials.Plant}
          position={[-10.243, 88.081, -44.781]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0023"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0023.geometry}
          material={materials.Plant}
          position={[-14.443, 89.302, -43.613]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant060"
          position={[-14.975, 87.081, -44.28]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0020"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0020.geometry}
          material={materials.Plant}
          position={[-15.497, 87.721, -43.762]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0021"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0021.geometry}
          material={materials.Plant}
          position={[-14.767, 88.427, -47.569]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0022"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0022.geometry}
          material={materials.Plant}
          position={[-11.536, 88.837, -44.095]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0023"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0023.geometry}
          material={materials.Plant}
          position={[-16.293, 89.075, -43.911]}
          rotation={[-1.536, -0.199, 0.028]}
        />
        <group
          name="Plant061"
          position={[-8.559, 88.177, -47.842]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant062"
          position={[-11.53, 87.756, -47.824]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant063"
          position={[-14.5, 87.334, -47.807]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant064"
          position={[-7.227, 91.773, -45.751]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant065"
          position={[-12.772, 89.617, -40.023]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant066"
          position={[-11.826, 90.981, -45.508]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant067"
          position={[-11.501, 89.237, -44.869]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant068"
          position={[-14.471, 88.815, -44.851]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0020"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0020.geometry}
          material={materials.Plant}
          position={[-9.293, 88.513, -43.981]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0021"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0021.geometry}
          material={materials.Plant}
          position={[-8.819, 88.766, -47.508]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0022"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0022.geometry}
          material={materials.Plant}
          position={[-7.004, 88.445, -45.011]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0023"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0023.geometry}
          material={materials.Plant}
          position={[-13.067, 90.579, -43.598]}
          rotation={[-1.639, 0.367, -0.133]}
        />
        <group
          name="Plant069"
          position={[-19.229, 87.76, -46.466]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant070"
          position={[-22.199, 87.338, -46.448]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0024"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0024.geometry}
          material={materials.Plant}
          position={[-22.727, 87.984, -45.901]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0025"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0025.geometry}
          material={materials.Plant}
          position={[-21.997, 88.689, -49.708]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0026"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0026.geometry}
          material={materials.Plant}
          position={[-20.438, 87.916, -46.931]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0027"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0027.geometry}
          material={materials.Plant}
          position={[-24.638, 89.138, -45.763]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant071"
          position={[-25.169, 86.916, -46.431]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0024"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0024.geometry}
          material={materials.Plant}
          position={[-25.692, 87.557, -45.913]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0025"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0025.geometry}
          material={materials.Plant}
          position={[-24.961, 88.262, -49.72]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0026"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0026.geometry}
          material={materials.Plant}
          position={[-21.731, 88.672, -46.245]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0027"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0027.geometry}
          material={materials.Plant}
          position={[-26.488, 88.91, -46.062]}
          rotation={[-1.536, -0.199, 0.028]}
        />
        <group
          name="Plant072"
          position={[-18.754, 88.013, -49.992]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant073"
          position={[-21.724, 87.591, -49.975]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant074"
          position={[-24.695, 87.169, -49.957]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant075"
          position={[-17.422, 91.608, -47.901]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant076"
          position={[-22.967, 89.452, -42.173]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant077"
          position={[-22.021, 90.816, -47.658]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant078"
          position={[-21.696, 89.072, -47.019]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant079"
          position={[-24.666, 88.65, -47.002]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant080"
          position={[-23.034, 89.787, -48.826]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0024"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0024.geometry}
          material={materials.Plant}
          position={[-19.488, 88.348, -46.132]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0025"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0025.geometry}
          material={materials.Plant}
          position={[-19.013, 88.601, -49.658]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0026"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0026.geometry}
          material={materials.Plant}
          position={[-17.199, 88.28, -47.161]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0027"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0027.geometry}
          material={materials.Plant}
          position={[-23.262, 90.414, -45.748]}
          rotation={[-1.639, 0.367, -0.133]}
        />
        <group
          name="Plant081"
          position={[-15.679, 89.056, -50.022]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant082"
          position={[-18.65, 88.635, -50.004]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0028"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0028.geometry}
          material={materials.Plant}
          position={[-19.177, 89.281, -49.458]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0029"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0029.geometry}
          material={materials.Plant}
          position={[-18.447, 89.986, -53.264]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0030"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0030.geometry}
          material={materials.Plant}
          position={[-16.888, 89.213, -50.487]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant001_0031"
          castShadow
          receiveShadow
          geometry={nodes.Plant001_0031.geometry}
          material={materials.Plant}
          position={[-21.088, 90.434, -49.319]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant083"
          position={[-21.62, 88.213, -49.987]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0028"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0028.geometry}
          material={materials.Plant}
          position={[-22.142, 88.854, -49.469]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0029"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0029.geometry}
          material={materials.Plant}
          position={[-21.412, 89.559, -53.276]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0030"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0030.geometry}
          material={materials.Plant}
          position={[-18.181, 89.969, -49.801]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant002_0031"
          castShadow
          receiveShadow
          geometry={nodes.Plant002_0031.geometry}
          material={materials.Plant}
          position={[-22.938, 90.207, -49.618]}
          rotation={[-1.536, -0.199, 0.028]}
        />
        <group
          name="Plant084"
          position={[-15.205, 89.31, -53.548]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant085"
          position={[-18.175, 88.888, -53.531]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant086"
          position={[-21.145, 88.466, -53.513]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant087"
          position={[-13.872, 92.905, -51.457]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant088"
          position={[-19.417, 90.749, -45.729]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant089"
          position={[-18.471, 92.113, -51.214]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant090"
          position={[-18.146, 90.369, -50.575]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <group
          name="Plant091"
          position={[-21.116, 89.947, -50.558]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0028"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0028.geometry}
          material={materials.Plant}
          position={[-15.939, 89.645, -49.688]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0029"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0029.geometry}
          material={materials.Plant}
          position={[-15.464, 89.898, -53.214]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0030"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0030.geometry}
          material={materials.Plant}
          position={[-13.649, 89.577, -50.717]}
          rotation={[-1.551, -0.141, 0.009]}
        />
        <mesh
          name="Plant_0031"
          castShadow
          receiveShadow
          geometry={nodes.Plant_0031.geometry}
          material={materials.Plant}
          position={[-19.712, 91.711, -49.304]}
          rotation={[-1.639, 0.367, -0.133]}
        />
        <mesh
          name="Cylinder001_0001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_0001.geometry}
          material={materials.Mushroom}
          position={[64.476, 49.809, -4.1]}
          rotation={[-1.331, -0.379, 0.278]}
        />
        <mesh
          name="Cylinder001_0003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_0003.geometry}
          material={materials.Mushroom}
          position={[-32.548, 61.068, -24.791]}
          rotation={[-1.309, 0.028, -0.154]}
        />
        <mesh
          name="Cylinder001_0005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_0005.geometry}
          material={materials.Mushroom}
          position={[60.422, 83.992, -41.749]}
          rotation={[-1.522, 0.481, 0.493]}
        />
        <group
          name="Cylinder014"
          position={[88.406, 50.151, -13.179]}
          rotation={[-1.599, 0.102, -0.031]}
        />
        <group
          name="Cylinder015"
          position={[85.423, 50.452, -13.281]}
          rotation={[-1.599, 0.102, -0.031]}
        />
        <group
          name="Cylinder016"
          position={[91.389, 49.849, -13.076]}
          rotation={[-1.599, 0.102, -0.031]}
        />
        <group
          name="Sketchfab_model001"
          position={[-20.108, 85.149, -44.352]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.582}
        />
        <mesh
          name="Object_4"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
          position={[-20.462, 85.149, -43.961]}
          rotation={[0, -0.384, 0]}
          scale={6.582}
        />
        <mesh
          name="Object_6"
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Leaves}
          position={[-19.475, 100.175, -45.091]}
          rotation={[-1.515, 0.47, -0.334]}
          scale={8.649}
        />
        <mesh
          name="Object_8"
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Leaves}
          position={[-23.937, 101.258, -46.15]}
          rotation={[1.044, 0.724, 0.866]}
          scale={[-6.092, -7.595, -6.059]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[42.14, 94.243, -36.981]}
          rotation={[0, 0.156, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/waterfall1.glb')
