import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";

import settingsLight from "@assets/Light/Settings.svg";
import settingsDark from "@assets/Dark/Settings.svg";

import logoutLight from "@assets/Light/Logout.svg";
import logoutDark from "@assets/Dark/Logout.svg";

type User = {
    name: string;
    id: string;
    avatar: string;
}

type State = "closed" | "opened";

type DropdownProfile = {
    state: State;
    onClickOutsideHandler?: () => void;
}

export function DropdownProfile({ state, onClickOutsideHandler }: DropdownProfile) {
    const { resolvedTheme } = useTheme();

    const user: User = {
        name: "Zahra",
        id: "221011",
        avatar: "https://i.pinimg.com/originals/f8/08/e2/f808e2a94d2a2d1e6c3a0314e2f3b752.jpg"
    };
    
    return (
        <section className={`${state === "opened" && "fixed top-20 bottom-0 left-0 sm:left-[290px] right-0"}`}
        onClick={() => onClickOutsideHandler && onClickOutsideHandler()}>

            <section className={`
                ${state === "opened" && "h-fit p-4 absolute border border-solid"}

                w-[200px] flex flex-col gap-y-6 rounded-lg h-0 overflow-hidden top-0 right-0 sm:right-6 lg:right-12
                bg-neutral-0 dark:bg-neutral-700 border-neutral-100 dark:border-neutral-600 shadow-light-small dark:shadow-dark-small
            `}>
                <article className="flex items-center gap-x-3">
                    <Image
                        src={user.avatar}
                        alt="User avatar"
                        height={150}
                        width={150}
                        className="h-[50px] w-[50px] aspect-square object-cover rounded-full overflow-hidden"
                    />

                    <section className="flex flex-col gap-y-2 text-body-small sm:text-body-medium">
                        <h1 className="text-neutral-600 dark:text-neutral-100">
                            {user.name}
                        </h1>

                        <h2 className="text-neutral-400 dark:text-neutral-300">
                            {user.id}
                        </h2>
                    </section>
                </article>

                <nav className="flex flex-col gap-y-4 text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-200">
                    <Link href={"/settings"} className="flex items-center gap-x-3">
                        <Image
                            src={resolvedTheme === "light" ? settingsLight : settingsDark}
                            alt="Settings icon"
                            height={24}
                            width={24}
                        />
                        <p>Pengaturan</p>
                    </Link>

                    <Link href={"/logout"} className="flex items-center gap-x-3">
                        <Image
                            src={resolvedTheme === "light" ? logoutLight : logoutDark}
                            alt="Logout icon"
                            height={24}
                            width={24}
                        />
                        <p>Keluar</p>
                    </Link>
                </nav>
            </section>
        </section>
    );
}