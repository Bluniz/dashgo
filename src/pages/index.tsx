import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

// Flex -> Div com display flex

export default function SigIn() {
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
      >
        <Stack spacing={4}>
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Senha" />

          <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
