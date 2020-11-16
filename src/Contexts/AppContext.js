import { createContext, useContext, useState } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = createContext({ isAuthenticated: false });

export default AppContext;

export const AppUserProvider = ({ children, value }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [bandeira, setBandeira] = useState('');
  const [focused, setFocused] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [email, setEmail] = useState('');
  const [areaCode, setAreaCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [transactionAmount, setTransactionAmount] = useState('89.90');
  const [parcelas, setParcelas] = useState(null);

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
        firstName,
        setFirstName,
        lastName,
        setLastName,
        docType,
        setDocType,
        docNumber,
        setDocNumber,
        email,
        setEmail,
        areaCode,
        setAreaCode,
        phoneNumber,
        setPhoneNumber,
        transactionAmount,
        setTransactionAmount,
        parcelas,
        setParcelas
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
      ctx.res.writeHead(302, {
        Location: `/login/?redirected=true&url=${ctx.query.url}${card}${savedCard}`
      });
      ctx.res.end();
    } else {
      Router.push(
        `/login/?redirected=true&url=${ctx.query.url}${card}${savedCard}`
      );
    }
  }

  return token;
};
