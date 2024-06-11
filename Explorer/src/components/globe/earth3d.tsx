import { useTexture } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export function EarthModal(props: GroupProps) {
  const [earthTexture] = useTexture(["/earth-texture/Albedo.jpg"]);
  const meshRef = useRef<Mesh>(null);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_state, delta) => {
    let mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.y += delta / 10;
  });
  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} rotation-y={59.5}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
    </group>
  );
}

useTexture.preload(["/earth-texture/Albedo.jpg", "/earth-texture/Bump.jpg"]);
