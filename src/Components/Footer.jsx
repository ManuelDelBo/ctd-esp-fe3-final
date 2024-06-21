import React from 'react';
import { useContextProvider } from './utils/global.context';

const Footer = () => {
  const { state } = useContextProvider();

  return (
    <footer className={state.theme}>
      <p>Powered by</p>
      <img src={`${process.env.PUBLIC_URL}/images/DH.png`} alt='DH-logo'/>
      <img src={`${process.env.PUBLIC_URL}/images/ico-facebook.png`} alt='facebook' className='redes'/>
      <img src={`${process.env.PUBLIC_URL}/images/ico-instagram.png`} alt='instagram' className='redes'/>
      <img src={`${process.env.PUBLIC_URL}/images/ico-tiktok.png`} alt='tiktok' className='redes'/>
      <img src={`${process.env.PUBLIC_URL}/images/ico-whatsapp.png`} alt='whatsapp' className='redes'/>
    </footer>
  );
}

export default Footer;
