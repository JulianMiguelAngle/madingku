type Chips = {
    label: string;
    state?: "active" | "selected" | "disabled";
    onSelectHandler?: () => void;
}

export function Chips({ 
    label, 
    state = "active", 
    onSelectHandler 
}: Chips) {
    return (
        <button className={`
            py-2 px-4 font-medium rounded-lg text-body-small sm:text-body-medium cursor-pointer
            ${state === "active" && "text-neutral-400 dark:text-neutral-100"}
            ${state === "selected" && "bg-[#F7F6FE] text-fiera-400 dark:bg-neutral-600 dark:text-neutral-0"}
            ${state === "disabled" && "text-neutral-300 dark:text-neutral-600 cursor-default select-none"}
        `}
            onClick={() => onSelectHandler && onSelectHandler()}
        >{ label }
        </button>
    );
}