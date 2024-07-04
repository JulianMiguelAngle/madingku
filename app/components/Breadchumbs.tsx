'use client'

import { useTheme } from 'next-themes';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import chevronRightLight from "@assets/Light/Chevron right.svg";
import chevronRightDark from "@assets/Dark/Chevron right.svg";

type BreadchumbProps = {
    label: string;
    href: string;
    highlighted?: boolean;
}

export function Breadchumb({ label, href, highlighted = false }: BreadchumbProps) {
    const { resolvedTheme } = useTheme();

    return (
        <Link href={href} className='flex items-center gap-x-1'>
            <p className={highlighted ? "text-fiera-400 dark:text-fiera-100" : ""}>{ label }</p>

            {!highlighted &&
            <Image
                src={resolvedTheme === "light" ? chevronRightLight : chevronRightDark}
                alt="Chevron right icon"
                height={24}
                width={24}
            />
            }
            
        </Link>
    );
}

export function BreadchumbsContainer({ children }: { children: ReactNode }) {
    return (
        <nav className={"flex flex-wrap gap-y-2 items-center text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-200"}>
            { children }
        </nav>
    );
}