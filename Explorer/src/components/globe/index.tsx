import { Canvas } from "@react-three/fiber";
import { EarthModal } from "./earth3d";
import { Loader, OrbitControls, useProgress } from "@react-three/drei";
import { Suspense } from "react";

export const Globe = () => {
  const { progress } = useProgress();
  console.log({ progress });
  return (
    <div className="flex-1 ">
      <Canvas className="w-full h-full">
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />

          <EarthModal position={[0, 0, 0]} />
        </Suspense>
      </Canvas>

      <Loader />
    </div>
  );
};
