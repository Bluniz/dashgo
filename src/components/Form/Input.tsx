import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}
//! Quando utilizado forwardRef, o primeiro parâmetro são as props
//! O segundo é a ref

//! Tipagem para o refs com TS
//! Primeiro parametro a tipagem do tipo de elemento que será referencia
//! Segundo parametro, a tipagem das props
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    //! usar o !! para transformar em um valor booleando
    //? Se tiver um conteudo dentro vira true, se não false.
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
        ref={ref}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

//! Encaminhamento de Ref, ele vai pegar a referencia do componente que criamos
//! e passará para o inputBase.
export const Input = forwardRef(InputBase);
