import Image from "next/image";
import { useState } from "react";
import { useTheme } from 'next-themes';

import tunningLight from "@assets/Light/Tuning.svg";
import tunningDark from "@assets/Dark/Tuning.svg";

import CheckLight from "@assets/Light/Check.svg";
import CheckDark from "@assets/Dark/Check.svg";

export default function ThemeSwitch() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <section className={`
            flex flex-col gap-y-1.5 overflow-hidden transition-all
            ${isOpened ? "h-[100px]" : "h-6"}
        `}>

            <label htmlFor="theme-switch"
                className="flex items-center gap-x-3 cursor-pointer" 
                onClick={() => isOpened ? setIsOpened(false) : setIsOpened(true)}>

                <Image
                    src={resolvedTheme === "light" ? tunningLight : tunningDark}
                    alt="Tunning icon"
                />

                <p className="text-neutral-500 dark:text-neutral-0 text-body-small sm:text-body-medium">Ganti mode</p>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`
                            transition-transform
                            ${isOpened && "rotate-[-180deg]"}
                        `}>
                        <path d="M16.8 9.5999L12 14.3999L7.20005 9.5999" className="stroke-neutral-500 dark:stroke-neutral-0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </label>

            <article id="light-mode" className="text-body-small sm:text-body-medium pl-12 pr-4 flex items-center gap-x-3  cursor-pointer">
                <p className={`
                    ${resolvedTheme === "light" ? "text-fiera-400 dark:text-fiera-0" : "text-neutral-400 dark:text-neutral-300"}
                `}
                onClick={() => {
                    setIsOpened(false);
                    setTheme('light');
                }}
                >Mode terang</p>

                {resolvedTheme === "light" &&
                    <Image
                        src={CheckLight}
                        alt="Check icon"
                    />
                }
            </article>

            <article id="dark-mode" className="text-body-small sm:text-body-medium pl-12 pr-4 flex items-center gap-x-3 cursor-pointer">
                <p className={`
                    ${resolvedTheme === "dark" ? "text-fiera-400 dark:text-fiera-0" : "text-neutral-400 dark:text-neutral-300"}
                `}
                onClick={() => {
                    setIsOpened(false);
                    setTheme('dark');
                }}

                >Mode gelap</p>

                {resolvedTheme === "dark" &&
                    <Image
                        src={CheckDark}
                        alt="Check icon"
                    />
                }

            </article>

        </section>
    );
}