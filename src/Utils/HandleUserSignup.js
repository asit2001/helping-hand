import { ValidateEmail } from "./ValidEmail"

export function HandleUserSignupError(formdata){
    const {username,email,password,confirm_password} = formdata

    if(username.length < 3){
        return 'Name minimum length is 3'
    }
    else if(!ValidateEmail(email)){
        return 'Please enter a valid email'
    }
    else if(password.length < 4){
        return 'password must minimum length 4'
    }
    else if((confirm_password.length === 0 || password !== confirm_password)){
        return 'password not match'
    }

    return null;
}