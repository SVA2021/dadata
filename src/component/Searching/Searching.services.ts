import axios from "axios";

const BASE_URL = "https://cleaner.dadata.ru/api/v1/clean/address";
const token = "";
const secret = "";

const dadataInstance = axios.create({
    baseURL: BASE_URL,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + token,
        "X-Secret": secret,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});

export const dadataAPI = {

    getAddress(query: string) {
        return dadataInstance.post(JSON.stringify(query))
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    },

}

const fakeResponce = 'request blocked by CORS'
export const fakeResult : string[] = []

for (let i = 0; i < 10; i++) {
    fakeResult.push(fakeResponce)
}