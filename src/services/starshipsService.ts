import { StarshipsApiResponse, Starship } from '../types/starships';


export const fetchStarships = async (page: number): Promise<StarshipsApiResponse> => {
  const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return {
    results: data.results.map((starship: Starship) => ({
      name: starship.name,
      model: starship.model,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      consumables: starship.consumables,
      MGLT: starship.MGLT,
      starship_class: starship.starship_class,
      url: starship.url,
    })),
    count: data.count,
  };
};
