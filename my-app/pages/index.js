import { Button, Center, Link, Text } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <Center h="100vh" display="flex" flexDirection="column">
      <Text fontSize="2xl" fontWeight="600" letterSpacing="2px">
        Bienvenido/a! Por favor, haz click en el botón para continuar.
      </Text>
      <Button
        _hover={{
          bg: "green.500",
          transition: "background 0.2s ease-in-out",
        }}
        marginY="20px"
        background="pink.200"
        //#9c003c
        color="white"
        w="20%"
        fontWeight="300"
        fontSize="20px"
        textShadow="1px 1px 2px black"
      >
        <Link href="/form" _hover="textDecoration none">
          Ir al formulario
        </Link>
      </Button>
    </Center>
  );
}
