import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      :root {
        --lightBlack: #433b3b;
        --span: #db8e8e;
        --dark-green: #91c037;
        --yellow: #f8e436;
        --blue: #2863f9;
        --darker-blue: #295ada;
        --transporte: #c2f928;
        --deliver: #28f97c;
        --grey: #c4c6c1;
        --darker-grey: #898d83;
        --lighter-grey: #e5e5e5;
        --checkout-gray: #a19898;

        --green: #acdd4f;
        --green-2: #94df3e;
        --green-3: #00ff5f;
        --green-4: #2cab31;
        --red: #f84752;
        --white: #fcfcfc;
        --white-2: #fafafa;
        --white-3: #e6e6e6;
        --gray: #808080;
        --gray-2: #433b3b;
        --black: #0e0e0d;
      }

      html,
      body {
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        color: var(--black);
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
      }
      ul {
        list-style: none;
      }
    `}
  />
);
