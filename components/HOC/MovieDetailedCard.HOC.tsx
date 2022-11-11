import { Box, Center, Text, HStack, VStack, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { movie } from '../../definitions/movie';

type props = {
  movie: movie;
};

const MovieCardDetailHOC = ({ movie }: props) => {
  return (
    <HStack maxW='40rem' bg='#FACB47'>
      <Center>
        <Image
          src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
          alt={movie.title}
          width='250'
          height='250'
        />
      </Center>
      <VStack maxW='20rem'>
        <Heading>{movie.title}</Heading>
        <HStack>
          <Text>{movie.original_language}</Text>
          <Text>{movie.vote_average}</Text>
        </HStack>
        <Text>{movie.overview}</Text>
        <Text>{}</Text>
      </VStack>
    </HStack>
  );
};

export default MovieCardDetailHOC;
