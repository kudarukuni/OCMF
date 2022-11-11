import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('white', 'black')(props),
      color: mode('black', 'white')(props),
    },
    text: {
      marginTop: '0',
    },
    '.chakra-alert': {
      gap: '1.2rem',
      bg: 'black',
      color: 'white',
    },
    ':root': {
      '--chakra-colors-primary-400': '#FACB47',
      '--chakra-colors-primary-500': '#FACB47',
    },
    '.wallet-adapter-button-trigger': {},
    '.wallet-adapter-button': {
      padding: '0rem 1.2rem',
      rounded: '6px',
      fontSize: '16px',
      lineHeight: '0',
      fontWeight: '600',
      height: '2.5rem',
      bg: mode('black', '#FACB47')(props),
      color: mode('#white', 'black')(props),
      _hover: {
        bg: mode('#EF1818', '#FDFDFF')(props),
        color: mode('#FDFDFF', 'black')(props),
      },
      _active: {
        bg: mode('#EF1818', '#FDFDFF')(props),
        color: mode('#FDFDFF', 'black')(props),
      },
    },
    '.wallet-adapter-button wallet-adapter-button-trigger ': {
      display: 'none',
    },
    '.wallet-adapter-modal-wrapper': {
      bg: 'white',
      color: 'black',
    },
    '.wallet-adapter-modal-button-close': {
      bg: '#dbdbdb',
      color: 'black',
    },
    '.wallet-adapter-modal-title': {
      color: 'black',
    },
    '.wallet-adapter-modal-content': {
      color: 'black',
    },
    '.wallet-adapter-modal-list .wallet-adapter-button': {
      bg: 'white',
      color: 'black',
      border: '1px solid gray.100',
      _hover: {
        bg: 'gray.100',
        color: 'string',
        shadow: 'none',
        transform: 'translate(0)',
        transition: 'none',
      },
    },
    '.wallet-adapter-button-end-icon, .wallet-adapter-button-start-icon, ': {
      // display: 'none',
    },
    '.wallet-adapter-modal-list-more': {
      color: 'black',
    },
    '.wallet-adapter-modal-list-more .svg': {
      color: 'black',
    },
    '.wallet-adapter-modal-list-more-icon-rotate': {
      color: 'black',
    },
    '.wallet-adapter-dropdown-list': {
      bg: 'white',
      color: 'black',
      shadow: 'none',
      border: '1px solid',
      borderColor: 'gray.200',
      rounded: 'md',
    },
    '.wallet-adapter-dropdown-list-item': {
      bg: 'white',
      color: 'black',
      border: '1px solid gray.100',
      fontSize: 'lg',
      fontWeight: '400',
      padding: '0.5rem 1rem',
      textAlign: 'left',
      _hover: {
        bg: '#eaeaea',
        color: 'black',
        shadow: 'none',
        transform: 'translate(0)',
        transition: 'none',
      },
    },
    '.wallet-adapter-dropdown-list-item:not([disabled]):hover': {
      bg: '#eaeaea',
    },
  }),
};
