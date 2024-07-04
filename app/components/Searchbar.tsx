import Image from "next/image";
import { useTheme } from "next-themes";

import searchLight from "@assets/Light/Search.svg";
import searchDark from "@assets/Dark/Search.svg";

type Searchbar = {
    placeholder: string;
    onChangeSearchHandler?: (text: string) => void;
}

export function Searchbar({
    placeholder,
    onChangeSearchHandler
}: Searchbar) {
    const { resolvedTheme } = useTheme();

    return (
        <fieldset className={`
            h-10 px-3 flex items-center gap-x-4 rounded-lg bg-neutral-0 dark:bg-neutral-600 
            border border-solid border-neutral-100 dark:border-neutral-500
        `}>
            <Image
                src={resolvedTheme === "light" ? searchLight : searchDark}
                alt={"Search icon"}
                height={20}
                width={20}
            />

            <input 
                className="text-body-small sm:text-body-medium text-neutral-600 dark:text-neutral-100 placeholder:text-neutral-300 dark:placeholder:text-neutral-400"
                type="search" 
                placeholder={placeholder}
                onChange={(event) => onChangeSearchHandler && onChangeSearchHandler(event.currentTarget.value)}
            />
        </fieldset>
    );
}