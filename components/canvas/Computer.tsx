import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import CanvasLoader from './loader';

export function Computers({ isMobile }: { isMobile: boolean }) {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight intensity={1} position={[-20, 50, 10]} angle={0.12} penumbra={1} shadow-mapSize={1024} castShadow />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2, -1] : [0, -2.2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

export default function ComputerCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const meediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(meediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    meediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      meediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 20 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
