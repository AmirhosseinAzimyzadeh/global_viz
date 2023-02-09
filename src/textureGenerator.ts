import * as d3 from 'd3';
import state from './State';

const TEXTURE_WIDTH = 640 * 10;
const TEXTURE_HEIGHT = 320 * 10;

let canvas: HTMLCanvasElement | null = null;

const cache = new Map<string, string>();

export default async function textureGenerator(countryCode: string | null): Promise<string> {
  const code = countryCode || 'world';
  console.log({ countryCode });
  // check cache
  if (cache.has(code)) {
    console.log('cache hit');
    return cache.get(code)!;
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

  let selectedIndex = -1;

  world.features.forEach((country, index) => {
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
        if (country.properties.ISO_A3 === state.getSelectedCountry()?.ISO_A3) {
          selectedIndex = index;
        } else {
          // interpolate color
          const population = country.properties.population;
          const maxPopulation = state.getMaxPopulation();
          context.fillStyle = d3.interpolateSpectral(population / maxPopulation);
          context.strokeStyle = 'white';
          context.stroke();
          context.fill();
        }
      });
    });
  });

  // draw selected country on top of others
  if (selectedIndex !== -1) {
    const { geometry } = world.features[selectedIndex];
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
        context.fillStyle = d3.interpolateSpectral(Number(state.getSelectedCountry()?.population) / state.getMaxPopulation());
        context.lineWidth = 10;
        context.strokeStyle = 'rgba(0,255,0,1)';
        context.stroke();
        context.fill();
      });
    });
  }

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
  cache.set(code, dataURL);
  return dataURL;
}
