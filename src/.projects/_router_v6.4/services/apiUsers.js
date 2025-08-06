import axios from "axios";
const BASE_URL = "https://reqres.in/api/users"

export const getAllUser = async () => {
    try {
        const { data } = await axios(BASE_URL, {
            headers: {
                "x-api-key": " reqres-free-v1",
            },
        });
        return data
    } catch (error) {
        console.log("apiUser.js page :", error);
    }
}
export const getSelectedUser = async (id) => {
    try {
        const { data } = await axios(`${BASE_URL}/${id}`,{
            headers: {
                "x-api-key": " reqres-free-v1",
            },
        })
        return data
    } catch (error) {
        console.log("apiUser.js page :", error);
    }
}