import * as d3 from 'd3';
import { CountryPopulation } from './@types/PopulationTypes';
import { CountryProperties, World } from './@types/WorldTypes';

type ChangeListener = (newSelectedCountry: CountryProperties | null) => void;

const MAP_DATA_URL = 'https://raw.githubusercontent.com/AmirhosseinAzimyzadeh/global_viz/main/public/data/countries.json';
const POPULATION_DATA_URL = 'https://raw.githubusercontent.com/AmirhosseinAzimyzadeh/global_viz/main/public/data/population.csv';
class State {
  private worldMap: World | null;
  private selectedCountry: CountryProperties | null;

  private changeListeners: ChangeListener[];

  private maxPopulation: number;

  private selectedCountryCenter: [number, number] | null;

  constructor() {
    this.worldMap = null;
    this.changeListeners = [];
    this.selectedCountry = null;
    this.maxPopulation = 0;
    this.selectedCountryCenter = null;
  }

  public async init() {
    const loadingElement = document.createElement('div');
    loadingElement.innerText = 'Loading...';
    loadingElement.style.position = 'absolute';
    loadingElement.style.top = '50%';
    loadingElement.style.left = '50%';
    loadingElement.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(loadingElement);

    const worldMap = await d3.json<World>(MAP_DATA_URL);
    const populationData = await d3.csv(POPULATION_DATA_URL) as CountryPopulation[];
    if (!worldMap) throw new Error('Failed to load world map data');
    if (!populationData) throw new Error('Failed to load population data');

    // Add population data to world map
    this.worldMap = {
      ...worldMap,
      features: worldMap.features
        // ISO not found in population data
        .filter((feature) => populationData.find((country) => country.countryCode === feature.properties.ISO_A3))
        .map((feature) => ({
          ...feature,
          properties: {
            ...feature.properties,
            population: Number(populationData.find((country) => country.countryCode === feature.properties.ISO_A3)?.population),
        }}))
    }

    // Find max population
    this.maxPopulation = this.worldMap.features.reduce((max, feature) => Math.max(max, feature.properties.population), 0);
    
    document.body.removeChild(loadingElement);
  }

  public addChangeListener(l : ChangeListener) {
    this.changeListeners.push(l);
  }

  public setSelectedCountry(country: CountryProperties | null) {
    this.changeListeners.forEach((l) => l(country));
    const d = document.getElementById('selected_country')!;

    if (country === null) {
      this.selectedCountryCenter = null;
      d.innerText = '--';
    } else {
      d.innerText = `${country.ADMIN} [2021] (${country.ISO_A3}) - Population: ${country.population.toLocaleString('en-US')}`;

      // find max and min lat long
      const c = this.worldMap?.features.find((f) => f.properties.ISO_A3 === country.ISO_A3)!;
      let minLat = Infinity;
      let maxLat = -Infinity;
      let minLong = Infinity;
      let maxLong = -Infinity;

      const { geometry } = c;
      let coordinates: [number, number][][][];
      if (geometry.type === 'Polygon') {
        coordinates = [geometry.coordinates];
      } else {
        coordinates = geometry.coordinates;
      }

      const longestPolygonIndex = coordinates.reduce((maxIndex, polygon, index) => {
        if (polygon.length > coordinates[maxIndex].length) {
          return index;
        }
        return maxIndex;
      }, 0); 

      const firstPolygon = coordinates[longestPolygonIndex];
      firstPolygon.forEach((line) => {
          line.forEach(([long, lat]) => {
            minLat = Math.min(minLat, lat);
            maxLat = Math.max(maxLat, lat);
            minLong = Math.min(minLong, long);
            maxLong = Math.max(maxLong, long);
          });
        });
      this.selectedCountryCenter = [(minLong + maxLong) / 2, (minLat + maxLat) / 2];
    }
    this.selectedCountry = country;
  }

  public getSelectedCountry() {
    return this.selectedCountry;
  }

  public getWorldMap() {
    return this.worldMap;
  }

  public getMaxPopulation() {
    return this.maxPopulation;
  }

  public getSelectedCountryCenter() {
    return this.selectedCountryCenter;
  }
}

const state = new State();
export default state;
