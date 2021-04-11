import { Text } from "@chakra-ui/react";

//! ["2xl", "3xl"]
//? 2xl no sm e 3xl nos outros
//! ["2xl", "3xl", "4xl", "xl"]
//? sm: 2xl, md: 3xl, lg: 4xl, xl: xl

//* Também é possivel passar um objeto por medida
//! EX:
/*
? <Text fontSize={{
?   base: "100%",
?   md: '50%",
?   lg: '80%',
? }}
/>
*/

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Dashgo
      <Text as="span" marginLeft="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
