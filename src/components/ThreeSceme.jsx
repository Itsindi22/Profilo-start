import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const ThreeScene = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="hotpink" />
          <Html>
            <div style={{ color: 'white' }}>Hello in 3D!</div>
          </Html>
        </mesh>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}

export default ThreeScene
