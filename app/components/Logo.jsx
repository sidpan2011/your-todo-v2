import Link from 'next/link'
import React from 'react'

const Logo = ({ position }) => {
    return (
        <>
            {
                position === "top" ? <Link href='/'>
                    <h1 className='text-3xl font-extrabold'>Taskly</h1>
                </Link>
                    :
                    <h1 className='text-3xl font-extrabold'>Taskly</h1>
            }
        </>
    )
}

export default Logo