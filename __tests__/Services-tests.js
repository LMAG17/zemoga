import ServiceInteractor from "../src/services/ServiceInteractor";

const validateObject = (value) => {
    return (
        typeof value === 'object' &&
        !Array.isArray(value) &&
        value !== null
    )
};

it('Returns a list of posts', async () => {
    const posts = await ServiceInteractor.getPosts();
    expect(Array.isArray(posts)).toEqual(true);
});

it('Returns a list of Comments', async () => {
    const comments = await ServiceInteractor.getCommentsByPostId(1);
    expect(Array.isArray(comments)).toEqual(true);
});

it('Returns a post', async () => {
    const post = await ServiceInteractor.getPost(1);
    expect(validateObject(post)).toEqual(true);
});

it('Returns a userData', async () => {
    const userData = await ServiceInteractor.getUserDataByUserId(1);
    expect(validateObject(userData)).toEqual(true);
});