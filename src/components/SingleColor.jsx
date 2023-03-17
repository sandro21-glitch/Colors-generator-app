import React, { useEffect, useState } from 'react';
import {FaCopy} from 'react-icons/fa';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: 'green',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: false
  })


const SingleColor = ({list, index}) => {
    const [showAlert, setShowAlert] = useState(false);


    if(showAlert) {
        Toast.fire({
            icon: 'success',
            title: 'Copied to clipboard'
        })
    }
    useEffect(() => {
        setShowAlert(false)
    },[showAlert])
   
    return (
    <article className={`group w-full flex justify-between md:w-72 md:h-72 border p-4 ${index > 10 ? 'text-white' : 'text-black'}`} style={{backgroundColor: `#${list.hex}`}}>
        <div>
            <p>{`${list.weight}%`}</p>
            <p>{`#${list.hex}`}</p>
        </div>
        <div onClick={() => {
            setShowAlert(true);
            navigator.clipboard.writeText(`#${list.hex}`)
        }}>
            <FaCopy className='text-2xl cursor-pointer hidden group-hover:block' />
        </div>
    </article>
  )
}

export default SingleColor;
