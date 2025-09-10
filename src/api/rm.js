import axios from "axios";

export const rm = axios.create({
    baseURL: "https://apibookingsaccomodations-production.up.railway.app/api/V1",
    timeout: 10000,
});



