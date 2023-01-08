import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  components: {
    FormLabel: {
      baseStyle: {
        color: "white.600",
      },
    },
    Input: {
      baseStyle: {
        field: {
          color: "white.300",
          bg: "gray.500",
          _autofill: {
            color: "black.300",
            boxShadow: " transparent",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          color: "black.300",
          bg: "white.500",
          _autofill: {
            color: "black.300",
            boxShadow: "transparent",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
  },
});
