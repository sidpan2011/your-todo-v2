"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { AnimatedShinyTextDemo } from "./AnimatedShinyText";
import Title from "./Title";
import RainbowButtonReuseable from "./RainbowButtonReuseable";
import Subtitle from "./Subtitle";
import { BorderBeam } from "@/components/ui/border-beam";



export function ParticlesDemo() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="flex flex-col justify-center min-h-auto bg-background overflow-hidden">
            <main className="flex-grow relative flex mt-40 justify-center">
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
                    <Subtitle text={"Stay effortlessly organized, streamline every task, and unlock your full potential to achieve more with clarity and ease."} />
                    <RainbowButtonReuseable text={"Get started for free"} />
                    <div className="relative lg:h-[70vh] lg:w-[80vw] h-[30vh] w-[90vw] md:h-[60vh] md:w-[] mx-4 my-12 rounded-xl">
                        <BorderBeam duration={8} />
                    </div>
                </div>
            </main >
        </div >
    );
}
