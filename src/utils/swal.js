import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export const errorSwal =(icon , message)=>{
    Swal.fire({
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        icon: icon,
        title: message,
        background:"##F2ACB9",
        color:"#000",
        iconColor:"#a90534",
      })
};

export const successSwal =()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Completed',
        showConfirmButton: false,
        timer: 1500,
         background:"##F2ACB9",
        color:"#000",
        
      })
};