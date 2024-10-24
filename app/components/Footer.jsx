"use client"

import React from 'react'
import { Separator } from '@/components/ui/separator'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { FaGithub, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { ModeToggle } from './mode-toggle'

const Footer = () => {
    return (
        <footer className='mt-auto flex flex-col bg-white dark:bg-black w-full overflow-hidden'>
            <Separator />
            <div className='lg:px-8 px-4 py-5 flex justify-between items-center'>
                <div className=' flex flex-col'>
                    <Logo position={"bottom"} />
                    {/* <h2 className='text-black dark:text-white mt-2 text-sm opacity-30'>Secure. Private. Decentralized.</h2> */}
                </div>
                <div className='flex flex-row space-x-3'>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Button variant="link" size="icon" className="opacity-30 hover:opacity-100 transition-all">
                            <FaGithub size={24} />
                        </Button>
                    </a>
                    <a href="">
                        <Button variant="link" size="icon" className=" opacity-30 hover:opacity-100 transition-all">
                            <RiTwitterXFill  size={24} />
                        </Button>
                    </a>
                    <a href="">
                        <Button variant="link" size="icon" className=" opacity-30 hover:opacity-100 transition-all">
                            <FaDiscord size={24} />
                        </Button>
                    </a>
                    <ModeToggle />
                </div>
            </div>

            <div className='lg:mx-72 sm:mx-10 mt-6 justify-center items-center flex'>
            </div>
            <p className='text-sm text-black pb-12 text-center dark:text-white opacity-30'>
                © {new Date().getFullYear()} Taskly. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer