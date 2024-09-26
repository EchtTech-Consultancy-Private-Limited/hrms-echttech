import axios from "axios";

export const axiosInatance = axios.create({
    //base_url: "http://localhost:5000/", getting from proxy in package.json file
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        //'Content-Type': 'multipart/form-data'
    }
})