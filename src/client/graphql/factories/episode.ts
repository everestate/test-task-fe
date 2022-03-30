import { IEpisode } from '../../../types/interfaces';
import { GetCharacters_characters_results_episode } from '../queries/getCharacters';

export function createEpisode(
  data: GetCharacters_characters_results_episode
): IEpisode {
  return {
    id: data.id!,
    name: data.name!,
    air_date: data.air_date!,
  };
}
