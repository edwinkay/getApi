import axios from "axios"

//DOM objects
const $root = document.querySelector('#root')

//api methods
const getCharacters = async () => {
    const URL = 'https://rickandmortyapi.com/api/character'
    const res = await axios.get(URL)

    return res.data
}

getCharacters().then(res => {
    //here we can access to API REST data ✅
    console.log(res)
    // by the moment you should write you code below here 👇
    // follow with the ice cream app
})
