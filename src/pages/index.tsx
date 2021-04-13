import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

// Flex -> Div com display flex

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SigIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  //? Essa função não recebe somente os valores, recebe também o evento
  //! Por ta tipado com SubmitHandler, o evento ja está tipado!
  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    console.log(values);

    console.log(errors);
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
            error={errors.email}
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            error={errors.password}
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
