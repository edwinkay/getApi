import axios from "axios"

const $root = document.getElementById('root')

const URL = 'https://rickandmortyapi.com/api/character'
let data = axios.get(URL).then(res => {
    console.log(res)
    data = res.data
})

console.log(data)
