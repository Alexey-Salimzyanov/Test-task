import axios from "axios";

const REACT_APP_API_URL='http://localhost:8080/'

const $host = axios.create({
    baseURL: REACT_APP_API_URL
})

export const sendQuestion = async (email, question)=>{
    const {data} = await $host.post('',{email, question});
    return data
}

export const getQuestion = async ()=>{
    const {data} = await $host.get('')
    return data
}