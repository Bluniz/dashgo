import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100h">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} marginX="auto" px="6">
        <SideBar />
      </Flex>
    </Flex>
  );
}
