import * as d3 from 'd3';
import { World } from './@types/WorldTypes';

const TEXTURE_WIDTH = 640 * 4;
const TEXTURE_HEIGHT = 320 * 4;

export default async function textureGenerator(countyISO?: string): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = TEXTURE_WIDTH;
  canvas.height = TEXTURE_HEIGHT;
  const context = canvas.getContext('2d')!;

  const worldURL = '/data/countries.json';

  const world = await d3.json<World>(worldURL);
  if (!world) return '';

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
        if (country.properties.ISO_A3 === countyISO) {
          context.fillStyle = 'rgb(255, 155, 0)';
        } else {
          context.fillStyle = 'rgb(150, 150, 150)';
        }
        context.strokeStyle = 'rgb(0,0,0,0.4)';
        context.stroke();
        context.fill();
      });
    });
  });

  // canvas to data url
  const dataURL = canvas.toDataURL();
  return dataURL;
}
