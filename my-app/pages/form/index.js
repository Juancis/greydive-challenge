import { Box, Center, Flex, Link, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createUser } from "../../src/app/services/users";
import svg from "../../public/cool-background.svg";
import data from "../../db.json";
import Form from "../../src/components/form/Form.js";
import FormItem from "../../src/components/form/FormItem.js";

export default function FormPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { items } = data;
  const toast = useToast();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const { response } = await createUser(data);
    setUser(response);
  };

  useEffect(() => {
    if (user) {
      if (user === "User created") {
        toast({
          title: "Información enviada.",
          position: "bottom",
          description: (
            <Link href="/users">Haz click aquí para ver los resultados.</Link>
          ),
          status: "success",
          isClosable: true,
        });
        reset();
        setUser(null);
        setLoading(false);
      } else {
        toast({
          title: "Error al enviar la información.",
          position: "bottom",
          description: "Error al enviar la información",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }, [user]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width={["90%", "90%", "60%", "30%"]}
      margin="0 auto"
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        borderRadius="10px"
        border="1px solid grey"
        boxShadow="10px 8px rgba(0,0, 0, .64)"
        backgroundColor="white"
      >
        <Center
          minH="100px"
          w="100%"
          borderTopRadius="10px"
          background="pink.200"
          boxShadow={"0px -10px 6px 0px white inset"}
          backgroundImage={svg.src}
          backgroundSize="cover"
        >
          <Text
            color="white"
            fontSize="40px"
            fontWeight="50"
            textAlign="center"
            textShadow="1px 1px 2px black"
          >
            Formulario GreyDive
          </Text>
        </Center>
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} padding="1rem">
          {items.map((item) => {
            return (
              <FormItem
                key={`form-item-${item.name}`}
                item={item}
                register={register}
                errors={errors}
                user={user}
                loading={loading}
                padding="10px"
              />
            );
          })}
        </Form>
      </Box>
    </Flex>
  );
}
