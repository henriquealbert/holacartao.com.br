import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --lightBlack: #433b3b;
  --span: #db8e8e;
  --dark-green: #91C037;
  --yellow: #F8E436;
  --blue: #2863F9;
  --darker-blue: #295ADA;
  --transporte: #C2F928;
  --deliver: #28F97C;
  --grey: #C4C6C1;
  --darker-grey: #898D83;
  --lighter-grey: #E5E5E5;
  --checkout-gray: #A19898;


  --green:#ACDD4F;
  --green-2: #94DF3E;
  --green-3:#00FF5F;
  --green-4: #2CAB31;
  --red: #F84752;
  --white: #FCFCFC;
  --white-2: #FAFAFA;
  --white-3: #E6E6E6;
  --gray: #808080;
  --gray-2:#433B3B;
  --black:#0E0E0D;

}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  color: var(--black);
}

body,
button {
  font: 16px 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}

`;

export default GlobalStyles;
