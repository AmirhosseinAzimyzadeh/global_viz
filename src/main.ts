import * as THREE from 'three';
import circularBarChartGenerator from './circularBarChartGenerator';
import Debounce from './Debounce';
import state from './State';
import textureGenerator from './textureGenerator';

export {}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas
    id="canvas"
    style="max-width: 100%; height: 100vh;"
  ></canvas>
`;


const debounce = new Debounce();

async function initialize() {
  await state.init();
  let WIDTH = window.innerWidth;
  let HEIGHT = window.innerHeight;

  const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  const fov = 2;
  let aspect = WIDTH / HEIGHT;
  const near = 0.01;
  const far = 9000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('rgb(245, 245, 245)');

  const geometry = new THREE.SphereGeometry(10, 50, 50);

  const textureURI = await textureGenerator(null);

  const initialTexture = new THREE.TextureLoader().load(textureURI);
  const material = new THREE.MeshPhongMaterial({
    map: initialTexture,
    opacity: 1,
    color: 'rgb(245, 245, 245)'
  });
  material.needsUpdate = true;

  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.z = -1000;
  sphere.material.needsUpdate = true;

  // rotate to 0,0 coordinate
  sphere.rotation.y = -Math.PI / 2;

  scene.add(sphere);

  // light
  const light = new THREE.SpotLight('#fff', 0.5);
  light.position.set(-1, 2, 2);
  scene.add(light);

  // ambient light
  const ambientLight = new THREE.AmbientLight('#fff', 0.8);
  scene.add(ambientLight);

  return {
    sphere,
    renderer,
    camera,
    material,
    scene
  }
}


function main() {
    initialize().then(({
      sphere,
      renderer,
      scene,
      camera,
    }) => {
    circularBarChartGenerator();

    state.addChangeListener(() => {
      debounce.use(() => {
        textureGenerator(state.getSelectedCountry()!?.ISO_A3).then((newTex) => {
          new THREE.TextureLoader()
            .load(
              newTex,
              (t) => {
                sphere.material.map = t;
              }
            );
        });
      })
    })

    let yRotateTarget = (-Math.PI / 2);
    let xRotateTarget = 0;

    window.addEventListener('resize', () => {
        circularBarChartGenerator();
        const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    );
    const animate: () => void = () => {
      requestAnimationFrame(animate);

      const center = state.getSelectedCountryCenter();
      if (center) {
        // rotate to center
        const [long, lat] = center;
        yRotateTarget = (-Math.PI / 2) - (((long) * Math.PI) / 180);
        xRotateTarget = (((lat) * Math.PI) / 90) / 2;
        sphere.rotation.x = xRotateTarget;
        sphere.rotation.y = yRotateTarget;
      } else {
        sphere.rotation.y += 0.001;
        xRotateTarget = 0;
        yRotateTarget = (-Math.PI / 2);
      }

      renderer.render(scene, camera);
    }
    animate();
  });
}

main();

