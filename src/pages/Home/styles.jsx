import styled from 'styled-components';
import banner from '../../assets/banner.png';
import bannerResponsive from '../../assets/banner-responsive.jpg';

export const Container = styled.div`
  min-height: calc(100vh - 278.24px);
`;

export const Banner = styled.section`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  height: 430px;
  color: #fff;
  position: relative;

  & .banner__info {
    position: absolute;
    left: 380px;
    top: 150px;
    max-width: 390px;


    & h2 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 40.92px;
    margin-bottom: 1rem;
    }

    & h1 {
      font-weight: 900;
      font-size: 2.813rem;
      line-height: 45px;
    }
  }

  /* Responsivo */

  @media(max-width: 800px) {
    background-image: url(${bannerResponsive});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 191.2px;

    & .transparencia {
      width: inherit;
      height: inherit;
      background: linear-gradient(to top, #111 5%, transparent);
    }

    & .banner__info {
      left: 20px;
      top: 20px;

      & h2 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        line-height: 100%;
        max-width: 220px;
      }

      & h1 {
        font-size: 1.875rem;
        line-height: 100%;
        max-width: 290px;
      }
    }

  }

`;

