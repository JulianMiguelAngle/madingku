import Link from "next/link";
import Image from "next/image";

import LogoWithTextLight from "@assets/Logo with text light.svg";

export function Footer() {
    const date = new Date();

    return (
        <footer className={`
            py-6 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-12 items-center text-body-small sm:text-body-medium shadow-light-medium
            bg-neutral-0 border-t border-solid border-neutral-100
        `}>

            <section className="w-full max-w-[800px] flex flex-col gap-y-8">
                <Link href={"/"}>
                    <Image
                        className="h-[60px] w-[120px] sm:w-[150px] cursor-pointer"
                        src={LogoWithTextLight}
                        alt="Madingku Logo"
                    />            
                </Link>

                <section className="w-full grid gap-8 grid-cols-[repeat(auto-fit,minmax(130px,1fr))]">
                    <article className="grow flex flex-col gap-y-4">
                        <h1 className="font-medium text-neutral-700">Eksplor</h1>

                        <nav className="flex flex-col gap-y-3 text-neutral-500">
                            <Link href={"/"}>Beranda</Link>
                            <Link href={"/docs"}>Panduan</Link>
                            <Link href={"/pricing"}>Harga</Link>
                            <Link href={"/about"}>Pusat bantuan</Link>
                        </nav>
                    </article>

                    <article className="grow flex flex-col gap-y-4">
                        <h1 className="font-medium text-neutral-700">Perusahaan</h1>

                        <nav className="flex flex-col gap-y-3 text-neutral-500">
                            <Link href={"https://www.asritech.my.id/"}>Asri Tech</Link>
                            <Link href={"https://www.instagram.com/asritech.id/"}>Sosial media</Link>
                        </nav>
                    </article>
                </section>
            </section>
            {/* https://api.whatsapp.com/send?phone=628981234567&text=Halo%20mau%20order%20bajunya%20yang%20warna%20biru%20gan. */}

            <p className="text-neutral-500">© Madingku {date.getFullYear()}</p>
        </footer>
    );
}