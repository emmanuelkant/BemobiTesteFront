import constantes from '../../constantes/constantes';

const config = {
  baseURL: constantes.URL_API,
  headers: {
    'Accept': '*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
  data: {}
}

export default config;