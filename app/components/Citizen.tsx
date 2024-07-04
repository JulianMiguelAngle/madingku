import Image, { StaticImageData } from "next/image";

type CitizenProfileProps = {
    name: string;
    nim: string;
    avatar: StaticImageData | string;
}

type CitizenChipProps = CitizenProfileProps & {
    onClickHandler?: () => void;
    onRemoveHandler?: () => void;
}

export function CitizenProfile({ name, nim, avatar }: CitizenProfileProps) {
    return (
        <article className="flex gap-x-3 items-center">

            <Image
                className="h-[50px] w-[50px] object-cover rounded-full"
                quality={100}
                height={100}
                width={100}
                src={avatar}
                alt={`${name} profile picture`}
            />

            <section className="flex flex-col gap-y-2">
                <h3 className="text-neutral-600 dark:text-neutral-100 text-body-small sm:text-body-medium font-medium">
                    { name }
                </h3>

                <p className="text-neutral-400 dark:text-neutral-200 text-body-small sm:text-body-medium">
                    { nim }
                </p>
            </section>
        </article>
    );
}