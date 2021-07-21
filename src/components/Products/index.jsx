import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Title,
  ContainerItem,
  Item,
  Img,
  ItemName,
  ItemRate,
  ItemListPrice,
  ItemCurrency,
  ItemInstallments,
  BtnShopping
} from './styles';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { baseFetch } from '../../service/api';

export default function Products () {
  const [productsList, setProductsList] = useState([]);
  const selector = useSelector((state) => state + 1);

  const dispatch = useDispatch();

  useEffect(() => {
    baseFetch().then((res) => setProductsList(res));
  }, []);


  function formatCurrency(value) {
    let currency = value.toString().replace(/\D/g, '');
    currency = `${(currency / 100).toFixed(2)}`;
    currency = currency.replace('.', ',');
    currency = currency.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
    currency = currency.replace(/(\d)(\d{3}),/g, '$1.$2,');
    value = currency;
      return value;
  }

  function createStar(starsQuantity) {
    return (
      <>
        {[...Array(starsQuantity)].map(() => {
          return <MdStar color={'#f9475f'} key={Math.random(1000)} />;
        })}

        {[...Array(5 - starsQuantity)].map(() => {
          return <MdStarBorder color={'#f9475f'} key={Math.random(1000)} />;
        })}
      </>
    );
  }

  function subdivision(value) {
    const installments = {
      quantity: 0,
      total: 0,
    };

    value.forEach((item) => {
      let price = formatCurrency(item.value);
      price = price.replace(',', '.');
      installments.quantity = item.quantity;
      installments.total = price;
    });
    return (
      installments.quantity == 0 && installments.total == 0
        ? ''
        : `ou em ${installments.quantity}x de R$ ${installments.total}`
    );
  }

  function handleShopping() {
    dispatch({ type: 'INCREMENT' });
    localStorage.setItem('itemCart', selector);
  }

  return (
    <Container>
      <Title>Mais Vendidos</Title>
      <ContainerItem>
      {productsList.map((product) =>
        <div className='inner__item__container' key={product.productId}>
            <Item>
              <Img src={product.imageUrl} alt={product.productName} />
              <ItemName>
                {product.productName}
              </ItemName>
              <ItemRate>
                {createStar(product.stars)}
              </ItemRate>
              {product.listPrice && (
                <ItemListPrice>
                  {`de ${formatCurrency(product.listPrice)}`}
                </ItemListPrice>
              )}
              <ItemCurrency>
                {`por ${formatCurrency(product.price)}`}
              </ItemCurrency>
              <ItemInstallments>
                {subdivision(product.installments)}
              </ItemInstallments>
              <BtnShopping onClick={handleShopping}>Comprar</BtnShopping>
            </Item>
        </div>
      )}
      </ContainerItem>
    </Container>
  )
}
