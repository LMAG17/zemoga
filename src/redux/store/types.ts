export interface PostDetail {
    postData: Post;
    userData: User;
    comments: Comment[];
}

export interface User {
    id: Number;
    name: String;
    username: String;
    email: String;
    phone: String;
    website: String;
    company: Company;
    address: Address;
}

export interface Company {
    name: String;
    catchPhrase: String;
    bs: String;
}

export interface Address {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: String;
}

export interface Geo {
    lat: String;
    lng: String;
}

export interface Comment {
    postId: String;
    id: String;
    name: String;
    email: String;
    body: String;
}

export interface Post {
    title: String;
    body: String;
    id: number;
    userId: number;
    isFavorite?: boolean;
}

export interface AppState {
    posts: Post[];
    postDetail: PostDetail;
    refreshing: boolean;
}

export const initialState: AppState = {
    refreshing: false,
    posts: [],
    postDetail: {
        postData: {
            title: '',
            body: '',
            id: 0,
            userId: 0,
            isFavorite: false
        },
        userData: {
            id: 0,
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            },
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: ''
            }
        },
        comments: []
    }
};