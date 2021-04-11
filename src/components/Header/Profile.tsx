import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Rosa</Text>
          <Text color="gray.300" fontSize="smaill">
            lucassantosrosa51@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas Rosa" src="https://github.com/bluniz.png" />
    </Flex>
  );
}
