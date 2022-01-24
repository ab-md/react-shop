import Swal from "sweetalert2";

const myToastyAlert = (title, type) => {
    Swal.fire({
        title: title,
        icon: type,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
        toast: true,
        position: 'top',
    })
}

const myAlert = (title, type) => {
    Swal.fire({
        title: title,
        icon: type,
        showConfirmButton: true,
        toast: false,
        position: 'center',
    })
}

export { myAlert, myToastyAlert };