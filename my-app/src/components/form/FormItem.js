import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import ErrorMessage from "./ErrorMessage";
import { Spinner } from "@chakra-ui/react";

const FormItem = ({ item, register, errors, user, loading, ...props }) => {
  switch (item.type) {
    case "select":
      return (
        <FormControl {...props}>
          <FormLabel margin="0"> {item.label}</FormLabel>
          <Select
            placeholder="Selecciona un País"
            name={item.name}
            {...register(item.name, { required: true })}
            aria-invalid={errors[item.name] ? "true" : "false"}
          >
            {item.options.map((option, index) => {
              return (
                <option
                  key={`country-${option.value}${index}`}
                  value={option.value}
                >
                  {option.label}
                </option>
              );
            })}
          </Select>
          <ErrorMessage errors={errors[item.name]} />
        </FormControl>
      );
    case "checkbox":
      return (
        <FormControl {...props}>
          <FormLabel margin="0">{item.label}</FormLabel>
          <Checkbox
            colorScheme="green"
            name={item.name}
            {...register(item.name, { required: true })}
            aria-invalid={errors[item.name] ? "true" : "false"}
          >
            Si, acepto.
          </Checkbox>
          <ErrorMessage errors={errors[item.name]} />
        </FormControl>
      );
    case "submit":
      return (
        <Button
          _hover={{
            bg: "green.500",
            transition: "background 0.2s ease-in-out",
          }}
          marginY={"20px"}
          background={loading ? "green.600" : "pink.200"}
          //#9c003c
          color="white"
          type={item.type}
          value={item.type}
          w="100%"
          fontWeight="300"
          fontSize="20px"
          textShadow={"1px 1px 2px black"}
        >
          {loading ? <Spinner speed="0.65s" /> : item.label}
        </Button>
      );

    default:
      return (
        <FormControl {...props}>
          <FormLabel margin="0">{item.label} </FormLabel>
          <Input
            _focusVisible="none"
            border="none"
            borderBottom="1px solid black"
            borderRadius="0px"
            type={item.type}
            name={item.name}
            {...register(item.name, { required: true })}
            aria-invalid={errors[item.name] ? "true" : "false"}
          />
          <ErrorMessage errors={errors[item.name]} />
        </FormControl>
      );
  }
};

export default FormItem;
