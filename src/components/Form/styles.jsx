import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 146px;
  padding: 25px 0;
  background: #f2f2f2;


  & h2 {
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 22px;
    margin-bottom: 16px;
  }

  @media(max-width: 800px) {
    height: 276px;
    padding: 24px 17px 16px 17px;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 800px) {
    & > div {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
    }

    & > div:nth-child(1) {
      margin-bottom: 15px;
    }

    & div:nth-child(2) {
      margin-bottom: 7px;
    }
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 48px;
  border: solid 1px #bdbdbd;
  border-radius: 5px;
  background: #fff;
  outline: none;
  margin-right: 8px;
  padding-left: 10px;

  @media(max-width: 800px) {
    display: flex;
    margin-right: 0;
    flex: 1 0 100%;
  }
`;

export const Submit = styled.button`
  width: 140px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: #333333;
  color: #fff;

  @media(max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-weight: 700;
  }
`;

export const Error = styled.span`
  display: block;
  color: #D7182A;
  font-size: 0.75rem;
  line-height: 0.75rem;
  margin-top: 8px;
`;
