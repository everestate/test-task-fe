import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useState } from 'react';

import {
  GET_CHARACTERS_QUERY,
  GetCharacters,
  GetCharactersVariables,
} from '../client/graphql/queries/getCharacters';

import Layout from '../client/components/Layout';
import CharacterCard from '../client/components/CharacterCard';

import type { NextPage } from 'next';
import { createCharacter } from '../client/graphql/factories/character';
import { createEpisode } from '../client/graphql/factories/episode';
import Pagination from '../client/components/Pagination';

const CardContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

const DisplayFavoritesToggle = styled('button')`
  border: 2px solid white;
  background: 0;
  font-size: 1.25rem;
  margin: 0.5rem;
  padding: 0.25rem;
  color: white;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    color: dimgrey;
    background: white;
  }
`;

const Dashboard: NextPage = () => {
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [showEpisodesForCharacter, setShowEpisodesForCharacter] = useState<
    string | undefined
  >();
  const { data, loading } = useQuery<GetCharacters, GetCharactersVariables>(
    GET_CHARACTERS_QUERY,
    { variables: { page: 1 } }
  );

  const handleToggleEpisodes = (characterId?: string | undefined): void => {
    setShowEpisodesForCharacter(characterId);
  };

  const handleToggleFavoriteCharacter = async (): Promise<void> => {
    return;
  };

  const handleToggleFavorites = async (): Promise<void> => {
    setOnlyFavorites(v => !v);
  };

  if (loading) {
    return <Layout>Loading . . .</Layout>;
  }

  return (
    <Layout>
      <DisplayFavoritesToggle onClick={handleToggleFavorites}>
        {onlyFavorites ? 'Display All' : 'Display Favorites'}
      </DisplayFavoritesToggle>

      {data && (
        <CardContainer>
          {data.characters?.results?.map(data => {
            const character = createCharacter(data!);

            return (
              <CharacterCard
                key={character.name}
                character={character}
                episodes={data!.episode.map(episodeData =>
                  createEpisode(episodeData!)
                )}
                isFavorite={false}
                onToggleEpisodes={handleToggleEpisodes}
                onToggleFavoriteCharacter={handleToggleFavoriteCharacter}
                showEpisodes={character.id === showEpisodesForCharacter}
              />
            );
          })}

          <Pagination />
        </CardContainer>
      )}
    </Layout>
  );
};

export default Dashboard;
