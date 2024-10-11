"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { Button } from "@/components/ui/button";
import { AnimatedShinyTextDemo } from "./AnimatedShinyText";
import { ChevronRight } from "lucide-react";
import Title from "./Title";



export function ParticlesDemo() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="flex flex-col min-h-screen bg-background overflow-hidden">
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
                    <Title title={"Conquer Your Tasks, Master Your Day."} />
                    <p className="text-lg tracking-tight text-gray-400 mb-6 text-balance md:text-xl text-center">
                    Stay effortlessly organized, streamline every task, and unlock your full potential to achieve more with clarity and ease.
                    </p>
                    <Button>Get Started for free<ChevronRight className="ml-1" size={18} /></Button>
                </div>
            </main >
        </div >
    );
}
