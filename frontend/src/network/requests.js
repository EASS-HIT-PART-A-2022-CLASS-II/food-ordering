import axios from "axios"

export const getInitialData=async ()=>{
    return await (await axios.get("http://127.0.0.1:8000")).data;
}