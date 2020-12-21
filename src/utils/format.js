export function formatCEP(CEP) {
  const cep = String(CEP);
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

export function formatPrice(Price) {
  const price = Price?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  return price;
}

export function formatCPF(CPF) {
  const cpf = String(CPF);
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

import moment from 'moment';

export function formatDate(date) {
  const formatedDate = moment(date).format('DD/MM/YYYY');
  return formatedDate;
}

export function formatDateHour(date) {
  const formatedDate = moment(date).format('DD/MM/YYYY [às] HH:mm:ss');
  return formatedDate;
}

export function formatPayment(metodo_pagamento) {
  const updatedPayment =
    metodo_pagamento === 'cartao_de_credito'
      ? 'Cartão de Crédito'
      : metodo_pagamento === 'boleto'
      ? 'Boleto'
      : '';
  return updatedPayment;
}

export function formatPhone(Phone) {
  const phone = String(Phone);
  if (phone.length === 10) {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  if (phone.length === 11) {
    return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
  }
}

export function formatStatus(status) {
  const updatedStatus =
    status === 'analise'
      ? 'Em Análise'
      : status === 'producao'
      ? 'Em Produção'
      : status === 'transporte'
      ? 'Em Transporte'
      : status === 'erro'
      ? 'Com Erros'
      : status === 'entregue'
      ? 'Entregue'
      : status === 'estorno'
      ? 'Estornado'
      : status === 'cancelado'
      ? 'Cancelado'
      : status === 'incompleto'
      ? 'Incompleto'
      : '';
  return updatedStatus;
}

export function formatDocNumber(docNumber) {
  const value = String(docNumber);

  if (docNumber.length <= 11) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  } else {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      '$1.$2.$3/$4-$5'
    );
  }
}
