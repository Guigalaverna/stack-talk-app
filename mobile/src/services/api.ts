import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://192.168.100.150:3333'
})