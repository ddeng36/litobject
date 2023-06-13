import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

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
        75, window.innerWidth / window.innerHeight, 0.2, 1000,
      );
      const boxGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(boxGeometry, boxMaterial);
      scene.add(cube);
      camera.position.set(0,0,0.3);
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.05;
        renderer.render(scene, camera);
      }
      animate();
      renderer.render(scene, camera);
      mount.current.appendChild(renderer.domElement);
    }
  }, [renderer]);

  return <div ref={mount} />;
};

export default Project;