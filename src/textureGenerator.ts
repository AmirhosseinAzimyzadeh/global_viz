import * as d3 from 'd3';
import * as THREE from 'three';
import { feature } from 'topojson-client';

export default function textureGenerator() {
  // world svg element
  const SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);
  const pathGenerator = d3.geoPath().projection(projection)

  const svg = d3.select(SVGElement)
    .append('path')
    .attr('class', 'sphere')
    .attr('d', path({ type: 'Sphere' }));

  d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
    .then((data: any) => {
      const countries = feature(data, data.objects.countries);
      svg.selectAll('path').data(countries?.features)
        .enter().append('path')
          .attr('class', 'country')
          // @ts-ignore
          .attr('d', pathGenerator);
    });

  document.body.appendChild(SVGElement);
}
