import * as d3 from 'd3';
import { World, WorldFeature } from './@types/WorldTypes';
import state from './State';

const TEXTURE_WIDTH = 640 * 10;
const TEXTURE_HEIGHT = 320 * 10;

let canvas: HTMLCanvasElement | null = null;

let WORLD_TEXTURE: string | null = null;

export default async function textureGenerator(countryCode: string | null): Promise<string> {
  if (countryCode === null && WORLD_TEXTURE !== null) {
    return WORLD_TEXTURE;
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

  if (!WORLD_TEXTURE) {
    renderMap(context, world);
    WORLD_TEXTURE = canvas.toDataURL();
    return WORLD_TEXTURE;
  }

  const img = await loadImage(WORLD_TEXTURE);
  context.drawImage(img, 0, 0, TEXTURE_WIDTH, TEXTURE_HEIGHT);

  if (countryCode) {
    const country = world.features.find((feature) => feature.properties.ISO_A3 === countryCode);
    if (country) {
      console.log(country.properties);
      drawACountry(
        'rgba(0,255,0)',
        'transparent',
        // d3.interpolateSpectral(country.properties.population / state.getMaxPopulation()),
        context,
        getCoordinates(country),
        5
      );
      return canvas.toDataURL();
    }
  }
  return WORLD_TEXTURE;
}


function renderMap(context: CanvasRenderingContext2D, world: World) {
    world.features.forEach((country) => {
    drawACountry(
      'white',
      d3.interpolateSpectral(country.properties.population / state.getMaxPopulation()),
      context,
      getCoordinates(country)
    );
  })
}


function drawACountry(
  strokeColor: string,
  fillColor: string,
  context: CanvasRenderingContext2D,
  coordinates: [number, number][][][],
  strokeWidth: number = 1,
) {
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
      context.fillStyle = fillColor;
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth;
      context.stroke();
      context.fill();
    });
  });
}

function getCoordinates(c: WorldFeature): [number, number][][][] {
  const { geometry } = c;
  let coordinates: [number, number][][][];
  if (geometry.type === 'Polygon') {
    coordinates = [geometry.coordinates];
  } else {
    coordinates = geometry.coordinates;
  }
  return coordinates;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}