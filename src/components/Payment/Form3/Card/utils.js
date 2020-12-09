import { formatDocNumber } from '@/utils/format';
import Payment from 'payment';

function clearNumber(value = '') {
  return value.replace(/\D+/g, '');
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case 'amex':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case 'dinersclub':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}

export function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 4;

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number);
    maxLength = issuer === 'amex' ? 4 : 3;
  }

  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

export function formatFormData(form) {
  const obj = {};
  const formData = new FormData(form);
  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  delete obj.cardExpirationMonth;
  delete obj.cardExpirationYear;
  delete obj.cardNumber;
  delete obj.securityCode;
  delete obj.cardHolderName;
  return obj;
}

export function formatInputFocus(e, setFocused) {
  if (e.target.id === 'cardholderName') {
    setFocused('name');
  } else if (e.target.id === 'cardNumber') {
    setFocused('number');
  } else if (e.target.id === 'securityCode') {
    setFocused('cvc');
  } else if (e.target.id === 'cardExpirationMonth') {
    setFocused('expiry');
  } else if (e.target.id === 'cardExpirationYear') {
    setFocused('expiry');
  }
}

export function formatInputChange(
  e,
  setCvc,
  setName,
  setYear,
  setDocType,
  setDocNumber
) {
  if (e.target.id === 'securityCode') {
    e.target.value = formatCVC(e.target.value);
    setCvc(e.target.value);
  } else if (e.target.id === 'cardholderName') {
    setName(e.target.value);
  } else if (e.target.id === 'docType') {
    setDocType(e.target.value);
  } else if (e.target.id === 'docNumber') {
    const formattedDoc = formatDocNumber(e.target.value);
    setDocNumber(formattedDoc);
    formattedDoc.length <= 14 ? setDocType('CPF') : setDocType('CNPJ');
  }
}

export const returnFalse = () => {
  return false;
};

// Mercado Pago Functions

export function guessPaymentMethod() {
  let cardnumber = document.getElementById('cardNumber').value;
  if (cardnumber.length >= 6) {
    let bin = cardnumber.substring(0, 6);
    window.Mercadopago.getPaymentMethod(
      {
        bin: bin
      },
      setPaymentMethod
    );
  }
}

function setPaymentMethod(status, response) {
  if (status == 200) {
    let paymentMethod = response[0];
    document.getElementById('paymentMethodId').value = paymentMethod.id;

    if (paymentMethod.additional_info_needed.includes('issuer_id')) {
      getIssuers(paymentMethod.id);
    } else {
      getInstallments(
        paymentMethod.id,
        document.getElementById('transactionAmount').value
      );
    }
  } else {
    alert('Número de cartão inválido.');
  }
}

function getIssuers(paymentMethodId) {
  window.Mercadopago.getIssuers(paymentMethodId, setIssuers);
}

function setIssuers(status, response) {
  if (status == 200) {
    let issuerSelect = document.getElementById('issuer');
    response.forEach((issuer) => {
      let opt = document.createElement('option');
      opt.text = issuer.name;
      opt.value = issuer.id;
      issuerSelect.appendChild(opt);
    });

    getInstallments(
      document.getElementById('paymentMethodId').value,
      document.getElementById('transactionAmount').value,
      issuerSelect.value
    );
  } else {
    alert('Número de cartão inválido.');
  }
}

function getInstallments(paymentMethodId, transactionAmount, issuerId) {
  window.Mercadopago.getInstallments(
    {
      payment_method_id: paymentMethodId,
      amount: parseFloat(transactionAmount),
      issuer_id: issuerId ? parseInt(issuerId) : undefined
    },
    setInstallments
  );
}

function setInstallments(status, response) {
  if (status == 200) {
    document.getElementById('installments').options.length = 0;
    response[0].payer_costs.forEach((payerCost) => {
      let opt = document.createElement('option');
      opt.text = payerCost.recommended_message;
      opt.value = payerCost.installments;
      document.getElementById('installments').appendChild(opt);
    });
  } else {
    alert('Número de cartão inválido.');
  }
}
