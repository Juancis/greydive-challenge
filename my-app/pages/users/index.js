import { Box, Button, Center, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../src/app/services/users";
import UsersTable from "../../src/app/user";

const UsersPage = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    getUsers().then(({ response }) => setResponse(response));
  }, []);

  if (!response) return <div>Loading...</div>;

  return (
    <Flex w="80%" h="100%" margin="0 auto" flexDirection="column">
      <UsersTable users={response.users} />
      <Center>
        <Button
          _hover={{
            bg: "green.500",
            transition: "background 0.2s ease-in-out",
          }}
          marginY="20px"
          background="pink.200"
          //#9c003c
          color="white"
          w="40%"
          fontWeight="300"
          fontSize="20px"
          textShadow="1px 1px 2px black"
        >
          <Link
            href="/form"
            _hover="textDecoration none"
            display="flex"
            alignItems="center"
          >
            {`Volver a formulario `}
            <ExternalLinkIcon mx="5px" color="white" fontSize="15px" />
          </Link>
        </Button>
      </Center>
    </Flex>
  );
};

export default UsersPage;
