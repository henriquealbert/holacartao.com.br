import { useState } from 'react';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Pacotes from './Pacotes';
import Navbar from './Navbar';
import CartSidebar from './CartSidebar';

import * as S from './styled';

export default function Payment() {
  const [menu1, setMenu1] = useState(true);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <Navbar
          menu1={menu1}
          menu2={menu2}
          menu3={menu3}
          setMenu1={setMenu1}
          setMenu2={setMenu2}
          setMenu3={setMenu3}
        />
        {menu1 ? (
          <S.Content>
            <h2>Escolha um pacote:</h2>
            <Pacotes />
            <Form1
              setMenu1={setMenu1}
              setMenu2={setMenu2}
              setMenu3={setMenu3}
            />
          </S.Content>
        ) : (
          ''
        )}
        {menu2 ? (
          <S.Content>
            <Form2
              setMenu1={setMenu1}
              setMenu2={setMenu2}
              setMenu3={setMenu3}
            />
          </S.Content>
        ) : (
          ''
        )}
        {menu3 ? (
          <S.Content>
            <Form3 />
          </S.Content>
        ) : (
          ''
        )}
      </S.Container>
      <CartSidebar />
    </S.Wrapper>
  );
}
