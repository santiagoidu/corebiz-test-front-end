import {React} from 'react';
import {ContainerFooter} from './styles';
import email from '../../assets/icons/email.svg'
import contact from '../../assets/icons/contact.svg'
import corebiz from '../../assets/icons/corebiz.svg'
import vtex from '../../assets/icons/vtex.svg'

export default function Footer() {
  return (
    <ContainerFooter>
      <div className='footer'>
        <div className='footer__item'>
          <header className='footer__header'>
            <h3>Localização</h3>
          </header>
          <div className='footer__info'>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.org</p>
            <p>+55 11 3090 1039</p>
          </div>
        </div>
        <div className='footer__contact'>
          <div className='footer__contact__info email'>
            <img src={email}/>
            <p>entre em contato</p>
          </div>
          <div className='footer__contact__info consultor'>
            <img src={contact}/>
            <p>fale com o nosso consultor online</p>
          </div>
        </div>
        <div className='footer__brand'>
          <div className='footer__brand__item'>
            <span>Created by</span>
            <img src={corebiz}/>
          </div>
          <div className='footer__brand__item'>
            <span>Powered by</span>
            <img src={vtex}/>
          </div>
        </div>
      </div>
    </ContainerFooter>
  )
}
