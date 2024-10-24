import Link from 'next/link'
import React from 'react'
import tasklyLogo from "../../public/assests/logo.png"
import Image from 'next/image'

const Logo = ({ position }) => {
    return (
        <div>
            {
                position === "top"
                    ?
                    <Link href='/'>
                        <div className='flex items-center gap-2'><Image src={tasklyLogo} alt="Taskly logo" className='h-10 w-10 p-0 m-0' /><span className='text-2xl font-semibold tracking-tighter'>taskly</span></div>
                    </Link>
                    :
                    <div className='flex items-center gap-2'><Image src={tasklyLogo} alt="Taskly logo" className='h-10 w-10 p-0 m-0' /><span className='text-2xl font-semibold tracking-tighter'>taskly</span></div>
            }
        </div>
    )
}

export default Logo