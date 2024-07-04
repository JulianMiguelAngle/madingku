type Tabs = {
    label: string;
    state: "active" | "selected" | "disabled";
    onClickHandler?: () => void;
};

export function Tabs({
    label,
    state = "active",
    onClickHandler
}: Tabs) {
    return (
        <button className={`
            py-2 px-3 border-0 border-b-[1.5px] border-solid text-body-small sm:text-body-medium
            ${state === "active" && "text-neutral-600 dark:text-neutral-100 cursor-pointer border-none"}
            ${state === "selected" && "text-fiera-400 dark:text-fiera-0 border-fiera-400 dark:border-fiera-0"}
            ${state === "disabled" && "text-neutral-300 dark:text-neutral-500 select-none border-none"}
        `}
        
        onClick={() => onClickHandler && state === "active" && onClickHandler()}>

            { label }
        </button>
    );
}