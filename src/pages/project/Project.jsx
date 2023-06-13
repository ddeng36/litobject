import { render } from '@testing-library/react';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Project = () => {
  const mount = useRef(null);
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000,
    );
    renderer.render(scene, camera);
    mount.current.appendChild(renderer.domElement);
  }, []);

  return <div ref={mount} />;
};

export default Project;