import {
  Center,
  useDisclosure,
  Button,
  Text,
  HStack,
  VStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  Skeleton,
  ModalBody,
  ModalCloseButton,
  Tag,
  useColorModeValue,
  Divider,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { movie } from '../../definitions/movie';
import { review } from '../../definitions/review';
import { ReviewCardHOC } from '../HOC/ReviewCard.HOC';
import { movieDetails } from '../../definitions/movieDetails';
const ratingData: review[] = [
  {
    id: 13434,
    likes: 3,
    dislikes: 1,
    publicKey: 'a342905sfdhjgwe4586iodfgkjnw9j7m45j',
    review:
      'In publishing and graphic design, on meaningful content. Lorem ipsum may be used as a placeholder before final',
    rating: 6,
  },
  {
    id: 33456,
    likes: 18,
    dislikes: 0,
    publicKey: '7i4ng967j4jgjk6956u84nvfjnwe90345',
    review:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without  ',
    rating: 3.9,
  },
  {
    id: 3454,
    likes: 0,
    dislikes: 0,
    publicKey: 'asdsdfsdf42980ghjiodfgkjnwe9sdsd',
    review:
      'In publishing  meaningful content. Lorem ipsum may be used as a placeholder before final',
    rating: 2.2,
  },
  {
    id: 86345,
    likes: 1,
    dislikes: 8,
    publicKey: 'asdfasdfasdfasdfd4535jiodfgkjnwe90345',
    review:
      'In publishing and  emonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final',
    rating: 5,
  },
  {
    id: 345345,
    likes: 5,
    dislikes: 5,
    publicKey: 'asdfty5678342980ghjiodfgkjnwe90345',
    review:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final',
    rating: 7,
  },
];

type props = {
  movie: movie;
};

const MovieCardHOC = ({ movie }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movieDetails, setMovieDetails] = useState<movieDetails | undefined>();
  const [reviews, setReviews] = useState<review[]>(ratingData);

  useEffect(() => {
    if (!isOpen) return;
    // get movie details
    try {
      console.log('getting movie detail');
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=707bd4b8b3d2d5833e324e5e0ef49eb2&language=en-US`
        )
        .then((res) => {
          console.log('res - ', res.data);
          setMovieDetails(res.data);
        });
    } catch (error) {}
  }, [isOpen, movie]);


  return (
    <Center>
      <Modal
        size='3xl'
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior='outside'
      >
        <ModalOverlay />
        <ModalContent
          bg={useColorModeValue('white', 'blackAlpha.900')}
          color={useColorModeValue('black', 'white')}
        >
          <ModalCloseButton />
          <ModalBody p='2rem'>
            <VStack alignItems={'start'}>
              <HStack alignItems={'start'}>
                <Center onClick={onOpen} position='relative'>
                  <Image
                    src={
                      'https://image.tmdb.org/t/p/w500/' + movie?.poster_path
                    }
                    alt={movie?.title}
                    width='320'
                    height='250'
                    style={{
                      borderRadius: '0.4rem',
                    }}
                  />
                </Center>
                <VStack
                  p='1rem 1rem 1rem 1rem'
                  justifyContent={'space-between'}
                  h='32rem'
                  maxW='20rem'
                  gap={'1rem'}
                >
                  <VStack gap='1rem' alignItems='start'>
                    <VStack alignItems={'start'}>
                      <Heading fontWeight={'400'} fontSize='3xl'>
                        {movie?.title}
                      </Heading>
                      <HStack flexWrap={'wrap'}>
                        {movieDetails ? (
                          movieDetails.genres.map((genres, key) => (
                            <Tag my='0.4rem' key={key} colorScheme={'orange'}>
                              {genres.name}
                            </Tag>
                          ))
                        ) : (
                          <Skeleton height='20px' width={'50px'} />
                        )}
                      </HStack>
                    </VStack>
                    <Text
                      fontSize='sm'
                      color={useColorModeValue('black', 'whiteAlpha.800')}
                      noOfLines={8}
                    >
                      {movie?.overview}
                    </Text>
                    <VStack alignItems={'start'}>
                      <Text>
                        Runtime :{' '}
                        <Tag colorScheme={'yellow'}>
                          {movieDetails?.runtime} min
                        </Tag>
                      </Text>
                      <Text>
                        Release :{' '}
                        <Tag colorScheme='red'>
                          {movieDetails?.release_date}
                        </Tag>
                      </Text>
                    </VStack>
                  </VStack>
                  <HStack
                    alignItems={'baseline'}
                    alignSelf={'end'}
                    h='fit-content'
                  >
                    <Text fontSize='5xl' fontWeight={'300'}>
                      {movie?.vote_average}
                    </Text>
                    <Text
                      fontSize='3xl'
                      fontWeight={'300'}
                      color={useColorModeValue('black', 'whiteAlpha.500')}
                    >
                      / 10
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
              <Divider pt='1rem' />
              <VStack align={'start'} pt='2rem' w='full'>
                <Text fontSize={'2xl'} pb='1rem' fontWeight={'600'}>
                  Reviews 🔥
                </Text>
                <VStack align={'start'} gap='1rem'>
                  {reviews
                    ? reviews.map((review: review, key: React.Key) => {
                        return <ReviewCardHOC key={key} reviewData={review} />;
                      })
                    : 'Loading...'}
                </VStack>
                <VStack
                  borderRadius='4px'
                  p='2rem 0rem'
                  w='full'
                  alignItems={'start'}
                >
                  <Text fontWeight={'500'} pb='0.5rem' fontSize={'lg'}>
                    Add Movie Review
                  </Text>
                  <HStack w='full'>
                    <Input w='full' />
                    <Button
                      bg={useColorModeValue('black', '#FACB47')}
                      _hover={{
                        bg: useColorModeValue('black', '#FACB47'),
                        color: useColorModeValue('white', 'black'),
                      }}
                      color={useColorModeValue('white', 'black')}
                      paddingX={'2rem'}
                    >
                      Post Review
                    </Button>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Center onClick={onOpen} m={'0.5rem'} position='relative'>
        <Image
          src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
          alt={movie.title}
          width='250'
          height='250'
          style={{
            borderRadius: '0.4rem',
          }}
        />
      </Center>
    </Center>
  );
};

export default MovieCardHOC;
