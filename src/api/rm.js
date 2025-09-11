import axios from "axios";

export const rm = axios.create({
    baseURL: "https://apibookingsaccomodations-production.up.railway.app/api/V1",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

// Interceptor para agregar token automáticamente
rm.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
