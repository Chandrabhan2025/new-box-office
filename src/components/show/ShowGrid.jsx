import React from 'react';
import { FlexGrid } from '../Styled';
import IMAGE_NOT_FOUND from '../../image/not-found.png';
import ShowCard from './ShowCard';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
