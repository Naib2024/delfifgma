import axios from "axios";

export const url = "http://localhost:4000/user"

const getAllUsers = async () => {
  const { data } = await axios.get(url)
  return data
};

export default getAllUsers;
