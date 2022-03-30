export interface ILocation {
  id: string;
  name: string;
  dimension: string;
}

export interface ICharacter {
  id: string;
  name: string;
  species: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  status: string;
}

export interface IEpisode {
  id: string;
  name: string;
  air_date: string;
}
