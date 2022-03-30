import type { ICharacter, IEpisode } from '../../types/interfaces';

export type CharacterType = ICharacter & {
  episodes: IEpisode[];
  isFavorite: boolean;
};
