import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  type?: string;
}
//! Quando utilizado forwardRef, o primeiro parâmetro são as props
//! O segundo é a ref

//! Tipagem para o refs com TS
//! Primeiro parametro a tipagem do tipo de elemento que será referencia
//! Segundo parametro, a tipagem das props
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
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
    </FormControl>
  );
};

//! Encaminhamento de Ref, ele vai pegar a referencia do componente que criamos
//! e passará para o inputBase.
export const Input = forwardRef(InputBase);
