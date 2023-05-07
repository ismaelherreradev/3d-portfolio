import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export function Computers() {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight intensity={1} position={[-20, 50, 10]} angle={0.12} penumbra={1} shadow-mapSize={1024} castShadow />
      <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
}

export default function ComputerCanvas() {
  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 20 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
