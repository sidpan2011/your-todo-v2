import { Button } from '@/components/ui/button'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Logo from './Logo'

const Header = () => {
    const menus = ["Features", "Resources", "Pricing"]
    return (
        <header className='z-20 flex justify-between items-center w-full py-4 px-16 backdrop-blur-md fixed top-0 left-0 right-0 bg-background/80'>
            {/* Logo on the left */}
            <Logo position={"top"} />

            {/* Menus and mode toggle on the right */}
            <div className='flex gap-3'>
                {menus.map((menu, index) => (
                    <Link href={`/${menu.toLowerCase()}`} key={index}>
                        <Button variant="ghost">{menu}</Button>
                    </Link>
                ))}
                <Separator orientation="vertical" className="h-auto" />
                <Button>Try It Free</Button>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header