import {
  Link as ChakraLink,
  Text,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

//! Element type é equanto passo o nome de um elemento(A referência)
//! e não a declaração
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}
//! Quanto n tivermos uma ancora(a), podemos usar o passHref
//? Ele vai passar como uma propriedade forçada como atributo do primeiro Filho
export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
