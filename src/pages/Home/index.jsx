import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Products from '../../components/Products';
import { Banner, Container } from './styles';
import backgroundBanner from '../../assets/banner.png';
// import slider from '../../assets/icons/slider.svg';

export default function Home() {

  return (
    <>
      <Header />
      <Container>
        <Banner banner={backgroundBanner}>
          <div className='transparencia'>
            <div className="banner__info">
              <h2>Olá, o que você está buscando?</h2>
              <h1>Criar ou migrar seu e-commerce?</h1>
            </div>
          </div>
        </Banner>
        <Products />;
        <Form />
      </Container>
      <Footer />
    </>
  );
}
