import Link from "next/link";

type Subject = {
    id: string;
    name: string;
    sks: number;
    totalGroups: number | string;
}

export function SubjectCard({ subject }: { subject: Subject }) {
    return (
        <Link className={`px-4 py-[18px] flex flex-col gap-y-6 rounded-lg relative border border-solid
                h-[140px] sm:w-[328px] sm:h-[160px]
                bg-neutral-0 border-neutral-100 shadow-light-medium 
                dark:bg-neutral-600 dark:border-neutral-500 dark:shadow-dark-medium
            `}
            href={`/subject/${subject.id}`}>

            <section className="h-full flex flex-col gap-y-1.5">
                <h2 className={`
                    text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-100
                `}>
                    {`${subject.sks} SKS`}
                </h2>

                <h1 className={`
                    text-h4-small leading-h4-small sm:text-h4-medium sm:leading-h4-medium lg:text-h4-large lg:leading-h4-large 
                    font-medium text-neutral-600 dark:text-neutral-0
                `}>
                    { subject.name }
                </h1>
            </section>

            <h3 className={`w-fit
                text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-100
            `}>
                {subject.totalGroups === "no group" ? (
                    "Tidak ada kelompok"
                ) : (
                    `${subject.totalGroups} kelompok`
                )}
            </h3>         
        </Link>
    );
}