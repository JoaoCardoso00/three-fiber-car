import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import { Camera } from "./components/Camera";
import { Car } from "./components/Car";
import { Ground } from "./components/Ground";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <Camera />

      {/* let color = new Color(0,0,0); */}
      <color args={[0, 0, 0]} attach="background" />

      <Car />

      {/* 
        let spotlight = new SpotLight();
        spotlight.intensity = 1.5;
        spotlight.position.set(...)
      */}

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
