import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
/* 
Sempre que eu colocar um numero em string, ele irá entender que quero 
no formato de espaçamento, por exemplo h="20" => 20x4 = 80px;

! px = padding horizontal
! marginX = margin Horizontal

*/
export function Header() {
  //! Por padrão não estão visiveis
  //? Quando passar no LG vai ficar visivel
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      align="center"
      h="20"
      mx="auto"
      mt="4"
      px="6"
    >
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
