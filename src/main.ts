import * as THREE from 'three';
import textureGenerator from './textureGenerator';

export {}



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas
    id="canvas"
    style="max-width: 100%; height: 100vh;"
  ></canvas>
`;

async function initialize() {
  let WIDTH = window.innerWidth;
  let HEIGHT = window.innerHeight;

  const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  const fov = 90;
  let aspect = WIDTH / HEIGHT;
  const near = 0.01;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // const camera = new THREE.OrthographicCamera(-2, 2, 2, -2, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('rgb(235, 235, 235)');

  const geometry = new THREE.SphereGeometry(1, 100, 100);

  const textureURI = await textureGenerator('USA');

  const texture = new THREE.TextureLoader().load(textureURI);
  const material = new THREE.MeshPhongMaterial({ map: texture });

  const sphere = new THREE.Mesh(geometry, material);
  sphere.rotation.y -= 2;

  scene.add(sphere);

  // light
  const light = new THREE.SpotLight('#fff', 0.2);
  light.position.set(-2, 2, 5);
  light.castShadow = true;
  scene.add(light);

  const areaLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(areaLight);

  renderer.render(scene, camera);

  // loop
  function animate() {
    requestAnimationFrame(animate);
    // sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
  }

  animate();
}

initialize();
