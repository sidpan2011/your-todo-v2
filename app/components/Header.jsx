"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'
import { Separator } from '@/components/ui/separator'
import Logo from './Logo'
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Header = () => {
    const menus = ["Features", "Pricing"]
    return (
        <>
            <header className='z-50 flex justify-between items-center w-full py-4 px-4 sm:px-6 lg:px-8 backdrop-blur-md fixed top-0 left-0 right-0 bg-background/80'>
                <Logo position={"top"} />
                <div className='flex items-center gap-2 sm:gap-3'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger >Resources</NavigationMenuTrigger>
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
                    <Separator orientation="vertical" className="h-auto hidden sm:block" />
                    <Button size="sm">Try It Free</Button>
                    <ModeToggle />
                </div>
            </header>
            <Separator className="fixed w-full top-[72px]" />
        </>
    )
}

export default Header