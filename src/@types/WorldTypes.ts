export interface WorldFeature {
  type: string,
  geometry: GeometryMultiPolygon | GeometryPolygon,
  properties: {
    ADMIN: string,
    ISO_A3: string,
  }
}

export interface GeometryMultiPolygon {
  type: 'MultiPolygon',
  coordinates: Array<Array<Array<[number, number]>>>,
}

export interface GeometryPolygon {
  type: 'Polygon',
  coordinates: Array<Array<[number, number]>>,
}

export interface World {
  type: string,
  features: WorldFeature[],
}