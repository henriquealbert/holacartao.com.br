import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif'
  },
  colors: {
    black: '#222326',
    white: '#FCFCFC',
    brand: {
      100: '#1ED760',
      200: '#1DB954',
      300: '#1DB900',
      400: '#17AB4B'
    }
  },
  components: {
    Modal: {
      baseStyle: {
        overlay: {
          bg: 'blackAlpha.800'
        }
      }
    },
    Textarea: {
      variants: {
        primary: {
          _focus: {
            boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)',
            borderColor: 'brand.400'
          }
        }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: '20px',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        fontFamily: 'Roboto',
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
        primary: {
          bg: 'brand.200',
          color: 'white',
          _hover: {
            bg: 'brand.400',
            boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.25)'
          },
          _focus: {
            boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)'
          },
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          paddingY: '12px'
        },
        ghost: {
          _hover: {
            boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)'
          },
          _focus: {
            boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)'
          }
        },
        outline: {
          color: 'white',
          border: '3px solid',
          borderColor: 'white',
          _hover: {
            bg: 'none',
            boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.25)'
          },
          _focus: {
            boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)'
          },
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          paddingY: '12px'
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
            borderColor: 'gray.600',
            borderRadius: '20px',
            _focus: {
              boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)',
              borderColor: 'brand.400'
            }
          }
        },
        filled: {
          field: {
            borderColor: 'gray.600',
            borderRadius: '20px',
            _focus: {
              boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)',
              borderColor: 'brand.400'
            }
          }
        }
      }
    },
    NumberInput: {
      variants: {
        outline: {
          field: {
            borderColor: 'gray.600',
            borderRadius: '20px',
            _focus: {
              boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)',
              borderColor: 'brand.400'
            }
          }
        },
        primary: {
          field: {
            bg: '#E1E1E1',
            borderRadius: '20px'
          }
        }
      }
    },
    Select: {
      variants: {
        outline: {
          field: {
            borderColor: 'gray.600',
            borderRadius: '20px',
            _focus: {
              boxShadow: '0 0 0 3px rgba(23, 171, 75, 0.6)',
              borderColor: 'brand.400'
            }
          }
        }
      }
    }
  }
});

export default theme;
