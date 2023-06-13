import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const Project = () => {
  const mount = useRef(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    if (!renderer) {
      const newRenderer = new THREE.WebGLRenderer();
      newRenderer.setSize(window.innerWidth, window.innerHeight);
      setRenderer(newRenderer);
    }
  }, [renderer]);

  useEffect(() => {
    if (renderer) {
      const scene = new THREE.Scene();
      const axesHelper = new THREE.AxesHelper(5);
      scene.add(axesHelper);
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.2,
        1000
      );
      
      //cube
      const boxGeometry = new THREE.BoxGeometry(5, 5, 5);
      const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(boxGeometry, boxMaterial);
      scene.add(cube);

      //plane
      const planeGeometry = new THREE.PlaneGeometry(30,30);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotateX(-Math.PI / 2);
      scene.add(plane);

      //gridHelprt
      const gridHelper = new THREE.GridHelper(30,30);
      scene.add(gridHelper);


      camera.position.set(-10, 30, 30);
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        renderer.render(scene, camera);
      };
      animate();
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();
      renderer.render(scene, camera);
      mount.current.appendChild(renderer.domElement);
    }
  }, [renderer]);

  return <div ref={mount} />;
};

export default Project;
