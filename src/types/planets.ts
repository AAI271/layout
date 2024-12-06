export interface Planet {
    name: string; // Name of the planet
    rotation_period: string; // The number of standard hours it takes for the planet to complete a single rotation
    orbital_period: string; // The number of standard days it takes for the planet to complete a single orbit of its local star
    diameter: string; // The diameter of the planet in kilometers
    climate: string; // The climate of the planet (e.g., arid, temperate, tropical, etc.)
    gravity: string; // A number denoting the gravity of the planet, where "1" is Earth-standard gravity
    terrain: string; // The primary terrain of the planet (e.g., desert, grasslands, mountains, etc.)
    surface_water: string; // The percentage of the planet's surface that is naturally occurring water or bodies of water
    population: string; // The average population of sentient beings inhabiting the planet
    url: string; 
  }
  

  export interface PlanetsApiResponse {
    results: Planet[];
    count: number;
  }