import { IMAGESURL } from "../constants/ServiceConstants"

export const getImage = (post) => {
    return `${IMAGESURL}${post.id}${post.title}`
}
