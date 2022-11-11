import { HStack, Text, VStack, useColorModeValue, Tag } from '@chakra-ui/react';
import React from 'react';

export const ReviewCardHOC = ({ reviewData }) => {
  return (
    <VStack
      bg='blackAlpha.50'
      gap='0.5rem'
      p='1rem'
      w='full'
      borderRadius={'4px'}
      alignItems={'start'}
    >
      <HStack>
        <Text
          maxW='8rem'
          noOfLines={1}
          fontWeight='600'
          textOverflow={'ellipsis'}
          isTruncated
        >
          {reviewData.publicKey}
        </Text>
        <Text color='gray.500' fontSize={'sm'}>
          2 days ago
        </Text>
      </HStack>
      <Text fontSize='sm'>{reviewData.review}</Text>
      <HStack>
        {
          <Tag as='button' colorScheme={'purple'} variant='subtle'>
            👍🏻 {reviewData.likes == 0 ? '' : reviewData.likes}
          </Tag>
        }
        {
          <Tag as='button' colorScheme={'facebook'} variant='subtle'>
            👎🏻 {reviewData.dislikes == 0 ? '' : reviewData.dislikes}
          </Tag>
        }
      </HStack>
    </VStack>
  );
};
