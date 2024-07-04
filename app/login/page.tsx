'use client'

import Image from "next/image";
import Link from "next/link";

import Logo from "@assets/Logo.svg";

import action from "@lib/server-action";

import { MainNavbar } from "@components/Navbar";
import { MainSidebar } from "../components/Sidebar";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useFormState } from "react-dom";
import { useState, useEffect } from "react";

export default function Login() {
    const [isMounted, setIsMounted] = useState(false);

    const [state, dispatch] = useFormState(action, undefined);
    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) return null;

    return (
        <main className="h-screen w-screen px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-y-6">
            <MainNavbar
                onClickMenuHandler={() => setSidebarState("opened")}
            />

            <MainSidebar 
                state={sidebarState}
                onClickCloseHandler={() => setSidebarState("closed")}
            />

            <section className="w-full max-w-[400px] pt-32 flex flex-col items-center gap-y-1.5">

                <article className="flex items-center gap-x-2">
                    <Image
                        src={Logo}
                        alt="Madingku Logo"
                        height={55}
                        width={55}
                    />
                    <h1 className="font-medium text-h4-small sm:text-h4-medium lg:text-h4-large text-neutral-700 dark:text-neutral-0">
                        Masuk ke <span className="text-fiera-400 dark:text-fiera-100">Madingku</span>
                    </h1>
                </article>

                <p className="text-body-small sm:text-body-medium text-neutral-600 dark:text-neutral-100">
                    Masukan Nim dan Password untuk masuk
                </p>
            </section>

            <form action={dispatch}
                className="w-full max-w-[400px] flex flex-col gap-y-6">

                <Input
                    type="text"
                    state="active"
                    label="Nim"
                    placeholder="2211826864"
                    messageType="error"
                    message={state?.errors.nim}
                    />

                <Input
                    type="password"
                    state="active"
                    label="Password"
                    placeholder="ZahraPutri1341"
                    messageType="error"
                    message={state?.errors.password}
                />

                <section className="w-full max-w-[400px] flex flex-col gap-y-4">
                    <Button
                        variant="primary"
                        state="active"
                        behavior="fill-container"
                        size="large"
                        label="Masuk"
                    />
                </section>
            </form>            

            <p className="text-body-small sm:text-body-medium text-neutral-500 dark:text-neutral-200 text-center">
                Belum punya akun?&nbsp;
                <Link   className="underline text-fiera-400 dark:text-fiera-100"
                        href="/register">Buat akun</Link>
            </p>
        </main>
    );
}