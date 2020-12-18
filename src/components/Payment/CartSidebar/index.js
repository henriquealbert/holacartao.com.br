import { useAppContext } from '@/Contexts/AppContext';
import * as S from './styled';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import { formatPrice } from '@/utils/format';

export default function CartSidebar() {
  const { transactionAmount } = useAppContext();
  return (
    <Box
      bgColor="var(--white-2)"
      as="aside"
      maxW="415px"
      justifySelf="flex-end"
    >
      <S.Content>
        <h2>Seu Carrinho</h2>
        <S.CardInfo>
          <img src="/images/sidebar-card.png" alt="Cartão de Visita" />
          <p>
            Cartão de Visita Personalizado, verniz total frente, verso fosco,
            tamanho 9x5cm. Couché 300g.
          </p>
        </S.CardInfo>
        <S.PriceInfo>
          <SimpleGrid columns={2} justifyContent="space-between">
            <Box>
              <p>Subtotal:</p>
              <p>Frete:</p>
            </Box>
            <Box>
              <Text textAlign="end">{formatPrice(transactionAmount)}</Text>
              <Text textAlign="end">R$ 00,00</Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={2} className="sidebar-cart-total">
            <Text as="h4">TOTAL</Text>
            <Text as="h4" textAlign="end">
              {formatPrice(transactionAmount)}
            </Text>
          </SimpleGrid>
        </S.PriceInfo>
      </S.Content>
    </Box>
  );
}
