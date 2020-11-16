import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif'
  },
  colors: {
    green: {
      500: '#2CAB31'
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '20px',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        fontFamily: 'Varela',
        letterSpacing: '0.02rem'
      },
      sizes: {
        lg: {
          paddingX: '2.5rem',
          paddingY: '1rem',
          fontSize: '1rem'
        }
      },
      variants: {
        solid: {
          bg:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0) 100%), #050505;',
          color: 'white',
          _hover: {
            bg:
              'linear-gradient(180deg, rgba(252, 252, 252, 0.5) 13.54%, rgba(255, 255, 255, 0) 100%), #0E0E0D;'
          }
        }
      }
    },
    Radio: {
      baseStyle: {
        control: {
          _focus: {
            boxShadow: ''
          },
          borderColor: '',
          bg: '#fff',
          border: '1px solid rgba(0,0,0, 0.1)',
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.1), inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
        }
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: '#9F9595',
            _focus: {
              boxShadow: '0 0 0 1px #000',
              borderColor: '#000'
            }
          }
        }
      }
    },
    NumberInput: {
      variants: {
        outline: {
          field: {
            borderColor: '#9F9595',
            _focus: {
              boxShadow: '0 0 0 1px #000',
              borderColor: '#000'
            }
          }
        }
      }
    },
    Select: {
      variants: {
        outline: {
          field: {
            borderColor: '#9F9595',
            _focus: {
              boxShadow: '0 0 0 1px #000',
              borderColor: '#000'
            }
          }
        }
      }
    }
  }
});

export default theme;
