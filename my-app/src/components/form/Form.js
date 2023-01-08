import { Box } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

export default function Form({ children, handleSubmit, onSubmit, ...props }) {
  return (
    <Box w="100%" h="100%" letterSpacing="1px" {...props}>
      <FormProvider>
        <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </Box>
  );
}
