'use client'

import { useRouter } from 'next/navigation';

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { BreadchumbsContainer, Breadchumb } from "@components/Breadchumbs";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useState, useEffect } from "react";

export default function Page() {
    const router = useRouter();

    const [isMounted, setIsMounted] = useState(false);

    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    const [dropdownProfileState, setDropdownProfileState] = useState<"closed" | "opened">("closed");

    const [totalGroups, setTotalGroups] = useState<number>(1);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) return null;

    return (
        <main className="h-screen w-screen flex flex-col items-center">
            <MadingNavbar
                onClickAvatarHandler={() => setDropdownProfileState("opened")}
                onClickMenuHandler={() => setSidebarState("opened")}
            />

            <DropdownProfile
                state={dropdownProfileState}
                onClickOutsideHandler={() => setDropdownProfileState("closed")}
            />

            <section className="h-full w-full flex gap-y-1.5 overflow-y-scroll">
                <MadingSidebar 
                    state={sidebarState}
                    onClickCloseHandler={() => setSidebarState("closed")}
                />

                <section className="h-full w-full pt-8 flex flex-col gap-y-6 overflow-scroll dark:bg-neutral-700">
                    
                    <section className="px-4 sm:px-6 lg:px-12 flex flex-col gap-y-6">
                        <BreadchumbsContainer>
                            <Breadchumb label="Kelompok" href="/group" />
                            <Breadchumb label="Pemrograman I" href="/group/2312" />
                            <Breadchumb label="Buat kelompok" href="/group/2312/create" highlighted />
                        </BreadchumbsContainer>

                        <h1 className="text-neutral-700 dark:text-neutral-0 font-semibold text-h2-small sm:text-h2-medium lg:text-h2-large">
                            Buat Kelompok Pemrograman I
                        </h1>

                        <form action=""
                            className="flex flex-col gap-y-4 justify-end">
                            
                            <Input
                                type="number"
                                state="active"
                                label="Jumlah kelompok"
                                option="wajib"
                                placeholder="7"
                                value={totalGroups}
                                onChangeNumberHandler={(number) => number && setTotalGroups(number)}
                            />

                            <Input
                                type="text"
                                state="active"
                                label="Masukan emoji"
                                option="opsional"
                                placeholder="Emoji keren 😎"
                            />

                            <Input
                                type="number"
                                state="active"
                                label="Minimal anggota"
                                option="wajib"
                                placeholder="2"
                            />

                            <Input
                                type="number"
                                state="active"
                                label="Maksimal anggota"
                                option="opsional"
                                placeholder="4"
                            />

                            <section className="pb-6 flex sm:hidden flex-col gap-4 items-end">
                                <Button
                                    variant="primary"
                                    state="active"
                                    behavior="fill-container"
                                    size="large"
                                    label={`Buat ${totalGroups} kelompok`}
                                />

                                <Button
                                    variant="secondary"
                                    state="active"
                                    behavior="fill-container"
                                    size="large"
                                    label="Batal"
                                    onClickHandler={() => router.push("/group/32423")}
                                />
                            </section>

                            <section className="pb-6 hidden sm:flex flex-row-reverse gap-4 items-end">
                                <Button
                                    variant="primary"
                                    state="active"
                                    behavior="hug-content"
                                    size="large"
                                    label={`Buat ${totalGroups} kelompok`}
                                />

                                <Button
                                    variant="secondary"
                                    state="active"
                                    behavior="hug-content"
                                    size="large"
                                    label="Batal"
                                    onClickHandler={() => router.push("/group/32423")}
                                />
                            </section>
                        </form>
                    </section>
                </section>
                
            </section>
        </main>
    );
}