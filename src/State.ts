import * as d3 from 'd3';
import { CountryPopulation } from './@types/PopulationTypes';
import { CountryProperties, World } from './@types/WorldTypes';

type ChangeListener = (newSelectedCountry: CountryProperties | null) => void;

const MAP_DATA_URL = '/data/countries.json';
const POPULATION_DATA_URL = '/data/population.csv';
class State {
  private worldMap: World | null;
  private selectedCountry: CountryProperties | null;

  private changeListener: ChangeListener | null;

  private maxPopulation: number;

  constructor() {
    this.worldMap = null;
    this.changeListener = null;
    this.selectedCountry = null;
    this.maxPopulation = 0;
  }

  public async init() {
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
      // .sort((a, b) => b.properties.population - a.properties.population),
    }

    // Find max population
    this.maxPopulation = this.worldMap.features.reduce((max, feature) => Math.max(max, feature.properties.population), 0);
  }

  public addChangeListener(l : ChangeListener) {
    this.changeListener = l;
  }

  public setSelectedCountry(country: CountryProperties | null) {
    if (this.changeListener) {
      this.changeListener(country);
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
}

const state = new State();
export default state;
