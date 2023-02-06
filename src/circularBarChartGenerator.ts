import * as d3 from 'd3';

const testData = Array.from(Array(255))
  .map((_, i) => ({ name: `Test${i}`, value: i }));

// shuffle array
// for (let i = testData.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [testData[i], testData[j]] = [testData[j], testData[i]];
// }

console.log(testData);

export default function circularBarChartGenerator() {
  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const width = window.innerHeight - margin.left - margin.right;
  const height = window.innerHeight - margin.top - margin.bottom;

  const innerRadius = 0.22 * width;
  const outerRadius = 0.4 * width;

  const svg = d3.select('#chart')
    .append('svg')
    .style('position', 'relative')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${width / 2 + margin.left},${height / 2 + margin.top})`);

  const x = d3.scaleBand()
    .range([0, 2 * Math.PI])
    .align(0)
    .domain(testData.map((d) => d.name));
  
  const y = d3.scaleRadial()
    .range([innerRadius, outerRadius])
    .domain([0, 255]);
  
  svg.append('g')
  .selectAll('path')
  .data(testData)
  .enter()
  .append('path')
    .attr('fill', (d: any) => d3.interpolateSpectral(d['value'] / 255))
    .attr('d', d3.arc<{ name: string, value: number }>()     // imagine your doing a part of a donut plot
        .innerRadius(innerRadius)
        .outerRadius((d) => y(d.value))
        .startAngle((d) =>  Number(x(d.name)))
        .endAngle((d) => Number(x(d.name)) + x.bandwidth())
        .padAngle(0.001)
        .padRadius(innerRadius)
    )
  .on('mouseover', (e: MouseEvent, data) => {
    if (e.target === null) return;
    d3.select(e.target as SVGPathElement).attr('fill', 'red');
    // e.target.setAttribute('fill', 'red');
    console.log(data);
  })
  .on('mouseout', (e: MouseEvent, data) => {
    if (e.target === null) return;
    d3.select(e.target as SVGPathElement).attr('fill', (d: any) => d3.interpolateSpectral(d['value'] / 255));
  });


  svg.append('g')
  .selectAll('g')
  .data(testData)
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
      
}
