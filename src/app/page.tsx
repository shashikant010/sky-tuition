
"use client";
 
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
 
import Particles from "@/components/magicui/particles";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
 
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={color}
        refresh
      />
    </div>)
}
