import Image from "next/image";
import Link from "next/link";

import { useTheme } from 'next-themes';

import LogoLightWithText from "@assets/Logo with text light.svg";
import LogoDarkWithText from "@assets/Logo with text dark.svg";

import Close from "@assets/Light/Close.svg";

import WidgetLight from "@assets/Light/Widget.svg";
import WidgetDark from "@assets/Dark/Widget.svg";

import UsersLight from "@assets/Light/Users.svg";
import UsersDark from "@assets/Dark/Users.svg";

import DocumentLight from "@assets/Light/Document.svg";
import DocumentDark from "@assets/Dark/Document.svg";

import { Button } from "./Button";
import ThemeSwitch from "./ThemeSwitch";
import { ClassProfile } from "./ClassProfile";

type Sidebar = {
    state: "closed" | "opened";
    onClickCloseHandler?: () => void;
}

export function MainSidebar({
    state,
    onClickCloseHandler
}: Sidebar) {
    return (
        <aside className={`
            h-full w-full max-w-[280px] p-6 fixed z-20 top-0 bottom-0 flex flex-col justify-between bg-neutral-0 transition-all duration-500
            ${state === "opened" ? "left-0 sm:left-[-100vw]" : "left-[-100vw]"}
        `}>

            <section className="flex justify-end">
                <Image
                    src={Close}
                    alt="Close icon"
                    className="cursor-pointer"
                    onClick={() => onClickCloseHandler && onClickCloseHandler()}
                />
            </section>

            <section className="text-body-small flex flex-col gap-y-12 text-neutral-500">
                <Link href={"/"} className="hover:text-fiera-400">Beranda</Link>
                <Link href={"/pricing"} className="hover:text-fiera-400">Harga</Link>
                <Link href={"https://madingku-docs.vercel.app/"} className="hover:text-fiera-400">Dokumentasi</Link>
                <Link href={"mailto:dev.achmadjulian@gmail.com"}>Pusat bantuan</Link>

                <Button
                    variant="primary"
                    state="active"
                    size="large"
                    label="Masuk"
                />
            </section>

            <Image
                className="h-[50px] w-[120px] sm:w-[150px] cursor-pointer"
                src={LogoLightWithText}
                alt="Madingku Logo"
            />
        </aside>
    );
}

export function MadingSidebar({ 
    state,
    onClickCloseHandler
}: Sidebar) {
    const { resolvedTheme } = useTheme();

    return (
        <aside className={`
            h-full min-w-[280px] max-w-[280px] p-6 fixed z-10 top-0 bottom-0 sm:static sm:flex-grow-[2]
            flex flex-col gap-y-6 justify-between border-r transition-all duration-700
            
            before:top-0 before:bottom-0 before:left-0 before:right-0 before:absolute before:z-0 before:h-screen before:w-screen sm:before:hidden
            
            bg-neutral-0 dark:bg-neutral-700 border-r-neutral-100 dark:border-r-neutral-600
            ${state === "opened" ? "left-0" : "left-[-100vw]"}
        `}
        
        onClick={(event) => {
            if ((event.clientX - 280) > 0) {
                onClickCloseHandler && onClickCloseHandler();
            }
        }}>

            <section className={`
                flex flex-col gap-y-12
                ${state === "opened" && "max-sm:top-0 max-sm:bottom-0 max-sm:left-0 max-sm:relative z-1"}
            `}>
                <ClassProfile />

                <nav className={`
                    flex flex-col gap-y-6
                    text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-100
                `}>
                    <Link href={"/mading"} className="flex items-center gap-x-4">
                        <Image
                            src={resolvedTheme === "light" ? WidgetLight : WidgetDark}
                            alt="Widget icon"
                        />

                        <p>Mading</p>
                    </Link>

                    <Link href={"/groups"} className="flex items-center gap-x-4">
                        <Image
                            src={resolvedTheme === "light" ? UsersLight : UsersDark}
                            alt="Widget icon"
                        />

                        <p>Kelompok</p>
                    </Link>

                    <Link href={"/task"} className="flex items-center gap-x-4">
                        <Image
                            src={resolvedTheme === "light" ? DocumentLight : DocumentDark}
                            alt="Widget icon"
                        />

                        <p>Tugas</p>
                    </Link>

                    <ThemeSwitch />
                </nav>
            </section>

            <Image
                className="h-[50px] w-[120px] sm:w-[150px] cursor-pointer"
                src={resolvedTheme === "light" ? LogoLightWithText : LogoDarkWithText}
                alt="Madingku Logo"
            />
        </aside>
    );
}