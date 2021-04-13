import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

// Flex -> Div com display flex

type SignInFormData = {
  email: string;
  password: string;
};

export default function SigIn() {
  const { register, handleSubmit, formState } = useForm();

  //? Essa função não recebe somente os valores, recebe também o evento
  //! Por ta tipado com SubmitHandler, o evento ja está tipado!
  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8" // 2 rem
        borderRadius={8} // 8px
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            type="email"
            name="email"
            label="Email"
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register("password")}
          />

          <Button
            type="submit"
            marginTop="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
