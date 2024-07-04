import Link from "next/link";
import { usePathname } from "next/navigation";

type GroupCard = {
    id: string;
    title: string;
    subject: string;
    name: string;
    totalMember: number;
    emoji?: string;
}

export function GroupCard({ group }: { group: GroupCard }) {
    const pathname = usePathname();
    
    return (
        <Link className={`px-4 py-3 sm:py-4 lg:py-[18px] flex flex-col justify-between gap-y-6 rounded-lg relative border border-solid
                min-w-[300px] max-w-[300px] h-[180px] min-h-[180px] max-h-[180px] sm:min-w-[328px] sm:max-w-[328px] sm:max-h-[200px] lg:min-w-[330px] lg:max-w-[330px]
                bg-neutral-0 border-neutral-100 shadow-light-medium 
                dark:bg-neutral-600 dark:border-neutral-500 dark:shadow-dark-medium
            `}
            href={`${pathname}/${group.id}`}>

            <section className="flex flex-col gap-y-1.5 overflow-hidden">
                <h2 className={`
                    text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-100
                `}>
                    { group.subject }
                </h2>

                <h1 className={`
                    text-h4-small leading-h4-small sm:text-h4-medium sm:leading-h4-medium lg:text-h4-large lg:leading-h4-large 
                    line-clamp-3 sm:line-clamp-2 text-ellipsis font-medium text-neutral-600 dark:text-neutral-0
                `}>
                    { group.title }
                </h1>
            </section>

            <section className="flex items-center justify-between">
                <h3 className={`
                    text-body-small sm:text-body-medium text-fiera-400 dark:text-fiera-0
                `}>
                    { group.name }
                </h3>

                <h4 className={`w-fit
                    text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-100
                `}>
                    {`${group.totalMember} orang`}
                </h4>
            </section>

            {group.emoji && 
                <p className="absolute bottom-[24px] right-[16px] text-[64px] select-none rotate-[16deg] opacity-65">
                    { group.emoji }
                </p>
            }
            
        </Link>
    );
}