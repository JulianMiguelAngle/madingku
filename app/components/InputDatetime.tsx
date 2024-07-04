type InputDatetime = {
    label: string;
    option?: string;
    state?: "active" | "disabled";
    onChangeDateHandler?: (date: string) => void;
    onChangeTimeHandler?: (time: string) => void;
}

export function InputDatetime({
    state = "active",
    label,
    option,
    onChangeDateHandler,
    onChangeTimeHandler
}: InputDatetime) {
    return (
        <fieldset 
            className="flex flex-col gap-4 text-body-small sm:text-body-medium">

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

            <section className="flex items-center gap-x-4">
                <input 
                    className={`
                        max-h-[40px] px-4 pr-3 flex items-center gap-x-3 border border-solid rounded-lg overflow-hidden
                        bg-neutral-0  border-neutral-100 focus-within:border-fiera-100
                        dark:bg-neutral-600 dark:border-neutral-500 dark:focus-within:border-fiera-100
                        w-full py-2.5
                        text-neutral-500 placeholder-neutral-300
                        dark:text-neutral-200 dark:placeholder-neutral-400
                    `}

                    id={label}
                    type={"date"}
                    placeholder={"Tanggal"}
                    disabled={state === "disabled"}
                        
                    onClick={(event) => event.currentTarget.showPicker()} 
                    onChange={(event) => onChangeDateHandler && onChangeDateHandler(event.currentTarget.value)}
                />

                <input 
                    className={`
                        max-h-[40px] max-w-[140px] py-2.5 px-4 pr-3 flex items-center gap-x-3 border border-solid rounded-lg overflow-hidden
                        bg-neutral-0  border-neutral-100 focus-within:border-fiera-100
                        dark:bg-neutral-600 dark:border-neutral-500 dark:focus-within:border-fiera-100
                        text-neutral-500 placeholder-neutral-300
                        dark:text-neutral-200 dark:placeholder-neutral-400
                    `}

                    id={label}
                    type={"time"}
                    placeholder={"Tanggal"}
                    disabled={state === "disabled"}
                        
                    // onClick={(event) => event.currentTarget.showPicker()} 
                    onChange={(event) => onChangeTimeHandler && onChangeTimeHandler(event.currentTarget.value)}
                />
            </section>
        </fieldset>
    );
}