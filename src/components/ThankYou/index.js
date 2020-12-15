import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { useAppContext } from '@/Contexts/AppContext';

export default function ThankYou() {
  const { order } = useAppContext();
  return (
    <Box my="100px">
      <Flex justifyContent="center" alignItems="center">
        <Text fontFamily="Roboto" fontSize="56px" fontWeight="medium">
          Pedido Realizado!
        </Text>
        <Icon ml="2rem" viewBox="0 0 100 100" w={100} h={100} color="brand.200">
          <path
            d="M50.0002 8.33333C27.0252 8.33333 8.3335 27.025 8.3335 50C8.3335 72.975 27.0252 91.6667 50.0002 91.6667C72.9752 91.6667 91.6668 72.975 91.6668 50C91.6668 27.025 72.9752 8.33333 50.0002 8.33333ZM50.0002 83.3333C31.621 83.3333 16.6668 68.3792 16.6668 50C16.6668 31.6208 31.621 16.6667 50.0002 16.6667C68.3793 16.6667 83.3335 31.6208 83.3335 50C83.3335 68.3792 68.3793 83.3333 50.0002 83.3333Z"
            fill="currentColor"
          />
          <path
            d="M35.4165 50C38.8683 50 41.6665 47.2018 41.6665 43.75C41.6665 40.2982 38.8683 37.5 35.4165 37.5C31.9647 37.5 29.1665 40.2982 29.1665 43.75C29.1665 47.2018 31.9647 50 35.4165 50Z"
            fill="currentColor"
          />
          <path
            d="M64.5543 49.9417C67.99 49.9417 70.7752 47.1565 70.7752 43.7208C70.7752 40.2852 67.99 37.5 64.5543 37.5C61.1187 37.5 58.3335 40.2852 58.3335 43.7208C58.3335 47.1565 61.1187 49.9417 64.5543 49.9417Z"
            fill="currentColor"
          />
          <path
            d="M49.9998 75C66.6665 75 70.8332 58.3333 70.8332 58.3333H29.1665C29.1665 58.3333 33.3332 75 49.9998 75Z"
            fill="currentColor"
          />
        </Icon>
      </Flex>
      <Box textAlign="center">
        <Text>Número do Pedido: #2020{order?.order?.id}</Text>
        <Box my="2rem">
          <Image
            src="/static/status-pedido.png"
            width={423}
            height={92}
            quality={100}
          />
        </Box>
        {order?.mercadopago?.external_resource_url && (
          <Button
            as="a"
            target="_blank"
            rel="noreferer noopener"
            href={order.mercadopago?.external_resource_url}
            variant="primary"
            size="lg"
            cursor="pointer"
          >
            Imprimir Boleto
          </Button>
        )}

        <Text maxW="450px" textAlign="center" m="2rem auto">
          Acompanhe seu e-mail para verificar dados do pedido, andamento da sua
          compra e a previsão de entrega.
        </Text>
      </Box>
    </Box>
  );
}
