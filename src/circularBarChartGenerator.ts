import * as d3 from 'd3';
import state from './State';

export default function circularBarChartGenerator() {
  const worldMap = state.getWorldMap()!;
  const data = worldMap.features.map((f) => ({
    name: f.properties.ADMIN,
    value: f.properties.population,
    code: f.properties.ISO_A3,
  }));

  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const width = window.innerHeight - margin.left - margin.right;
  const height = window.innerHeight - margin.top - margin.bottom;

  const innerRadius = 0.25 * height;
  const outerRadius = 0.4 * width;

  const svg = d3.select('#chart')
    .append('svg')
    .style('position', 'relative')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${width / 2 + margin.left},${height / 2 + margin.top})`)


  const x = d3.scaleBand()
    .range([0, 2 * Math.PI])
    .align(0)
    .domain(data.map((d) => d.name));
  
  const y = d3.scaleRadial()
    .range([innerRadius, outerRadius])
    .domain([0, state.getMaxPopulation()]);

  svg.append('g')
  .selectAll('path')
  .data(data)
  .enter()
  .append('path')
    .attr('fill', 'rgba(0,0,0,0.02)')
    .attr('d', d3.arc<{ name: string, value: number }>() 
        .innerRadius((d) => y(d.value))
        .outerRadius(outerRadius)
        .startAngle((d) =>  Number(x(d.name)))
        .endAngle((d) => Number(x(d.name)) + x.bandwidth())
        .padAngle(0.01)
        .padRadius(innerRadius)
    )
  .on('mouseover', (e: MouseEvent, data) => {
    if (e.target === null) return;
    d3.select(e.target as SVGPathElement).attr('fill', 'red');
    state.setSelectedCountry({
      ADMIN: data.name,
      ISO_A3: data.code,
      population: data.value,
    });
  })
  .on('mouseout', (e: MouseEvent) => {
    if (e.target === null) return;
    state.setSelectedCountry(null);
    d3.select(e.target as SVGPathElement).attr('fill', 'rgba(0,0,0,0.02)');
  });
  
  
  svg.append('g')
  .selectAll('path')
  .data(data)
  .enter()
  .append('path')
    .attr('fill', (d: any) => d3.interpolateSpectral(d['value'] / state.getMaxPopulation()))
    .attr('d', d3.arc<{ name: string, value: number }>() 
        .innerRadius(innerRadius)
        .outerRadius((d) => y(d.value))
        .startAngle((d) =>  Number(x(d.name)))
        .endAngle((d) => Number(x(d.name)) + x.bandwidth())
        .padAngle(0.001)
        .padRadius(innerRadius)
    )


  svg.append('g')
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
    .attr('text-anchor', (d) => (Number(x(d.name)) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? 'end' : 'start')
    .attr('transform', (d) => 'rotate(' + ((Number(x(d.name)) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ')'+'translate(' + (y(d.value)+10) + ',0)')
  .append('text')
    .text((d) => d.name)
    .attr('transform', (d) => (Number(x(d.name)) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? 'rotate(180)' : 'rotate(0)')
    .style('font-size', '11px')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '5px')
    .style('cursor', 'default')
}
