import {
  BasicPrice,
  StandardPrice,
  CinquecentoPrice
} from '../../PricingOptions';
import { Radio, RadioGroup, Flex, Box } from '@chakra-ui/react';
import { useAppContext } from '@/Contexts/AppContext';

export default function Pacotes() {
  const { transactionAmount, setTransactionAmount } = useAppContext();

  return (
    <RadioGroup
      mb="3rem"
      mt="1rem"
      onChange={setTransactionAmount}
      value={transactionAmount}
    >
      <Flex justify="space-between">
        <Box d="flex" flexDirection="column" alignItems="center">
          <BasicPrice htmlFor="basic" />
          <Radio
            colorScheme="green"
            value="79.9"
            d="block"
            mt="0.5rem"
            id="basic"
            size="lg"
          />
        </Box>
        <Box d="flex" flexDirection="column" alignItems="center">
          <StandardPrice />
          <Radio
            colorScheme="green"
            value="89.9"
            size="lg"
            d="block"
            mt="0.5rem"
          />
        </Box>
        <Box d="flex" flexDirection="column" alignItems="center">
          <CinquecentoPrice />
          <Radio
            colorScheme="green"
            value="119.9"
            size="lg"
            mt="0.5rem"
            d="block"
          />
        </Box>
      </Flex>
    </RadioGroup>
  );
}
