import axios from "axios"

export const getDefault=async ()=>{
    const res = await axios.get("http://127.0.0.1:8000");
    console.log(res); 
    return res;
}