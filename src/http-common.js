import axios from "axios";

export default axios.create({
    baseURL: "https://635bce4f8aa87edd9151b36c.mockapi.io/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});