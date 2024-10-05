"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import Header from "./Header";
import { Separator } from "@/components/ui/separator";



export function ParticlesDemo() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden bg-background">
            {/* Particles as Background */}
            <Particles
                className="fixed inset-0 z-0"
                quantity={30}
                ease={80}
                color={color}
                refresh
            />
            <div className="z-50 bg-background">
                <Header />
                <Separator className="fixed w-full bg-red-500 top-[72px]" />
            </div>
        </div>
    );
}
