import axios from 'axios'

const crudApi = axios.create({
    baseURL: `http://localhost:3000`
})

export default crudApi
