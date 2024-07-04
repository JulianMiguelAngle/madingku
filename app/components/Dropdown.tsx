import { useState } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";

import chevronDownLight from "@assets/Light/Chevron down.svg";
import chevronDownDark from "@assets/Dark/Chevron down.svg";

type Dropdown = {
    label: string;
    option?: string;
    items: Array<{
        id: string;
        value: any;
        action: () => void;
    }>;
    value: any;
    placeholder: string;
    state: "active" | "disabled";
}

export function Dropdown({
    state = "active",
    label,
    option,
    items,
    value,
    placeholder
}: Dropdown) {
    const { resolvedTheme } = useTheme();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <fieldset 
            className="flex flex-col gap-y-4 text-body-small sm:text-body-medium">

            <label htmlFor={label}
                className="flex gap-6 items-center">

                <p className={`w-full
                    ${state === "active" ? (
                        "text-neutral-700 dark:text-neutral-0"
                    ) : (
                        "text-neutral-400 dark:text-neutral-400"
                    )}
                    `}>{label}</p>

                {option && (
                    <p className={`
                    ${state === "active" ? (
                        "text-neutral-500 dark:text-neutral-200"
                    ) : (
                        "text-neutral-300 dark:text-neutral-500"
                    )}
                    `}>{ option }</p>
                    )}
            </label>

            <section className="flex flex-col" id={label}>
                
                <section 
                    className={`
                        py-1.5 px-4 bg-neutral-0 dark:bg-neutral-700 border border-solid border-neutral-100 dark:border-neutral-600 rounded-lg
                        h-[50px] flex items-center justify-between gap-x-6
                    `}
                    onClick={() => isOpened ? setIsOpened(false) : setIsOpened(true)}>

                    <p className={`
                        w-full text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-200
                    `}>
                        { value.length === 0 ? placeholder : value }
                    </p>

                    <Image
                        src={resolvedTheme === "light" ? chevronDownLight : chevronDownDark}
                        alt={"Chevron icon"}
                        className={`transition-transform ${isOpened && "rotate-[-180deg]"}`}
                    />
                </section>
                
                <article className={`
                    flex flex-col gap-y-4 rounded-lg transition-all
            
                    ${isOpened ? (
                        "h-[200px] p-1.5 bg-neutral-0 dark:bg-neutral-700 border border-solid border-neutral-200 dark:border-neutral-500 overflow-scroll"
                    ): (
                        "h-0 p-0 border bg-neutral-0 dark:bg-neutral-700 border-none overflow-hidden"
                    ) }
                `}>
                    {items.map((item) => (
                        <option 
                            className={`
                                py-1.5 px-4 min-h-8 rounded-md flex items-center 
                                text-neutral-500 hover:text-neutral-600 hover:font-medium dark:text-neutral-200 dark:hover:text-neutral-100
                                ${item.value === value && "bg-neutral-100 dark:bg-neutral-600"}
                            `}
                            label={item.value}
                            value={item.value} 
                            key={item.value} 

                            onClick={() => {
                                setIsOpened(false);

                                if (item.action) {
                                    item.action()
                                }
                            }}
                        />
                    ))}
                </article>
                
            </section>
        </fieldset>
    );
}