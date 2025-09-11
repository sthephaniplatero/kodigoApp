import axios from "axios";

export const rm = axios.create({
    baseURL: "https://apibookingsaccomodations-production.up.railway.app",
    timeout: 10000,
    headers: { "Content-Type": "application/json", },
});

