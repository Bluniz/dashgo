import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
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
  const { onOpen } = useSideBarDrawer();

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
