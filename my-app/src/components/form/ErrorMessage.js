import { Text } from "@chakra-ui/react";

const ErrorMessage = ({ errors }) => {
  return (
    <Text
      style={{
        opacity: errors ? 1 : 0,
        color: "red",
        fontSize: "12px",
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      This field is required
    </Text>
  );
};

export default ErrorMessage;
