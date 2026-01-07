"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Line, Html } from "@react-three/drei";
import * as THREE from "three";

const skills = [
    { name: "Python", category: "lang", pos: [0, 2, 0] },
    { name: "SQL", category: "lang", pos: [2, 1, 0] },
    { name: "R", category: "lang", pos: [-2, 1, 0] },
    { name: "Pandas", category: "data", pos: [-1, -1, 1] },
    { name: "NumPy", category: "data", pos: [1, -1, 1] },
    { name: "TensorFlow", category: "ml", pos: [0, -2, -1] },
    { name: "PyTorch", category: "ml", pos: [-2, -2, -1] },
    { name: "AWS", category: "cloud", pos: [3, 0, -2] },
    { name: "Docker", category: "cloud", pos: [2, -2, -2] },
    { name: "Tableau", category: "bi", pos: [-3, 0, -2] },
];

const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], // Python connections
    [3, 4], [5, 6], [7, 8], [1, 9]
];

function Node({ position, name, category, active, onHover }: any) {
    const mesh = useRef<any>(null);
    const color = category === "lang" ? "#4285F4" : category === "ml" ? "#FF6B6B" : category === "data" ? "#00E5FF" : "#10B981";

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.scale.setScalar(active ? 1.5 : 1);
            mesh.current.lookAt(state.camera.position);
        }
    });

    return (
        <group position={position}>
            <mesh ref={mesh} onPointerOver={(e) => { e.stopPropagation(); onHover(true); }} onPointerOut={() => onHover(false)}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 2 : 0.5} />
            </mesh>
            <Html distanceFactor={10} style={{ pointerEvents: 'none', display: active ? 'block' : 'none' }}>
                <div className="bg-black/80 text-white px-2 py-1 rounded text-xs select-none border border-white/20 whitespace-nowrap backdrop-blur-sm">
                    {name}
                </div>
            </Html>
        </group>
    );
}

function Connections() {
    return (
        <group>
            {connections.map(([a, b], i) => {
                const start = new THREE.Vector3(...skills[a].pos as [number, number, number]);
                const end = new THREE.Vector3(...skills[b].pos as [number, number, number]);
                return (
                    <Line
                        key={i}
                        points={[start, end]}
                        color="#ffffff"
                        opacity={0.1}
                        transparent
                        lineWidth={1}
                    />
                );
            })}
        </group>
    );
}

function Scene() {
    const group = useRef<any>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group ref={group}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            {skills.map((skill, i) => (
                <Node
                    key={skill.name}
                    {...skill}
                    active={hovered === i}
                    onHover={(isActive: boolean) => setHovered(isActive ? i : null)}
                />
            ))}
            <Connections />
        </group>
    );
}

export default function SkillsUniverse() {
    return (
        <div className="h-[500px] w-full cursor-move">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <Scene />
            </Canvas>
        </div>
    );
}
