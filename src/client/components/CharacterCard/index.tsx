import React from 'react';
import styled from '@emotion/styled';
import Episodes from './Episodes';
import StarIcon from './StarIcon';

import type { ICharacter, IEpisode } from '../../../types/interfaces';

const Card = styled('div')`
  width: 450px;
  flex: 0 1 450px;
  border-radius: 0.75rem;
  background: dimgrey;
  box-shadow: 1px 5px 15px 4px cyan;
  display: flex;
  flex-direction: column;
  will-change: transform;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 1rem;
  color: white;

  &:hover {
    transform: scale(1.1);
  }
`;

const CharacterInformationContainer = styled('div')`
  width: 100%;
  display: flex;
  position: relative;
`;

const FavoriteStar = styled('div')<{ $isFavorite: boolean }>`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 2;
  right: 0;
  top: 20px;
  cursor: pointer;

  svg {
    fill: ${({ $isFavorite }) => ($isFavorite ? 'cyan' : 'white')};

    &:hover {
      fill: cyan;
    }
  }
`;

const ImageContainer = styled('div')`
  width: 45%;
  border: 2px solid cyan;
  margin: 1rem;
`;

const Image = styled('img')`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const InfoContainer = styled('div')`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled('div')`
  font-size: 1.25rem;
`;

const Status = styled('div')`
  color: cyan;
  font-weight: 600;
`;

const AboutItemsContainer = styled('div')`
  width: 100%;
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill);
`;

const AboutItem = styled('div')`
  flex: 0 1 33%;
  margin: 0.5rem 0;
`;

const AboutItemName = styled('div')`
  color: cyan;
  font-weight: 600;
`;
const AboutItemValue = styled('div')``;

const ExpandEpisodesButton = styled('button')`
  outline: 0;
  background: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 2px solid cyan;
  border-radius: 3px;
  color: cyan;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    background: cyan;
    color: white;
  }
`;

type CharacterCardProps = {
  character: ICharacter;
  isFavorite: boolean;
  episodes: IEpisode[];
  onToggleFavoriteCharacter: (characterId: string) => void;
  showEpisodes: boolean;
  onToggleEpisodes: (characterId: string | undefined) => void;
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  episodes,
  onToggleFavoriteCharacter,
  isFavorite,
  onToggleEpisodes,
  showEpisodes,
}) => {
  return (
    <Card>
      <CharacterInformationContainer>
        <FavoriteStar
          $isFavorite={isFavorite}
          onClick={() => onToggleFavoriteCharacter(character.id)}
        >
          <StarIcon />
        </FavoriteStar>
        <ImageContainer>
          <Image src={character.image} alt={character.name} />
        </ImageContainer>

        <InfoContainer>
          <Name>{character.name}</Name>
          <Status>{character.status}</Status>

          <AboutItemsContainer>
            <AboutItem>
              <AboutItemValue>{character.gender}</AboutItemValue>
              <AboutItemName>Gender</AboutItemName>
            </AboutItem>
            <AboutItem>
              <AboutItemValue>{character.origin.name}</AboutItemValue>
              <AboutItemName>Origin</AboutItemName>
            </AboutItem>
            <AboutItem>
              <AboutItemValue>{character.location.dimension}</AboutItemValue>
              <AboutItemName>Dimension</AboutItemName>
            </AboutItem>
            <AboutItem>
              <AboutItemValue>{character.species}</AboutItemValue>
              <AboutItemName>Species</AboutItemName>
            </AboutItem>
          </AboutItemsContainer>
        </InfoContainer>
      </CharacterInformationContainer>

      <ExpandEpisodesButton
        onClick={() =>
          onToggleEpisodes(showEpisodes ? undefined : character.id)
        }
      >
        {showEpisodes ? 'Less' : 'More'}
      </ExpandEpisodesButton>

      {showEpisodes && <Episodes episodes={episodes} />}
    </Card>
  );
};

export default CharacterCard;
