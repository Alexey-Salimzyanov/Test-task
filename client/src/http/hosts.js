import axios from "axios";

const REACT_APP_API_URL='http://localhost:8080/'

const $host = axios.create({
    baseURL: REACT_APP_API_URL
})

export const sendQuestion = async (email, question)=>{
    const {data} = await $host.post('server/create.php',{email, question})
    return data
}

export const getQuestions = async ()=>{
    const {data} = await $host.get('server/read.php')
    return data
}

export const changeQuestion = async (id, email, question)=>{
    const {data} = await $host.put('server/update.php',{id, email, question})
    return data
}

export const deleteQuestion = async (id)=>{
    const {data} = await $host.delete(`server/delete.php?id=${id}`)
    return data
}