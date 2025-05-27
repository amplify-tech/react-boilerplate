import axios from "axios";

const api = axios.create({
    baseURL: "https://django-app-758990898782.asia-south2.run.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;