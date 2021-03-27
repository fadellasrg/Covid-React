import axios from 'axios'

export const GET_ALL_COUNTRIES = () => {
    return{
        type: 'GET_ALL_COUNTRIES',
        payload: new Promise((resolve, reject) => {
            axios.get(`${process.env.REACT_APP_URL}/summary`).then((response)=>{
                resolve(response.data.Countries)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
}