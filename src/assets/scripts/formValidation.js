export const formValidation = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = 'ایمیل خود را وارد کنید';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'ایمیل وارد شده معتبر نیست!';
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = 'رمز عبورتان را وارد کنید';
    } else if (data.password.length < 8) {
        errors.password = 'رمز عبور نباید کمتر از 8 کارکتر باشد';
    } else {
        delete errors.password;
    }

    if (type === 'edit') {

        if (!data.name.trim()) {
            errors.name = 'نام کاربری خود را وارد کنید!';
        } else {
            delete errors.name;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = 'رمز عبورتان را تأیید کنید';
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'عدم تطابق رمز عبور';
        } else {
            delete errors.confirmPassword;
        }

    }

    if (type === 'signUp') {

        if (!data.name.trim()) {
            errors.name = 'نام کاربری خود را وارد کنید!';
        } else {
            delete errors.name;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = 'رمز عبورتان را تأیید کنید';
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'عدم تطابق رمز عبور';
        } else {
            delete errors.confirmPassword;
        }

        if (!data.isAccepted) {
            errors.isAccepted = 'قوانین و مقررات مارا بپذیرید';
        } else {
            delete errors.isAccepted;
        }

    }

    if (type === 'payment') {

        if (!data.address.trim()) {
            errors.address = 'وارد کردن آدرس الزامی میباشد!';
        } else {
            delete errors.address;
        }

        if (!data.city) {
            errors.city = 'نام شهر الزامی است!';
        } else {
            delete errors.city;
        }

        if (!data.postalCode) {
            errors.postalCode = 'کد پستی الزامی است';
        } else {
            delete errors.postalCode;
        }

        if (!data.phone) {
            errors.phone = 'وارد کردن شماره موبایل الزامی است!';
        } else {
            delete errors.phone;
        }

    }

    return errors;

}

const payValidation = (data) => {

    const errors = {};

    if (!data.address.trim()) {
        errors.address = 'وارد کردن آدرس الزامی میباشد!';
    } else {
        delete errors.address;
    }

    if (!data.city) {
        errors.city = 'نام شهر الزامی است!';
    } else {
        delete errors.city;
    }

    if (!data.postalCode) {
        errors.postalCode = 'کد پستی الزامی است';
    } else {
        delete errors.postalCode;
    }

    if (!data.phone) {
        errors.phone = 'وارد کردن شماره موبایل الزامی است!';
    } else if (!/(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig.test(data.phone)) {
        errors.phone = 'شماره تماس را به درستی وارد کنید.'
    } else {
        delete errors.phone;
    }

    return errors;

}

export { payValidation };