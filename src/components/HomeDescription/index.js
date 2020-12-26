import { Box, Flex, Text } from '@chakra-ui/react';

export default function HomeDescription() {
  return (
    <Box maxW={{ base: '100%', md: '1280px' }}>
      <Flex>
        <Box>
          <Text>Crie em poucos minutos</Text>
        </Box>
      </Flex>
    </Box>
  );
}
