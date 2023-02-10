import * as d3 from 'd3';
import { World } from './@types/WorldTypes';
import state from './State';

const TEXTURE_WIDTH = 640 * 10;
const TEXTURE_HEIGHT = 320 * 10;

let canvas: HTMLCanvasElement | null = null;

const cache = new Map<string, string>();

const MAIN_MAP_KEY = 'main-map';
const WORLD_READY_KEY = 'world';

export default async function textureGenerator(countryCode: string | null): Promise<string> {

  if (countryCode === null && cache.has(WORLD_READY_KEY)) {
    return cache.get(WORLD_READY_KEY)!;
  }

  if (!canvas) {
    canvas = document.createElement('canvas');
  }
  canvas.width = TEXTURE_WIDTH;
  canvas.height = TEXTURE_HEIGHT;
  const context = canvas.getContext('2d')!;
  context.clearRect(0, 0, TEXTURE_WIDTH, TEXTURE_HEIGHT);

  const world = state.getWorldMap()!;

  context.clearRect(0, 0, TEXTURE_WIDTH, TEXTURE_HEIGHT);
  context.fillStyle = 'rgb(255, 255, 255)';
  context.fillRect(0, 0, TEXTURE_WIDTH, TEXTURE_HEIGHT);

  if (!cache.has(MAIN_MAP_KEY)) {
    renderMap(context, world);
    cache.set(MAIN_MAP_KEY, canvas.toDataURL())
  } else {
    const img = new Image();
    img.src = String(cache.get(MAIN_MAP_KEY));
    context.drawImage(img, 0, 0);
  }

  console.log({ countryCode });
  console.log({ world })
  const selectedCountry = world.features
    .find((c) => c.properties.ADMIN === countryCode);

  console.log({ selectedCountry })

  // draw selected country on top of others
  // if (selectedCountry) {
  //   console.log({ selectedCountry });
  //   const { geometry } = selectedCountry;
  //   let coordinates: [number, number][][][];
  //   if (geometry.type === 'Polygon') {
  //     coordinates = [geometry.coordinates];
  //   } else {
  //     coordinates = geometry.coordinates;
  //   }

  //   coordinates.forEach((closedLand) => {
  //     closedLand.forEach((land) => {
  //       context.beginPath();
  //       land.forEach(([long, lat]) => {
  //         // Convert lat long to Patterson Cylindrical Projection x y
  //         const x = (long + 180) * (TEXTURE_WIDTH / 360);
  //         const y = (lat + 90) * (TEXTURE_HEIGHT / 180);
  //         // rotate 90 degrees
  //         // flip vertically
  //         context.lineTo(x, TEXTURE_HEIGHT - y);
  //       });
  //       context.closePath();
  //       context.fillStyle = d3.interpolateSpectral(Number(state.getSelectedCountry()?.population) / state.getMaxPopulation());
  //       context.lineWidth = 10;
  //       context.strokeStyle = 'rgba(0,255,0,1)';
  //       context.stroke();
  //       context.fill();
  //     });
  //   });
  // }

  const finalCanvas = document.createElement('canvas');
  const padding = 300;
  finalCanvas.width = TEXTURE_WIDTH;
  finalCanvas.height = TEXTURE_HEIGHT + padding;
  // add two white bars on top and bottom
  const finalContext = finalCanvas.getContext('2d')!;
  finalContext.fillStyle = 'white';
  finalContext.fillRect(0, 0, TEXTURE_WIDTH, padding);
  finalContext.fillRect(0, 0, TEXTURE_WIDTH, padding/2);
  finalContext.fillRect(0, TEXTURE_HEIGHT + padding/2, TEXTURE_WIDTH, padding/2);
  finalContext.drawImage(canvas, 0, padding/2);
  
  // canvas to data url
  const dataURL = finalCanvas.toDataURL();
  if (countryCode === null) {
    cache.set(WORLD_READY_KEY, dataURL);
  }
  return dataURL;
}


function renderMap(context: CanvasRenderingContext2D, world: World) {
    world.features.forEach((country) => {
    const { geometry } = country;
    let coordinates: [number, number][][][];
    if (geometry.type === 'Polygon') {
      coordinates = [geometry.coordinates];
    } else {
      coordinates = geometry.coordinates;
    }

    coordinates.forEach((closedLand) => {
      closedLand.forEach((land) => {
        context.beginPath();
        land.forEach(([long, lat]) => {
          // Convert lat long to Patterson Cylindrical Projection x y
          const x = (long + 180) * (TEXTURE_WIDTH / 360);
          const y = (lat + 90) * (TEXTURE_HEIGHT / 180);
          // rotate 90 degrees
          // flip vertically
          context.lineTo(x, TEXTURE_HEIGHT - y);
        });
        context.closePath();
        // interpolate color
        const population = country.properties.population;
        const maxPopulation = state.getMaxPopulation();
        context.fillStyle = d3.interpolateSpectral(population / maxPopulation);
        context.strokeStyle = 'white';
        context.stroke();
        context.fill();
      });
    });
  })
}
