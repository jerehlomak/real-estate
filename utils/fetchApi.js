import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9891499183msh1a6472d95f2afaep1838dajsn351bcdd8d8cf',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}