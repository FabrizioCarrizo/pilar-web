import axios from "axios";
import { useEffect } from "react";

const BASE_URL= "https://pokeapi.co/api/v2/";
const IMG_URL= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"

const headers=()=>{
    const headers = {
        headers: {
            "content-types": "aplication/json"
        }
    }
    
    return headers
}

const POST= async(url, payload)=>{ 
    let res= null;
    try {
        res = await axios.post(url, payload, headers());
        return (res&& res.data)|| null
    } catch (error) {
        throw (error&& error.response.data.error) || errorMessage
    }
}
const GET= async(url, payload)=>{ 
    let res= null;
    try {
        res = await axios.post(url, payload, headers());
        return (res&& res.data)|| null
    } catch (error) {
        throw (error&& error.response.data.error) || errorMessage
    }
}
const PATCH= async(url, payload)=>{ 
    let res= null;
    try {
        res = await axios.post(url, payload, headers());
        return (res&& res.data)|| null
    } catch (error) {
        throw (error&& error.response.data.error) || errorMessage
    }
}
const DELETE= async(url, payload)=>{ 
    let res= null;
    try {
        res = await axios.post(url, payload, headers());
        return (res&& res.data)|| null
    } catch (error) {
        throw (error&& error.response.data.error) || errorMessage
    }
}
const errorMessage = {
    message: "Server error",
    name: "serverError",
    statusCode: 500
}




export default {
    POST, GET, PATCH, DELETE, pokemons: `${BASE_URL}/pokemon`
}

