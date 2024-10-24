"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Logo from './Logo'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, MenuSquare } from "lucide-react"
import RainbowButtonReuseable from "./RainbowButtonReuseable"

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    const menus = ["Features", "Pricing", "FAQs"]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <header className=' z-50 flex justify-between items-center w-full py-4 px-4 sm:px-6 lg:px-8 fixed top-0 right-0 backdrop-blur-md bg-background/80'>
                <Logo position={"top"} />
                {
                    !isMobile ? <div className='flex items-center gap-2 sm:gap-3'>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="dark:bg-transparent" >Resources</NavigationMenuTrigger>
                                    <NavigationMenuContent className="p-2 w-[200px]">
                                        <Link href="/resources/getting-started" legacyBehavior passHref>
                                            <NavigationMenuLink>
                                                <Button variant="ghost" className="w-full justify-start">Getting started</Button>
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/resources/inspiration-hub" legacyBehavior passHref>
                                            <NavigationMenuLink>
                                                <Button variant="ghost" className="w-full justify-start">Inspiration Hub</Button>
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/resources/help-center" legacyBehavior passHref>
                                            <NavigationMenuLink>
                                                <Button variant="ghost" className="w-full justify-start">Help center</Button>
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        {menus.map((menu, index) => (
                            <Link href={`/${menu.toLowerCase()}`} key={index}>
                                <Button variant="ghost">{menu}</Button>
                            </Link>
                        ))}
                        {/* <Separator orientation="vertical" className="h-auto hidden sm:block" /> */}
                        <RainbowButtonReuseable text={"Try it now"} />
                    </div> : <Menu />
                }
            </header>
            <Separator className="fixed w-full top-[76px]" />
        </>
    )
}

export default Header