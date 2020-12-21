import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

export default function Pagination({ addMoreAll, lastPageAll }) {
  return (
    <Flex justifyContent="center" mb="2rem">
      {!lastPageAll ? (
        <Button
          m="2rem auto"
          variant="link"
          type="button"
          textTransform="none"
          fontWeight="bold"
          fontSize="18px"
          letterSpacing="0.02em"
          color="gray.800"
          size="lg"
          rightIcon={<ChevronDownIcon w={8} h={8} />}
          onClick={addMoreAll}
        >
          Mais Modelos
        </Button>
      ) : null}
    </Flex>
  );
}
