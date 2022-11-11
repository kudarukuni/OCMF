import React, { useEffect, useState } from 'react';
import {
  Container,
  Center,
  Skeleton,
  VStack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { getDiscoverList } from '../lib/api/getDiscoverList';
import { movie } from '../definitions/movie';
import MovieCardHOC from './HOC/MovieCard.HOC';
import MovieCardDetailHOC from './HOC/MovieDetailedCard.HOC';

const Movies = () => {
  const [movies, setMovies] = useState<[movie] | null>();

  useEffect(() => {
    getDiscoverList(1).then((res: [movie] | null) => {
      if (res) {
         setMovies(res);
      } else {
        console.log('there was an error');
      }
    });
  }, []);

  return (
    <Container maxW='5xl' py='6rem'>
      <VStack gap='3rem'>
        {/* <HStack
          alignItems={'baseline'}
          gap='2rem'
          mx='auto'
          fontSize={'md'}
          fontWeight='300'
          color={'blackAlpha.700'}
        >
          <Text>New Releases</Text>
          <Text fontSize={'4xl'}>Adventure</Text>
          <Text>Comedy</Text>
          <Text>Crime</Text>
        </HStack> */}
        <Text fontSize='5xl' fontWeight={'700'}>
          Movies 🍿{' '}
        </Text>

        <Wrap align={'center'} justify='center'>
          {movies
            ? movies.map((movie: any, index: React.Key) => {
                return <MovieCardHOC key={index} movie={movie} />;
              })
            : [1, 2, 3, 4, 5, 6].map((number) => {
                return (
                  <Skeleton
                    key={number}
                    width={'280px'} 
                    height='400px'
                  />
                );
              })}
        </Wrap>
      </VStack>
    </Container>
  );
};

export default Movies;
