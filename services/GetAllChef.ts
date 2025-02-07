import axios from "axios"

export const url = "http://localhost:4000/chef"

const getAllChef = async () =>{
    const {data} = await axios.get(url)
    return data
}

export default getAllChef
