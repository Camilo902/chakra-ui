import React from 'react';
import { ChakraProvider, Container, Text, Center, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <ChakraProvider>
      <Container
        maxW="900px"
        backgroundImage="https://images.unsplash.com/photo-1488841887379-29a9388480e4?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        backgroundSize="cover"
        backgroundPosition="center 70%"
        height="200px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop="4"
        marginBottom="4"
        color="white"
      >
        <Text fontSize='2xl' color="white" textAlign="center" marginBottom="4"> DOMINA EL TERRENO</Text>
        <Center>
          <Button colorScheme='gray' variant='outline' color="white" _hover={{ color: "#FF5733", bg: "white", borderColor: "white" }} marginRight="3"> Ver Detalles </Button>
          <Button colorScheme='gray' variant='outline' color="white" _hover={{ color: "#FF5733", bg: "white", borderColor: "white" }}> Ver Video </Button>
        </Center>
      </Container>
    </ChakraProvider>
  );
};

export default Header;
