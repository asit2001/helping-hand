import { ValidateEmail } from "./ValidEmail"
export function ValidSpForm1(formdata){
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

export function ValidSpForm2(formdata){
    const {shopname,shopcat,mobile} = formdata

    if(shopname.length < 3){
        return 'Shopname length must 3'
    }
    else if(shopcat === 'Select catagery'){
        return 'please select catgeroy'
    }
    else if(mobile.length < 10 || mobile.length > 10){
        return 'mobile no not valid'
    }
    return null
}

export function ValidSpAddressform(formdata){
    const {address1,city,pincode,country} = formdata

    if(address1.length < 5){
        return 'address must requred'
    }
    else if(city === ''){
        return 'please enter valid city'
    }
    else if(pincode.length < 5){
        return 'please enter valid pincode'
    }
    else if(country === ''){
        return 'please enter valid country'
    }

    return null;
}