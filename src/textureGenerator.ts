import * as d3 from 'd3';
import state from './State';

const TEXTURE_WIDTH = 640 * 4;
const TEXTURE_HEIGHT = 320 * 4;

let canvas: HTMLCanvasElement | null = null;

export default async function textureGenerator(): Promise<string> {
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
        if (country.properties.ISO_A3 === state.getSelectedCountry()?.ISO_A3) {
          context.fillStyle = 'rgb(255, 155, 0)';
        } else {
          // interpolate color
          const population = country.properties.population;
          const maxPopulation = state.getMaxPopulation();
          context.fillStyle = d3.interpolateSpectral(population / maxPopulation);
          // context.fillStyle = 'rgb(150, 150, 150)';
        }
        context.strokeStyle = 'white';
        context.stroke();
        context.fill();
      });
    });
  });

  // canvas to data url
  const dataURL = canvas.toDataURL();
  return dataURL;
}
