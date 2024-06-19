import { Box, Flex, IconButton, Image, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const thumbnails = [
  { id: 1, title: "Video 1", src: "/images/thumbnail1.jpg" },
  { id: 2, title: "Video 2", src: "/images/thumbnail2.jpg" },
  { id: 3, title: "Video 3", src: "/images/thumbnail3.jpg" },
  { id: 4, title: "Video 4", src: "/images/thumbnail4.jpg" },
];

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
    <Box p={4}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4}>
          {thumbnails.map((thumbnail) => (
            <Box key={thumbnail.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={thumbnail.src} alt={thumbnail.title} />
              <Box p={2}>
                <Text fontWeight="bold">{thumbnail.title}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;