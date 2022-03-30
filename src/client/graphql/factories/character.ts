import type { ICharacter } from '../../../types/interfaces';
import type { GetCharacters_characters_results } from '../queries/getCharacters';

export function createCharacter(
  data: GetCharacters_characters_results
): ICharacter {
  return {
    id: data.id!,
    name: data.name!,
    status: data.status!,
    origin: {
      id: data.origin!.id!,
      name: data.origin!.name!,
      dimension: data.origin!.dimension!,
    },
    species: data.species!,
    location: {
      id: data.location!.id!,
      name: data.location!.name!,
      dimension: data.location!.dimension!,
    },
    gender: data.gender!,
    image: data.image!,
  };
}
