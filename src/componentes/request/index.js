import axios from 'axios';
import config from './configRequest';

const intancia = axios.create(config);

export default intancia;