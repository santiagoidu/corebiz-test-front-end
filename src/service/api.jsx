import axios from 'axios';

const api = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1'
})

export const baseFetch = async () => {
  return api
    .get('/products')
    .then((res) => res.data)
    .catch((err) => console.log(err))
}


