import ServiceFactory from "./ServiceFactory";
import { BASEURL, MEHTODS, ROUTES } from '../constants/ServiceConstants';

export default class ServiceInteractor {
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    await ServiceFactory.handleMethod({
                        method: MEHTODS.GET,
                        url: `${BASEURL}${ROUTES.POSTS}`,
                    })
                );
            }
            catch (error) {
                reject(error);
            }
        });
    }

    static getPost(id) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    await ServiceFactory.handleMethod({
                        method: MEHTODS.GET,
                        url: `${BASEURL}${ROUTES.POSTS}/${id}`,
                    })
                );
            }
            catch (error) {
                reject(error);
            }
        });
    }

    static getUserDataByUserId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    await ServiceFactory.handleMethod({
                        method: MEHTODS.GET,
                        url: `${BASEURL}${ROUTES.USERS}/${id}`,
                    })
                );
            }
            catch (error) {
                reject(error);
            }
        });
    }

    static getCommentsByPostId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    await ServiceFactory.handleMethod({
                        method: MEHTODS.GET,
                        url: `${BASEURL}${ROUTES.POSTS}/${id}/comments`,
                    })
                );
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
