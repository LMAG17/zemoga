import axios from "axios";

export default class ServiceFactory {
    static handleMethod({ method, url, body }) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await (await
                    axios.get(url, {
                        body: JSON.stringify(body),
                        method,
                    })
                ).data);
            } catch (error) {
                reject(error);
            }
        })
    }
}