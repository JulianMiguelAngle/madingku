import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import arrowRightUpLight from "@assets/Light/Arrow right up.svg";
import arrowRightUpDark from "@assets/Dark/Arrow right up.svg";

type ClassProfile = {
    name: string;
    avatar: string;
    major: string;
}

export function ClassProfile() {
    const { resolvedTheme } = useTheme();

    const { name, major, avatar }: ClassProfile = {
        name: "04TPLP026",
        avatar: "https://i.pinimg.com/564x/8d/28/1f/8d281f5027eaf516bd99b5af1e137c7d.jpg",
        major: "Computer Science"
    };

    return (
        <article className="flex items-center gap-x-3">
            <Image
                src={avatar}
                alt="class profile"
                className="w-[50px] sm:w-[60px] aspect-square object-cover rounded"
                height={150}
                width={150}
                quality={100}
            />

            <section className="flex flex-col gap-y-1.5">

                <Link href={`/class/${name}`} className="flex items-center gap-x-3 justify-between">

                    <h1 className="text-h4-small sm:text-h4-medium lg:text-h4-large text-neutral-600 dark:text-neutral-0">{ name }</h1>

                <Image
                    src={resolvedTheme === "light" ? arrowRightUpLight : arrowRightUpDark}
                    alt="Arrow right up icon"
                    height={24}
                    width={24}
                    quality={100}
                />

                </Link>

                <h2 className="text-neutral-400 dark:text-neutral-200 text-body-small sm:text-body-medium">{ major }</h2>
            </section>
        </article>
    );
}