import axios from "axios";

export const rm = axios.create({
    baseURL: "https://apibookingsaccomodations-production.up.railway.app/docs/api-docs.json",
    timeout: 10000,
});

