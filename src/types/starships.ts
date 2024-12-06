export interface Starship {
    name: string;
    model: string;
    cost_in_credits: string;
    length: string; 
    crew: string;
    passengers: string; 
    consumables: string;
    MGLT: string;
    starship_class: string; 
    url: string; 
  }
  

  export interface StarshipsApiResponse {
    results: Starship[];
    count: number;
  }