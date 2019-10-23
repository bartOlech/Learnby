
export const EmailValidation = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const PasswordValidation = (password, password2) => {
    if(password === password2) {
        if(password.length > 6) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}