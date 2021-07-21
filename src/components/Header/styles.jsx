import styled from 'styled-components'

export const Container = styled.header`
  background-color: #fff;
  height: 90px;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 800px) {
    padding: 5px 20px;
  }
`;

export const MenuHamburguer = styled.div`
  display: none;

  @media(max-width: 800px) {
    display: block;
    order: -1;
  }

`;

export const Logo = styled.img`
  max-width: 170.14px;
  max-height: 41px;

  @media(max-width: 800px) {
    margin-bottom: 16px;
    order: 0;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 718px;
  position: relative;

  & .input__field {
    width: 100%;
    border: none;
    border-bottom: 1px solid #7A7A7A;
    outline: none;
    padding: 5px 0;
  }

  & .input__icon {
    position: absolute;
    right: 0;
    bottom: 5px;
    padding: 2px 4px;
  }

  @media(max-width: 800px) {
    order: 2;
  }
`;

export const ContainerUser = styled.div`
  display: flex;

  & .account {
    margin-right: 21px;

    & .account__img {
      margin-right: 5px;
    }
    & .account__title {
      color: #7a7a7a;
      font-size: 13px;
      line-height: 17.73px;
    }
  }

  & .cart {
    display: flex;
    align-items: center;

    & .product__number {
      background-color: #f8475f;
      width: 14px;
      height: 14px;
      text-align: center;
      margin-left: 5px;
      font-size: 0.625rem;
      border-radius: 50%;
      color: #fff;
    }
  }

  @media(max-width: 800px) {
    .account {
      display: none;
    }
    .cart {
      order: 1;
    }
  }
`;
