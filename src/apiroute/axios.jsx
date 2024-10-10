import axios from "axios";
 const BASE_URL = "localhost:9000/v1";
// const BASE_URL = "";
export default axios.create({
	 baseURL: BASE_URL,
	 withCredentials: true,
});
export const axiosImage = axios.create({
	 baseURL: BASE_URL,
});
