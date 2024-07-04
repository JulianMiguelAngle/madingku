type TextArea = {
    state?: "active" | "disabled";
    label: string;
    option?: string;
    placeholder: string;
    onChangeTextHandler?: (text: string | undefined) => void;
}

export function TextArea({
    state = "active",
    label,
    option,
    placeholder,
    onChangeTextHandler
}: TextArea) {

    return (
        <fieldset className="flex flex-col gap-4 text-body-small md:text-body-medium">

            <section className="flex flex-col gap-2">

                <label htmlFor={label}
                className="flex gap-6 items-center">

                    <p className={`
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

                <textarea 
                    className={`h-[120px] py-2.5 px-4 border border-solid rounded-lg overflow-y-scroll    
                        text-neutral-500 placeholder-neutral-300 dark:text-neutral-200 dark:placeholder-neutral-400
                        bg-neutral-0  border-neutral-100 focus-within:border-fiera-100 dark:bg-neutral-600 dark:border-neutral-500 dark:focus-within:border-fiera-100
                    `}

                    id={label}
                    placeholder={placeholder}
                    disabled={state === "disabled"}
                        
                    onChange={(event) => {
                        if (onChangeTextHandler) {
                            onChangeTextHandler(event.currentTarget.value);
                        }
                    }}>                
                </textarea>
            </section>
        </fieldset>
    );
}