import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../navigation/Footer';
import Header from '../navigation/Header';

const HomeLayout = ({children}: any) => {
  return (
    <Container maxW='full' p='0'>
      <Header />
      {children}
      {/* <Footer /> */}
    </Container>
  );
};

export default HomeLayout;
