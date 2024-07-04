type InformationCard = {
    id: string;
    title: string;
    category: string;
    subject: string;
    deadline: string;
    emoji?: string;
}

export function InformationCard({ task }: { task: InformationCard }) {
    return (
        <article className={`px-4 flex flex-col gap-y-6 rounded-lg relative border border-solid
                py-3 sm:py-4 lg:py-[18px] min-w-[300px] h-[180px] sm:min-w-[328px] sm:max-w-[328px] sm:h-[200px] lg:min-w-[360px] lg:max-w-[360px]
                bg-neutral-0 border-neutral-100 shadow-light-medium 
                dark:bg-neutral-600 dark:border-neutral-500 dark:shadow-dark-medium
            `}>

            <section className="h-full flex flex-col gap-y-3">
                
                <section className="flex flex-col gap-y-1.5">
                    <h2 className={`
                        text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-100
                    `}>
                        { task.subject }
                    </h2>

                    <h1 className={`
                        text-h4-small leading-h4-small sm:text-h4-medium sm:leading-h4-medium lg:text-h4-large lg:leading-h4-large 
                        font-medium text-neutral-600 dark:text-neutral-0
                    `}>
                        { task.title }
                    </h1>
                </section>

                <h3 className={`
                    text-body-small sm:text-body-medium text-fiera-400 dark:text-fiera-0
                `}>
                    { task.category }
                </h3>
            </section>

            <h4 className={`
                text-body-small sm:text-body-medium text-neutral-400 dark:text-neutral-100
            `}>
                { task.deadline }
            </h4>

            {task.emoji &&
                <p className="absolute bottom-[12px] right-[16px] text-[64px] select-none rotate-[16deg] opacity-65 dark:opacity-100">
                    { task.emoji }
                </p>
            }            
        </article>
    );
}