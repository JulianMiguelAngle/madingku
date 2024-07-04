'use client'

import { useTheme } from "next-themes";
import { useState } from "react";

import Image from "next/image";

import eyeLight from "@assets/Light/Eye.svg";
import eyeDark from "@assets/Dark/Eye.svg";

import eyeSlashLight from "@assets/Light/Eye slash.svg";
import eyeSlashDark from "@assets/Dark/Eye slash.svg";

import eyeDisabledLight from "@assets/Light/Eye disabled.svg";
import eyeDisabledDark from "@assets/Dark/Eye disabled.svg";

type Input = {
    type: "text" | "number" | "password";
    state?: "active" | "disabled";
    label: string;
    value?: string | number;
    option?: string;
    placeholder: string;
    message?: string | string[];
    messageType?: "warning" | "success" | "error";
    onChangeTextHandler?: (text: string | undefined) => void;
    onChangeNumberHandler?: (number: number | undefined) => void;
}

export function Input({
    type,
    state = "active",
    label,
    value,
    option,
    placeholder,
    message,
    messageType,
    onChangeTextHandler,
    onChangeNumberHandler
}: Input) {
    const { resolvedTheme } = useTheme();
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    return (
        <fieldset 
            className="flex flex-col gap-4 text-body-small sm:text-body-medium">

            <section
            className="flex flex-col gap-2">

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

                <section
                className={`h-[50px] px-4 flex items-center border border-solid rounded-lg overflow-hidden
                    bg-neutral-0  border-neutral-100 focus-within:border-fiera-100
                    dark:bg-neutral-600 dark:border-neutral-500 dark:focus-within:border-fiera-100`}>

                    <input 
                        className={`w-full py-2.5
                            text-neutral-500 placeholder-neutral-300
                            dark:text-neutral-200 dark:placeholder-neutral-400
                        `}

                        id={label}
                        name={label}
                        type={(type === "text" || type === "password") ? (isPasswordHidden && type === "password" ? "password" : "text") : type}
                        placeholder={placeholder}
                        disabled={state === "disabled"}
                        value={value}
                        
                        onChange={(event) => {
                            if (onChangeTextHandler) {
                                onChangeTextHandler(event.currentTarget.value);
                            }
                            
                            if (onChangeNumberHandler) {
                                onChangeNumberHandler(Number.parseInt(event.currentTarget.value))
                            }
                        }}>                
                    </input>

                    {type === "password" ? (
                        state !== "disabled" ? (
                            <Image
                                src={isPasswordHidden ? ( 
                                    resolvedTheme === "light" ? eyeLight : eyeDark 
                                ) : (
                                    resolvedTheme === "light" ? eyeSlashLight : eyeSlashDark
                                )}

                                alt="eye icon"
                                
                                onClick={() => {
                                    if (isPasswordHidden) {
                                        setIsPasswordHidden(false);
                                    } else {
                                        setIsPasswordHidden(true);
                                    }
                                }}
                            />
                        ) : (
                            <Image
                                src={resolvedTheme === "light" ? eyeDisabledLight : eyeDisabledDark}
                                alt="eye disabled icon"
                            />
                        )
                    ) : ( 
                        null
                    )}
                </section>
            </section>
            
            <p
            className={`
                ${messageType === "success" && "text-additional-success"}
                ${messageType === "error" && "text-additional-error"}
                ${messageType === "warning" && "text-additional-warning"}
            `}>
                { message }</p>
        </fieldset>
    );
}