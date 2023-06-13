import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Project = () => {
  const mount = useRef(null);
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);
  }, []);

  return <div ref={mount} />;
};

export default Project;