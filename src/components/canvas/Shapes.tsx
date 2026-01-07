"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Geometry({ position, geometry, color, speed = 1 }: any) {
    const mesh = useRef<any>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2 * speed;
            mesh.current.rotation.y += delta * 0.3 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                position={position}
                ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.2 : 1}
            >
                {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
                {geometry === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
                {geometry === "torus" && <torusGeometry args={[0.6, 0.25, 16, 32]} />}
                {geometry === "dodecahedron" && <dodecahedronGeometry args={[0.8]} />}
                <meshStandardMaterial
                    color={hovered ? "#00E5FF" : color}
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
}

export default function Shapes() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                {/* Floating background shapes */}
                <Geometry position={[-3, 2, 0]} geometry="torus" color="#4285F4" speed={0.8} />
                <Geometry position={[4, -2, -2]} geometry="box" color="#FF6B6B" speed={1} />
                <Geometry position={[-4, -3, 0]} geometry="dodecahedron" color="#10B981" speed={0.5} />
                <Geometry position={[3, 3, -1]} geometry="sphere" color="#4285F4" speed={1.2} />
            </Canvas>
        </div>
    );
}
