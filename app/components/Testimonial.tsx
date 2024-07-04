import Image, { StaticImageData } from "next/image"

type Testimonial = {
    name: string;
    avatar: StaticImageData | string;
    color: string;
    role: string;
    content: string;
}

export function Testimonial({
    name,
    avatar,
    color,
    role,
    content
}: Testimonial) {
    return (
        <article className={`
            py-6 px-4 min-w-[250px] max-w-[280px] h-[280px] sm:min-w-[280px] flex flex-col gap-y-[18px] justify-between rounded-lg
            bg-neutral-0 shadow-light-small
            text-body-small sm:text-body-medium
        `}>
            <p className="leading-body-small sm:leading-body-medium text-neutral-500">
                { content }
            </p>

            <section className="flex flex-col gap-y-3">

                <article className={`
                    w-fit py-1 pl-1 pr-4 flex items-center gap-x-2 rounded-full border border-solid
                    border-neutral-200
                `}
                style={{
                    "backgroundColor": color
                }}>
                    <Image
                        className="h-[28px] w-[28px] sm:h-[28px] sm:w-[28px] aspect-square object-cover rounded-full"
                        src={avatar}
                        quality={100}
                        height={300}
                        width={300}
                        alt={`${avatar} profile`}
                    />

                    <h2 className="text-neutral-100">{ name }</h2>
                </article>

                <h1 className="text-neutral-500"> {role} </h1>
            </section>
        </article>
    );
}