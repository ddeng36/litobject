import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
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
      const axesHelper = new THREE.AxesHelper(100);
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

      //sphere
      const sphereGeometry = new THREE.SphereGeometry(5, 30, 30);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0xffff00,
        wireframe: false,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      //gui
      const gui = new dat.GUI();
      const options ={
        sphereColor: 0xffff00,
        wireframe: false,
        speed: 0.001
      }
      gui.addColor(options, 'sphereColor').onChange(()=>{
        sphereMaterial.color.set(options.sphereColor)
      })
      gui.add(options, 'wireframe').onChange(()=>{
        sphereMaterial.wireframe = options.wireframe
      })
      gui.add(options, 'speed', 0, 0.5).onChange(()=>{
        options.speed = options.speed
      })

      //plane
      const planeGeometry = new THREE.PlaneGeometry(30, 30);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotateX(-Math.PI / 2);
      scene.add(plane);

      //gridHelprt
      const gridHelper = new THREE.GridHelper(30, 30);
      scene.add(gridHelper);


      //ambientlight
      const ambientLight = new THREE.AmbientLight(0x333333, );
      scene.add(ambientLight);

      //directionalLight
      const directionalLight = new THREE.DirectionalLight(0xffffff);
      scene.add(directionalLight);

      //camera
      camera.position.set(10, 10, 10);


      
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        sphere.position.y += options.speed;
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
