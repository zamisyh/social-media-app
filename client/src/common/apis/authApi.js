import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:2000/api/v1/auth"
})