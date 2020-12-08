import { Button, Img } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

import CardComponent from './Card';

import * as S from './styled';

export default function Form3({ setMenu }) {
  const handleBack = () => {
    setMenu('02');
  };
  return (
    <S.Wrapper>
      <Accordion allowZeroExpanded>
        <AccordionItem uuid="creditcard">
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2>Cartão de Crédito</h2>
              <p>🔒 Pague de forma segura utlizando seu cartão de crédito.</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <CardComponent />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem uuid="boleto">
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2>Boleto</h2>
              <p>O pagamento será aprovado em até 3 dias úteis.</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>Teste</AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <Button
        bg="none"
        _hover={{ bg: 'none', textDecoration: 'underline' }}
        textTransform="lowercase"
        fontSize="13px"
        fontFamily="Montserrat"
        onClick={handleBack}
        type="button"
        display="block"
        mt="2rem"
      >
        voltar
        <Img src="/images/arrow-checkout.svg" alt="Voltar" />
      </Button>
    </S.Wrapper>
  );
}
