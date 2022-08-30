import {post} from "@/api/http";


export function login(param) {
    return post('/login', param);
}
export function register(param) {
    return post('/register', param);
}