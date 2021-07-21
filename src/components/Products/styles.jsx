import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 25px 35px;

  @media(max-width: 800px) {
    padding: 16px 12px 40px 12px;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;

  &::after {
    content: '';
    display: block;
    background-color: #c0c0c0;
    height: 5px;
    width: 65px;
    margin: 8px 0;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: hidden;

  & .inner__item__container {
    margin-right: 80px;
  };

  @media(max-width: 800px) {
    .inner__item__container {
      margin: 0 20px;
    };
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  display: block;
  width: 216px;
  height: 200px;

  @media(max-width: 800px) {
    width: 132px;
    height: 122px;
  }
`;

export const ItemRate = styled.div`

`;


export const ItemName = styled.span`
  font-size: 0.75rem;
  color: #7a7a7a;
  line-height: 16px;

  @media(max-width: 800px) {
    font-size: 0.625rem;
    line-height: 13px;
  }
`;

export const ItemListPrice = styled.span`
  font-size: 0.75rem;
  color: #7a7a7a;
  line-height: 16px;
`;

export const ItemCurrency = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24.55px;
  margin: 2px 0;
`;

export const ItemInstallments = styled.span`
  font-size: 0.75rem;
  color: #7a7a7a;
  line-height: 16px;
`;

export const BtnShopping = styled.button`
   display: block;
    margin: 8px auto 0 auto;
    width: 125.28px;
    height: 32.42px;
    padding: 8px 27px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.75rem;
`;
