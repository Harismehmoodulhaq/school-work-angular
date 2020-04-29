import { User } from "./models/user";
import { EmailValidator } from '@angular/forms';

const USERS: User[] = [
    // {
    //     id:1,
    //     // username:"HarisMehmood",
    //     email: 'hsmeh.dev@gmail.com',
    //     password: 'Haris123'
    // },
    // {
    //     id:2,
    //     // username:"Mhmoodulhaq",
    //     email: 'mehmoodulhaq.dev@gmail.com',
    //     password: 'Mehmood123'

    // },
    // {
    //     id:3,
    //     // username:"RomesaMehmood",
    //     email: 'romesa2010.dev@gmail.com',
    //     password: 'Romesa123'
    // },
    // {
    //     id:4,
    //     // username:"Kashif Ahemed",
    //     email:'kashif91ahemed@gmail.com',
    //     password:'Kashif123'
    // }

    {
        username:'admin-stg2',
        pinCode: '123456'
    }
]

export function userExists(username, pinCode){
    return !!(USERS.filter((user)=>{
        return user.username === username && user.pinCode === pinCode
    }).length)
}