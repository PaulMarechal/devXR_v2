import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useKeyboardControls, PointerLockControls } from "@react-three/drei";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";

const SPEED = 5;
const velocity = new THREE.Vector3();
const forwardDirectionVector = new THREE.Vector3();
const sidewaysDirectionVector = new THREE.Vector3();

const FPScontrols = () => {
  const [subscribeToKeys, getKeys] = useKeyboardControls();
  const rigidBodyRef = useRef();
  const { camera } = useThree();

  useFrame((state, delta) => {
    //get input key values on every frame
    const {
      forwardKeyPressed,
      rightKeyPressed,
      backwardKeyPressed,
      leftKeyPressed
    } = getKeys();

    //check if ref has been linked to rigid body
    if (rigidBodyRef.current) {
      //get current position of rigid body (on every frame)
      const pos = rigidBodyRef.current.translation();

      //copy rigid body position to camera (on every frame)
      camera.position.copy(pos);
      camera.position.y += 1.5; // Adjust camera height

      //'front direction' takes true/false values from keyboard input
      //  and treats them as 1/0. When summed together you get a number
      //  on the z-axis telling you if you're going forward or backward.
      //Forward is in the -z direction
      forwardDirectionVector.set(0, 0, -forwardKeyPressed + backwardKeyPressed);

      //same for x, left is in the -x direction
      sidewaysDirectionVector.set(rightKeyPressed - leftKeyPressed, 0, 0);

      // Log the direction vectors
    //   console.log("Forward Direction:", forwardDirectionVector);
    //   console.log("Sideways Direction:", sidewaysDirectionVector);

      /**
       * VELOCITY SETUP
       */

      // Reset the velocity before adding new vectors
      velocity.set(0, 0, 0);

      //combine forward & side directions into one vector
      //  (just for concise writing). Its the same same as
      //  doing { x: sideDir.x, y:0, z: forwardDir.z}
      velocity.addVectors(forwardDirectionVector, sidewaysDirectionVector);

      // Log the velocity before normalization
    //   console.log("Velocity before normalization:", velocity);

      //force the combined vector to a magnitude of 1
      if (velocity.length() > 0) {
        velocity.normalize();
      }

      //give the combined vector a desired magnitude
      //i.e multiply direction by speed to get velocity
      velocity.multiplyScalar(SPEED);

      //account for different frame rates per user
      //'20' here is an arbitrary tuning value though
      velocity.multiplyScalar(delta * 20);

      // Log the velocity before applying rotation
    //   console.log("Velocity before applying rotation:", velocity);

      //account for the pointerLock direction with some 'math'
      //  so that left, right etc are all relative to camera direction
      velocity.applyEuler(camera.rotation);
      //applying camera rotation to velocity can also be done with
      // velocity.applyQuaternion(camera.quaternion);

      // Log the final velocity
    //   console.log("Final Velocity:", velocity);

      //set the velocity of your capsule collider to the result velocity above
      rigidBodyRef.current.setLinvel({
        x: velocity.x,
        y: 0, //zero this if you don't have 'jump' functionality
        z: velocity.z
      });
    }
  });
  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        colliders={false}
        mass={1}
        position={[1, 1, 1]} // Adjust initial position
        enabledRotations={[false, false, false]}
        friction={2}
        linearDamping={0.5}
        angularDamping={0.5}
        restitution={0.2}
      >
        <CapsuleCollider args={[1, 0.25]} />
      </RigidBody>
      {/* <PointerLockControls /> */}
    </>
  );
};

export default FPScontrols;
