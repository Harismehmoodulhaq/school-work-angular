import { User } from "./models/user";
import { EmailValidator } from '@angular/forms';

const USERS: User[] = [
    {
        id:1,
        email: 'test1@gmail.com',
        password: '123'
    },
    {
        id:2,
        email: 'test2@gmail.com',
        password: '123'

    },
    {
        id:3,
        email: 'test3@gmail.com',
        password: '123'
    }
]

export function userExists(email, password){
    return !!(USERS.filter((user)=>{
        return user.email === email && user.password === password
    }).length)
}