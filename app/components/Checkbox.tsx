type Checkbox = {
    state: "active" | "selected" | "disabled";
    onClickHandler?: () => void;
}

export function Checkbox({ state, onClickHandler }: Checkbox) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        onClick={() => onClickHandler && onClickHandler()}>

            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className={`
                    ${state === "selected" && "stroke-fiera-400"}
                    ${state !== "selected" && state === "active" ? "stroke-neutral-300" : "stroke-neutral-100"}
                `}
            />
            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#3C2BE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                className={state !== "selected" ? "hidden" : "block"}
            />
        </svg>
    );
}