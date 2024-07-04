import Image from "next/image";

import arrowRight from "@assets/Light/Arrow right.svg";

type FeatureOption = {
    label: string;
    state?: "active" | "selected" | "disabled";
    onClickOptionHandler?: () => void;
}

export function FeatureOption({
    label,
    state = "active",
    onClickOptionHandler
}: FeatureOption) {
    return (
        <article
        className={`
            h-[40px] w-full py-2 pl-2 pr-3 flex items-center gap-x-6 rounded-lg cursor-pointer
            ${state === "active" && "hover:shadow-light-medium text-neutral-400 hover:text-neutral-600"}
            ${state === "selected" && "text-neutral-600 shadow-light-medium "}
            ${state === "disabled" && "bg-neutral-0 text-neutral-300 cursor-default select-none"}
        `}
        onClick={() => onClickOptionHandler && onClickOptionHandler()}>

            <h1 className={"w-full text-body-small sm:text-body-medium font-medium"}>
                { label }
            </h1>

            <Image
                src={arrowRight}
                alt={"Arrow right icon"}
                className={`${state === "selected" ? "stroke-neutral-600" : "hidden"}`}
            />
        </article>
    );
}