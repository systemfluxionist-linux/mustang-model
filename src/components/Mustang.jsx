// A 1960 Mustang built entirely from three.js primitive geometries.
export function Mustang(props) {
  return (
    <group {...props}>
      {/* body */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.6, 1.8]} />
        <meshStandardMaterial color="#8b1a1a" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* hood, sitting on the front half of the body */}
      <mesh position={[1.15, 1.09, 0]} castShadow>
        <boxGeometry args={[1.6, 0.18, 1.8]} />
        <meshStandardMaterial color="#8b1a1a" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* cabin / greenhouse, set back from the hood */}
      <mesh position={[-0.35, 1.4, 0]} castShadow>
        <boxGeometry args={[1.9, 0.7, 1.55]} />
        <meshStandardMaterial color="#8b1a1a" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* grille, a slim chrome slab on the nose */}
      <mesh position={[2.01, 0.85, 0]}>
        <boxGeometry args={[0.08, 0.4, 1.4]} />
        <meshStandardMaterial color="#c8c8c8" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* wheels: cylinders laid on their side so the axle runs across the car */}
      {[
        [1.35, 0.85],
        [1.35, -0.85],
        [-1.3, 0.85],
        [-1.3, -0.85],
      ].map(([x, z]) => (
        <mesh
          key={`${x}:${z}`}
          position={[x, 0.4, z]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.4, 0.4, 0.22, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export default Mustang;
