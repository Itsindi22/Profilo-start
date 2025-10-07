import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei"; // ✅ Add this import
import Loader from "../components/Loader";
import Bird from "../models/Bird";
import Plane from "../models/Plane";;


import Island from '../models/island'


// <div className="absolute top-28 left-0 right -0 z-10 flex
        // items-center justify-center">
        // POPUP
        // </div>

const Home = () => {
    const [isRotating, setIsRotating] = useState (true );
  
    const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPostion = [0,-6.5,-43];
    let rotation = [0.1,4.7,0];

    if (window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5];
    } else {
      screenScale = [1,1,1];

    }

    return [screenScale, screenPostion,rotation];
  };



  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
       className={`w-full h-screen bg-transparent ${isRotating ? 
        'cursor-grabbing' : 'cursor-grab'}`}


        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff"groundColor="#00000"
            intensity={1} />
           <Bird />
          <Sky /> 
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
