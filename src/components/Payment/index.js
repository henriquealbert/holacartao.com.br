import { useState } from 'react';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Pacotes from './Pacotes';
import Navbar from './Navbar';
import CartSidebar from './CartSidebar';

import * as S from './styled';

export default function Payment() {
  const [menu, setMenu] = useState('01');

  return (
    <S.Wrapper>
      <S.Container>
        <Navbar menu={menu} setMenu={setMenu} />
        {menu === '01' ? (
          <S.Content>
            <h2>Escolha um pacote:</h2>
            <Pacotes />
            <Form1 setMenu={setMenu} />
          </S.Content>
        ) : (
          ''
        )}
        {menu === '02' ? (
          <S.Content>
            <Form2 setMenu={setMenu} />
          </S.Content>
        ) : (
          ''
        )}
        {menu === '03' ? (
          <S.Content>
            <Form3 setMenu={setMenu} />
          </S.Content>
        ) : (
          ''
        )}
      </S.Container>
      <CartSidebar />
    </S.Wrapper>
  );
}
