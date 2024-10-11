import Link from 'next/link'
import React from 'react'
import tasklyLogo from "../../public/assests/logo.png"
import Image from 'next/image'

const Logo = ({ position }) => {
    return (
        <>
            {
                position === "top"
                    ?
                    <Link href='/'>
                        <div className='flex items-center gap-2'><Image src={tasklyLogo} alt="Taskly logo" className='h-10 w-10 p-0 m-0' /><span className='text-3xl font-extrabold'>Taskly</span></div>
                    </Link>
                    :
                    <h1 className='text-3xl font-extrabold'>Taskly</h1>
            }
        </>
    )
}

export default Logo