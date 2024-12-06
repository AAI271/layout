import { PlanetsApiResponse, Planet } from '../types/planets';


export const fetchPlanets = async (page: number): Promise<PlanetsApiResponse> => {
  const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return {
    results: data.results.map((planet: Planet) => ({
      name: planet.name,
      rotation_period: planet.rotation_period,
      orbital_period: planet.orbital_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      surface_water: planet.surface_water,
      url: planet.url,
    })),
    count: data.count,
  };
};
