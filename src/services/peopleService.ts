import { PeopleApiResponse, Person } from '../types/people';



export const fetchPeople = async (page: number): Promise<PeopleApiResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return {
    results: data.results.map((person: Person) => ({
      name: person.name,
      height: person.height,
      mass: person.mass,
      hair_color: person.hair_color,
      skin_color: person.skin_color,
      eye_color: person.eye_color,
      birth_year: person.birth_year,
      gender: person.gender,
      url: person.url,
    })),
    count: data.count,
  };
};
