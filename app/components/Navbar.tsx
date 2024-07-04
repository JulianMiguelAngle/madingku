'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

import { useTheme } from 'next-themes';

import LogoWithTextLight from "@assets/Logo with text light.svg";
import LogoWithTextDark from "@assets/Logo with text dark.svg";

import menuLight from "@assets/Light/Menu.svg";
import menuDark from "@assets/Dark/Menu.svg";

import { Button } from "./Button";

type MadingNavbar = {
    onClickMenuHandler?: () => void;
    onClickAvatarHandler?: () => void;
}

export function MadingNavbar({
    onClickMenuHandler,
    onClickAvatarHandler
}: MadingNavbar) {
    const { resolvedTheme } = useTheme();

    return (
        <nav className={`
            h-[80px] w-full py-[10px] px-4 sm:px-6 lg:px-12 flex items-center justify-between
            bg-neutral-0 border-b border-solid border-neutral-100 dark:bg-neutral-700 dark:border-neutral-600
        `}>

            <Image
                className="cursor-pointer sm:hidden"
                src={resolvedTheme === "light" ? menuLight : menuDark}
                alt="Hamburger menu icon"
                height={32}
                width={32}
                onClick={() => onClickMenuHandler && onClickMenuHandler()}
            />

            <span className="max-sm:block h-6 w-6" />

            <Image
                className="cursor-pointer object-cover aspect-square rounded-full border-[1.5px] border-solid border-fiera-200"
                src={"https://i.pinimg.com/originals/f8/08/e2/f808e2a94d2a2d1e6c3a0314e2f3b752.jpg"}
                height={50}
                width={50}
                quality={100}
                loading="lazy"
                alt={`user profile`}

                onClick={() => onClickAvatarHandler && onClickAvatarHandler()}
            />
        </nav>
    );
}

export function MainNavbar({
    onClickMenuHandler
}: MadingNavbar) {
    const router = useRouter();
    const { resolvedTheme } = useTheme();

    return (
        <nav className={`
            h-[80px] py-[10px] px-4 sm:px-6 lg:px-12 flex items-center justify-between fixed z-10 top-0 right-0 left-0
            bg-neutral-0 shadow-light-small border-b border-solid border-neutral-100
        `}>
            <Link href={"/"}>
                <Image
                    className="h-[60px] w-[120px] sm:w-[150px] cursor-pointer"
                    src={LogoWithTextLight}
                    alt="Madingku Logo"
                />            
            </Link>

            <Image
                className="cursor-pointer sm:hidden"
                src={menuLight}
                alt="Hamburger menu icon"
                height={32}
                width={32}
                onClick={() => onClickMenuHandler && onClickMenuHandler()}
            />

            <section className="max-sm:hidden text-body-medium flex items-center gap-x-6 text-neutral-500">
                <Link href={"/"} className="hover:text-fiera-400">Beranda</Link>
                <Link href={"/pricing"} className="hover:text-fiera-400">Harga</Link>
                <Link href={"/docs"} className="hover:text-fiera-400">Dokumentasi</Link>

                <Button
                    variant="primary"
                    state="active"
                    size="large"
                    label="Masuk"
                    onClickHandler={() => router.push('/login')}
                />
            </section>
        </nav>
    );
}