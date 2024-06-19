import { Box, Flex, IconButton, Image, Input, InputGroup, InputRightElement, Spacer } from "@chakra-ui/react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="white" p={4} boxShadow="md" align="center">
        <Image src="/images/youtube-logo.svg" alt="YouTube Logo" boxSize="40px" />
        <Spacer />
        <InputGroup maxW="600px" mx={4}>
          <Input placeholder="Search" />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <IconButton aria-label="Notifications" icon={<FaBell />} mx={2} />
        <IconButton aria-label="User" icon={<FaUserCircle />} />
      </Flex>
    </Box>
  );
};

export default Index;