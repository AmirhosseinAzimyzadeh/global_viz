import * as THREE from 'three';
import circularBarChartGenerator from './circularBarChartGenerator';
import state from './State';
import textureGenerator from './textureGenerator';

export {}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas
    id="canvas"
    style="max-width: 100%; height: 100vh;"
  ></canvas>
`;

async function initialize() {
  await state.init();
  let WIDTH = window.innerWidth;
  let HEIGHT = window.innerHeight;

  const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  const fov = 90;
  let aspect = WIDTH / HEIGHT;
  const near = 0.01;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('rgb(245, 245, 245)');

  const geometry = new THREE.SphereGeometry(0.85, 30, 30);

  const textureURI = await textureGenerator();

  const texture = new THREE.TextureLoader().load(textureURI);
  const material = new THREE.MeshPhongMaterial({ map: texture });

  const sphere = new THREE.Mesh(geometry, material);
  sphere.rotation.y -= 2;

  scene.add(sphere);

  // light
  const light = new THREE.SpotLight('#fff', 0.5);
  light.position.set(-2, 2, 5);
  scene.add(light);

  // ambient light
  const ambientLight = new THREE.AmbientLight('#fff', 0.8);
  scene.add(ambientLight);

  return {
    sphere,
    renderer,
    camera,
    scene
  }
}


function main() {
    initialize().then(({ sphere, renderer, scene, camera }) => {
    circularBarChartGenerator();
    const animate = () => {
      requestAnimationFrame(animate);
      // sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.002;
      renderer.render(scene, camera);
    }
    animate();
  });
}
main();