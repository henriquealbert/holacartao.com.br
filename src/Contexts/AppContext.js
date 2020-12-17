import { createContext, useContext, useState } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = createContext({ isAuthenticated: false });

export default AppContext;

export const AppUserProvider = ({ children, value }) => {
  // order details
  const [order, setOrder] = useState({});
  console.log(order);

  const [transactionAmount, setTransactionAmount] = useState('89.9');

  // form3 - payment - credit card
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [bandeira, setBandeira] = useState('');
  const [focused, setFocused] = useState('');
  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [parcelas, setParcelas] = useState('');

  function resetCheckoutState() {
    setNumber('');
    setName('');
    setMonth('');
    setYear('');
    setCvc('');
    setBandeira('');
    setFocused('');
    setDocType('');
    setDocNumber('');
    setParcelas('');
    setTransactionAmount('89.9');
  }

  return (
    <AppContext.Provider
      value={{
        ...value,
        number,
        setNumber,
        name,
        setName,
        month,
        setMonth,
        year,
        setYear,
        cvc,
        setCvc,
        bandeira,
        setBandeira,
        focused,
        setFocused,
        docType,
        setDocType,
        docNumber,
        setDocNumber,
        transactionAmount,
        setTransactionAmount,
        parcelas,
        setParcelas,
        resetCheckoutState,
        order,
        setOrder
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

// Client Auth
export const auth = (ctx) => {
  const { token } = nextCookie(ctx);

  const card = ctx.query.card ? `&card=${ctx.query.card}` : '';
  const savedCard = ctx.query.saved_card
    ? `&saved_card=${ctx.query.save_card}`
    : '';

  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.statusCode = 302;
      ctx.res.setHeader(
        'Location',
        `/login/?redirected=true&url=${ctx.query.url}${card}${savedCard}`
      );
    } else {
      Router.push(
        `/login/?redirected=true&url=${ctx.query.url}${card}${savedCard}`
      );
    }
  }

  return token;
};
