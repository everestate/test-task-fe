/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharacters
// ====================================================

export interface GetCharacters_characters_results_origin {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
}

export interface GetCharacters_characters_results_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
}

export interface GetCharacters_characters_results_episode {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The air date of the episode.
   */
  air_date: string | null;
}

export interface GetCharacters_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The character's origin location
   */
  origin: GetCharacters_characters_results_origin | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The character's last known location
   */
  location: GetCharacters_characters_results_location | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (GetCharacters_characters_results_episode | null)[];
}

export interface GetCharacters_characters {
  __typename: "Characters";
  results: (GetCharacters_characters_results | null)[] | null;
}

export interface GetCharacters {
  /**
   * Get the list of all characters
   */
  characters: GetCharacters_characters | null;
}

export interface GetCharactersVariables {
  page: number;
}
