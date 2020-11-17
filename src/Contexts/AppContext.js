import { createContext, useContext, useState } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = createContext({ isAuthenticated: false });

export default AppContext;

export const AppUserProvider = ({ children, value }) => {
  // form1 - personal info
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [areaCode, setAreaCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [transactionAmount, setTransactionAmount] = useState('89.9');

  //form2 - address
  const [logradouro, setLogradouro] = useState('');
  const [streetNumber, setStreetNumber] = useState();
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidadeEstado, setCidadeEstado] = useState('');
  const [referencia, setReferencia] = useState('');
  const [complemento, setComplemento] = useState('');

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
        setParcelas,
        logradouro,
        setLogradouro,
        streetNumber,
        setStreetNumber,
        cep,
        setCep,
        bairro,
        setBairro,
        cidadeEstado,
        setCidadeEstado,
        referencia,
        setReferencia,
        complemento,
        setComplemento
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
