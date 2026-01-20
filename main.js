import * as THREE from "three"; 
import { color } from "three/tsl";
import { Color } from "three/webgpu"; 
const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera); 
camera.position.z = 5;

console.log(camera.position);
 
/* MESH => {Shape and Size} + {Material} */
const cubeGeometry = new THREE.BoxGeometry(2,2,2); 
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true, });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); 
scene.add(cube);

// LIGHTS 
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(2,2,2); 
scene.add(light);

//Renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement) // The renderer 

function animate() {
  cube.rotateX(0.01); 
  cube.rotateY(0.01); 
  
  renderer.render(scene,camera); 

}

renderer.setAnimationLoop(animate); //