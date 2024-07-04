'use client'

import Image, { StaticImageData } from "next/image";

import btn from "@/app/button.module.css";

import { useTheme } from 'next-themes';

type Button = {
    variant: "primary" | "secondary" | "tertiary" | "destructive";
    state: "active" | "disabled";
    behavior?: "hug-content" | "fill-container";
    size: "small" | "medium" | "large";
    forcedLight?: boolean;
    label: string;
    icon?: StaticImageData;
    onClickHandler?: () => void;
}

export function Button({
    variant,
    state = "active",
    behavior = "hug-content",
    size,
    forcedLight,
    label,
    icon,
    onClickHandler
}: Button) {
    const { resolvedTheme } = useTheme();

    return (
        <button className={`
            ${btn.btn} ${btn["btn-" + size]} 
            ${forcedLight ? (
                btn["btn-" + variant + "-" + state + "-" + "light"]
            ) : (
                btn["btn-" + variant + "-" + state + "-" + resolvedTheme]
            )}
            ${btn["btn-" + behavior]}
        `}
            onClick={() => onClickHandler && onClickHandler()}>

            { label }

            {icon &&
                <Image
                    src={icon}
                    alt={`${label} icon`}
                />
            }
        </button>
    );
}