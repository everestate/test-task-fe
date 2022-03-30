import React from 'react';
import styled from '@emotion/styled';

import { IEpisode } from '../../../types/interfaces';

const Container = styled('div')`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

const Episode = styled('div')`
  margin-top: 1rem;
`;

const EpisodeName = styled('div')`
  font-size: 1.25rem;
`;

const EpisodeAirDate = styled('div')`
  color: cyan;
`;

type EpisodesProps = {
  episodes: IEpisode[];
};

const Episodes: React.FC<EpisodesProps> = ({ episodes }) => {
  return (
    <Container>
      {episodes.map(episode => (
        <Episode key={episode.id}>
          <EpisodeName>{episode.name}</EpisodeName>
          <EpisodeAirDate>{episode.air_date}</EpisodeAirDate>
        </Episode>
      ))}
    </Container>
  );
};

export default Episodes;
