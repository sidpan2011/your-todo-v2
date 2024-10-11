"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import Header from "./Header";
import { Separator } from "@/components/ui/separator";
import { SparklingText } from "./SparklingText";
import { Button } from "@/components/ui/button";
import { AnimatedShinyTextDemo } from "./AnimatedShinyText";
import { ChevronRight } from "lucide-react";



export function ParticlesDemo() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="flex flex-col min-h-screen bg-background overflow-hidden">
            <div className="z-30 relative">
                <Header />
                <Separator className="fixed w-full top-[72px]" />
            </div>

            <main className="flex-grow relative flex items-center">
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={50}
                    ease={80}
                    color={color}
                    refresh
                />
                <div className="z-20 relative mx-16 flex flex-col items-center gap-1">
                    <AnimatedShinyTextDemo />
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br bg-clip-text text-center lg:text-8xl md:text-7xl px-8  leading-none text-transparent from-black to-gray-500/80 dark:from-white dark:to-gray-300/80 py-6 font-medium tracking-tighter text-balance text-6xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
                        Conquer Your Tasks, Master Your Day.
                    </h1>
                    <p className="text-lg tracking-tight text-gray-400 mb-6 text-balance md:text-xl text-center">
                    Stay effortlessly organized, streamline every task, and unlock your full potential to achieve more with clarity and ease.
                    </p>
                    <Button>Get Started for free<ChevronRight className="ml-1" size={18} /></Button>
                </div>
            </main >
        </div >
    );
}
