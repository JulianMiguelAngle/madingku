'use client'

import { useRouter, useParams, usePathname } from 'next/navigation';

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { BreadchumbsContainer, Breadchumb } from "@components/Breadchumbs";
import { CitizenProfile } from '@components/Citizen';
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import citizenJson from "@/data/class-citizen.json";

import { useState, useEffect } from "react";
import { Searchbar } from '@/app/components/Searchbar';

export default function Page() {
    const router = useRouter();
    const params = useParams<{ subjectId: string; groupId: string; }>();

    const [isMounted, setIsMounted] = useState(false);

    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    const [dropdownProfileState, setDropdownProfileState] = useState<"closed" | "opened">("closed");

    const [groupMember, setGroupMember] = useState<[{
        nim: string;
        name: string;
    }] | null>(null);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) return null;

    return (
        <main className="h-screen w-screen flex flex-col items-center bg-neutral-0">
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

                <section className="h-full w-full pt-8 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-8 overflow-y-scroll dark:bg-neutral-700">
                    <BreadchumbsContainer>
                        <Breadchumb label="Kelompok" href="/group" />
                        <Breadchumb label="Pemrograman I" href="/group/2312" />
                        <Breadchumb label="Buat kelompok" href="/group/2312/create" highlighted />
                    </BreadchumbsContainer>

                    <section>
                        <form action="">
                            <Input
                                type="text"
                                state="active"
                                label="Nama kelompok"
                                option="wajib"
                                placeholder="Kelompok bansos premium"
                                // value={totalGroups}
                                // onChangeNumberHandler={(number) => number && setTotalGroups(number)}
                            />

                            <Input
                                type="text"
                                state="active"
                                label="Judul materi"
                                option="wajib"
                                placeholder="Membuat Model Data ERD"
                                // value={totalGroups}
                                // onChangeNumberHandler={(number) => number && setTotalGroups(number)}
                            />

                            <Input
                                type="text"
                                state="active"
                                label="Masukan emoji"
                                option="opsional"
                                placeholder="Emoji keren 😎"
                            />
                        </form>

                        <section>
                            <h2>
                                Anggota
                            </h2>

                            {groupMember && (
                                <section>

                                </section>
                            )}

                            <section>
                                <p>
                                    Tambahkan Anggota Baru
                                </p>

                                <Searchbar
                                    placeholder="Cari NIM"
                                />

                                <section>
                                    <h3>
                                        Hasil Pencarian
                                    </h3>

                                    
                                </section>
                            </section>

                            
                        </section>


                    </section>
                    
                        <article className="flex flex-col gap-y-8">
                           
                            <section>
                                <Button
                                    variant="primary"
                                    state="active"
                                    behavior="fill-container"
                                    size="large"
                                    label="Simpan Perubahan"
                                    // onClickHandler={() => router.push(pathname + "/edit")}
                                />

                            </section>
                        </article>
                    
                        <h1>Data tidak ditemukan</h1>
                    

                    
                </section>
            </section>
        </main>
    );
}