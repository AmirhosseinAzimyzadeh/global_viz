import * as THREE from 'three';
import textureGenerator from './textureGenerator';

export {}



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas
    id="canvas"
    style="max-width: 100%; height: 100%;"
  ></canvas>
`;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
canvas.width = WIDTH;
canvas.height = HEIGHT;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

const fov = 75;
const aspect = WIDTH / HEIGHT;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();
// scene.background = new THREE.Color('white')

const geometry = new THREE.SphereGeometry(1, 32, 32);

const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });  // greenish blue

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

renderer.render(scene, camera);

textureGenerator();