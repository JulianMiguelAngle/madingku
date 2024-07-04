'use client'

import { useRouter } from 'next/navigation';

import { MadingNavbar } from "@components/Navbar";
import { MadingSidebar } from "@components/Sidebar";
import { DropdownProfile } from "@components/DropdownProfile";
import { Breadchumb, BreadchumbsContainer } from "@components/Breadchumbs";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { InputDatetime } from "@components/InputDatetime";
import { Dropdown } from "@components/Dropdown";

import subjectJson from "@/data/subject.json";

import { useState, useEffect } from "react";
import { Chips } from "@/app/components/Chips";

export default function Task() {
    const router = useRouter();

    const [isMounted, setIsMounted] = useState(false);

    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    const [dropdownProfileState, setDropdownProfileState] = useState<"closed" | "opened">("closed");

    const [selectedSubject, setSelectedSubject] = useState<string>("");
    const [category, setCategory] = useState<"individual" | "group">("individual")

    const subjectList: Array<{
        id: string;
        value: any;
        action: () => void;
      }> = [];
    
    subjectJson.forEach((subject) => subjectList.push({
        id: subject.id,
        value: subject.name,
        action() {
          setSelectedSubject(subject.name);
        },
    }));
    
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

                <section className="h-full w-full pt-8 pb-6 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-6 overflow-y-scroll dark:bg-neutral-700">
                    <BreadchumbsContainer>
                        <Breadchumb label="Tugas" href="/task" />
                        <Breadchumb label="Tambahkan tugas baru" href="/task/create" highlighted />
                    </BreadchumbsContainer>

                    <h1 className="text-neutral-700 dark:text-neutral-0 font-semibold text-h2-small sm:text-h2-medium lg:text-h2-large">
                        Tambahkan Tugas Baru
                    </h1>
                    
                    <form action={""}
                        className="flex flex-col gap-y-4 justify-end">
                            
                        <Dropdown 
                            label="Mata kuliah"
                            option="Wajib"
                            items={subjectList}
                            placeholder="Pilih mata kuliah"
                            value={selectedSubject}
                            state="active"
                        />
                        

                        <Input
                            type="text"
                            state="active"
                            label="Judul tugas"
                            option="wajib"
                            placeholder="Membuat Class Diagram"
                        />

                        <Input
                            type="text"
                            state="active"
                            label="Emoji"
                            option="opsional"
                            placeholder="Emoji keren 😎"
                        />

                        <InputDatetime
                            label="Tenggat waktu"
                            state="active"
                            option="wajib"
                        />

                    </form>

                    <fieldset className="flex flex-col gap-y-4">

                        <label htmlFor="category" className="flex items-center justify-between text-body-small sm:text-body-medium">
                            <p className="text-neutral-700 dark:text-neutral-0">Kategory</p>
                            <p className="text-neutral-400 dark:text-neutral-300">Wajib</p>
                        </label>

                        <section className="flex gap-x-3">
                            <Chips
                                label="Individu"
                                state={category === "individual" ? "selected" : "active"}
                                onSelectHandler={() => setCategory("individual")}
                            />

                            <Chips
                                label="Kelompok"
                                state={category === "group" ? "selected" : "active"}
                                onSelectHandler={() => setCategory("group")}
                            />
                        </section>
                    </fieldset>

                    <section className="flex flex-col md:flex-row-reverse gap-4 items-end">
                        <Button
                            variant="primary"
                            state="active"
                            behavior={window.screen.width >= 768 ? "hug-content" : "fill-container"}
                            size="large"
                            label="Tambahkan Tugas Baru"
                        />
                        <Button
                            variant="secondary"
                            state="active"
                            behavior={window.innerWidth >= 768 ? "hug-content" : "fill-container"}
                            size="large"
                            label="Batal"
                            onClickHandler={() => router.push("/task")}
                        />
                    </section>
                </section>
                
            </section>
        </main>
    );
}