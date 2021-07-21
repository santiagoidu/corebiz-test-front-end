import React from 'react';
import { BtnCadastro, Container } from './styles';

export default function NewsLatterSucess() {

  return(
    <Container>
      <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: '15px'}}>
        <span style={{fontWeight: 700}}>Seu e-mail foi cadastrado com sucesso!</span>
        <span style={{fontSize: window.innerWidth > 800 ? '14px' : '12px'}}>A partir de agora você receberá as novidades e ofertas exclusivas</span>
      </div>
      <BtnCadastro>Cadastro novo e-mail</BtnCadastro>
    </Container>
  );
}
